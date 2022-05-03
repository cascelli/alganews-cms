import { format } from "date-fns";
import ptBR from "date-fns/esm/locale/pt-BR";
import { useCallback } from "react";
import Skeleton from "react-loading-skeleton";
import AuthService from "../../../auth/Authorization.service";
import useAuth from "../../../core/hooks/useAuth";
import Button from "../Button/Button";
import * as SC from "./SessionController.styles";
import confirm from "../../../core/utils/confirm";

export interface SessionControllerProps {
  name: string;
  description: string;
  onLogout?: () => any;
}

function SessionController(props: SessionControllerProps) {
  // Necessários com uso de autenticacao
  const { user } = useAuth();
  const logout = useCallback(() => {
    confirm({
      title: "Deseja sair ?",
      onConfirm: AuthService.imperativelySendToLogout,
    });
  }, []);

  if (!user) return <Skeleton height={215} />;

  return (
    <SC.Wrapper>
      {/* <SC.Avatar src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" /> */}
      <SC.Avatar src={user.avatarUrls.small} />
      {/* <SC.Name>{props.name}</SC.Name> */}
      <SC.Name>{user.name}</SC.Name>
      {/* <SC.Description>{props.description}</SC.Description> */}
      <SC.Description>
        Editor desde{" "}
        <strong>
          {/* {format(new Date(user.createdAt), "MMMM 'de' yyyy", { locale: ptBR })} */}
          {format(new Date(user.createdAt), "MMM 'de' yyyy", { locale: ptBR })}
        </strong>
      </SC.Description>
      {/* <Button variant="danger" label="Logout" onClick={props.onLogout} /> */}
      <Button variant="danger" label="Logout" onClick={logout} />
    </SC.Wrapper>
  );
}

export default SessionController;
