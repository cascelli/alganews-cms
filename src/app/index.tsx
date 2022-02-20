import { useEffect } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import info from "../core/utils/info"
import EditorProfileView from "./views/EditorProfile.view"
import EditorsListView from "./views/EditorsList.view"
import Home from "./views/Home.view"
import NotFound404 from "./views/NotFound404.view"
import PostCreateView from "./views/PostCreate.view"
import PostEditView from "./views/PostEdit.view"

export default function App() {

  // Exuecuta um codigo quando o componmente for montado
  useEffect(() => {
    // Executa objeto window, propriedade onUnhandledRejection
    // Para manipular erros não tratados 
    window.onunhandledrejection = function(error: PromiseRejectionEvent) {
      //console.log('Houve um erro de promises')
      console.log(error)
      info({
        //title: 'Erro',
        title: error.reason.response?.data.title || 'Erro',
        //description: 'Descricao do erro'
        description: error.reason.response?.data.detail || error.reason.message
      })
    }
  }, [])

    return <BrowserRouter>
      {/* <NavBar /> */}
      <Switch>

        { /* React Router Versao 5.1 - Instalar : yarn add react-router@5.1.0 */ }
        { /* - Feito downgrade do React Router para versao 5.1.0
            - Problemas com versões mais novas : parâmetro exact - implementação alternativa não funcional */ }

          {/* <Route path="/home" exact> <Home /> </Route> */}
          {/* <Route path="/" exact> {<Home />} </Route> */}
          <Route path="/" exact component={Home} />

          {/* <Route path="/editores" exact> <EditorsListView /> </Route> */}
          <Route path="/editores" exact component={EditorsListView} />

          {/* <Route path="/editores/:id" > <EditorProfileView /> </Route> */}
          <Route path="/editores/:id" exact component={EditorProfileView} />

          {/* <Route path="/posts/criar" > <PostCreateView /> </Route> */}
          <Route path="/posts/criar" exact component={PostCreateView} />

          {/* <Route path="/posts/editar/:id > <PostEditView /> </Route> */}
          <Route path="/posts/editar/:id" exact component={PostEditView} />

          { /* Eliminar da aplicação - inicio - deixado apenas como exemplo */}
          {/* <Route path="/contato" > <Contact /> </Route> */}
          {/* <Route path="/usuario/:userId" > <UserView /> </Route> */}
          {/* <Route path="/calc/:a/:b" > <CalcView /> </Route> */}
          { /* Eliminar da aplicação - fim */}

          {/* <Route> <NotFound404 /> </Route> */}
          <Route component={NotFound404} />



        { /* React Router Versao > 5.1 e < 6 */ }

          { /*

          <Route path="/home" children={<Home />} />

          <Route path="/editores" children={<EditorsListView />} />
          // <Route path="/editores/:id" children={<EditorProfileView />} /> //

          <Route path="/editor/:id" children={<EditorProfileView />} />
          <Route path="/posts/criar" children={<PostCreateView />} />

          // Eliminar da aplicação - inicio - deixado apenas como exemplo //
          <Route path="/contato" children={<Contact />} />
          <Route path="/usuario/:userId" children={<UserView />} />
          <Route path="/calc/:a/:b" children={<CalcView />} />
          // Eliminar da aplicação - fim //

          <Route> <NotFound404 /> </Route>

          */ }



        { /* React Router - Versão >= 6 */ }
        
          { /*
          <Route path={'/'} element={<Home /> } />
          <Route path={'/contato'} element ={<Contact />} />
          <Route element={<NotFound404 />} /> */}

          {/* <Route path={'/home'} element={<Home />}></Route>
          <Route path={'/contato'} element={<Contact />} ></Route> 
          <Route element={<NotFound404 />} ></Route> */}



      </Switch>
      {/* </NavBar> */}
      </BrowserRouter>

}

