import jwtDecode from "jwt-decode";
import React, { Suspense } from "react";
import { useEffect, useMemo } from "react";
import {
  //BrowserRouter,
  Route,
  Switch,
  useHistory,
  useLocation,
} from "react-router-dom";
import { Authentication } from "../auth/Auth";
import AuthService from "../auth/Authorization.service";
import useAuth from "../core/hooks/useAuth";
import info from "../core/utils/info";
import Loading from "./components/Loading";

// todo : Implementar Lazy Loading nas views
const Home = React.lazy(() => import("./views/Home.view"));
const EditorProfileView = React.lazy(
  () => import("./views/EditorProfile.view")
);
const EditorsListView = React.lazy(() => import("./views/EditorsList.view"));
const NotFound404 = React.lazy(() => import("./views/NotFound404.view"));
const PostCreateView = React.lazy(() => import("./views/PostCreate.view"));
const PostEditView = React.lazy(() => import("./views/PostEdit.view"));

// Usando variavel de ambiente para determinar valores
const APP_BASE_URL = process.env.REACT_APP_BASE_URL;

export default function App() {
  // Necessários na implementacao da segurança
  const history = useHistory();
  const location = useLocation();
  const { user, fetchUser } = useAuth();

  useEffect(() => {
    window.onunhandledrejection = function (error: PromiseRejectionEvent) {
      console.log(error);
      info({
        title: error.reason.response?.data.title || "Erro",
        description: error.reason.response?.data.detail || error.reason.message,
      });
    };
  }, []);

  // -- Lógica de autenticação - início ---
  // --
  useEffect(() => {
    // Define uma funcão assincrona com await a ser chamada posteriormente (identify)
    async function identify() {
      // Verifica se o usuario está em uma rota de identificação
      // Cria constante para armazenar esta informaçào
      const isInAuthorizationRoute = window.location.pathname === "/authorize";

      // Armazena o code que vem retornado na rota de identificacao após
      // informação das credenciais do usuário que está se cadastrando para uso da aplicação
      const code = new URLSearchParams(window.location.search).get("code");

      // Obtém codeVerifier
      const codeVerifier = AuthService.getCodeVerifier();
      // Obtém accessToken
      const accessToken = AuthService.getAccessToken();

      // Não exista o Access Token armazenado na aplicação e
      //  não estiver na rota de identificação, enviar para tela de login
      if (!accessToken && !isInAuthorizationRoute) {
        AuthService.imperativelySendToLoginScreen();
      }

      // verifica se está na rota de autorização
      if (isInAuthorizationRoute) {
        // Verifica se não tem o código
        if (!code) {
          //notification.error({
          //  message: "Código não foi informado",
          //});
          // desabilitado trecho acima porque é do AntDesign
          // Substituido pela funcao info criada nesse app
          info({
            title: "Erro",
            description: "Código de autorização não informado",
          });
          // Envia para a tela de login
          AuthService.imperativelySendToLoginScreen();
          return; // interrompe a execução
        }

        // verifica se não tem um codeVerifier
        if (!codeVerifier) {
          // necessario fazer logout
          AuthService.imperativelySendToLogout();
          return;
        }

        // busca o primeiro token de acesso
        const {
          access_token,
          refresh_token,
        } = await AuthService.getFirsAccessTokens({
          code,
          codeVerifier,
          //redirectUri: "http://localhost:3000/authorize",
          // Alterado para poder funcionar em conjunto com o alganews-admin
          //redirectUri: "http://localhost:3001/authorize",
          redirectUri: `${APP_BASE_URL}/authorize`,
        });

        // armazena o AccessToken no storage local
        AuthService.setAccessToken(access_token);
        // armazena o RefreshToken no storage local
        AuthService.setRefreshToken(refresh_token);

        // Decodifica o token
        const decodedToken: Authentication.AccessTokenDecodedBody = jwtDecode(
          access_token
        );
        // Busca o usuario
        fetchUser(decodedToken["alganews:user_id"]);

        // envia o usuario para a home
        history.push("/");
      }

      // Verifica se tem um accessToken
      if (accessToken) {
        // Decodifica o token
        const decodedToken: Authentication.AccessTokenDecodedBody = jwtDecode(
          accessToken
        );
        // Busca o usuario
        fetchUser(decodedToken["alganews:user_id"]);
      }
    }

    // Executa funcao assincrona de identificação
    identify();
  }, [history, fetchUser]);

  const isAuthorizationRoute = useMemo(
    () => location.pathname === "/authorize",
    [location.pathname]
  );

  //if (isAuthorizationRoute || !user) return <GlobalLoading />;
  // Substituido por Loading porque GlobalLoading não existe neste projeto
  if (isAuthorizationRoute || !user) return <Loading show />;
  // --
  // -- Lógica de autenticação - fim ---

  return (
    // Removido e levado para /src/index.tsx
    // <BrowserRouter>
    // LazyLoading :
    <Suspense fallback={<Loading show />}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/editores" exact component={EditorsListView} />
        <Route path="/editores/:id" exact component={EditorProfileView} />
        <Route path="/posts/criar" exact component={PostCreateView} />
        <Route path="/posts/editar/:id" exact component={PostEditView} />
        <Route component={NotFound404} />
      </Switch>
    </Suspense>
    // </BrowserRouter>
  );
}
