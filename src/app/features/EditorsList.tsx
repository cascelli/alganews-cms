//import { useEffect, useState } from "react";
import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";

//import { User } from "../../sdk/@types";
//import UserService from "../../sdk/services/User.service";
//import getEditorDescription from "../../sdk/utils/getEditorDescription";
// Substituindo os imports dos services do sdk local pelo modulo alganews-sdk
//  criado fora do projeto como um pacote npm separado pois será usado em mais
//  partes do projeto alganews
//import { getEditorDescription, User, UserService } from "danielbonifacio-sdk";
import { getEditorDescription } from "danielbonifacio-sdk";

import Profile from "../components/Profile";
import useEditors from "../../core/Hooks/useEditors";

export default function EditorsList() {
  // const [editors, setEditors] = useState<User.EditorSummary[]>([])
  // Substituido pela linha abaixo
  const { editorsList, loading, fetchAllEditors } = useEditors();

  // useEffect(() => {
  //   UserService
  //     .getAllEditors()
  //     //.then(editors => setEditors(editors))
  //     .then(setEditors) // Abreviacao da linha anterior
  // }, [])
  useEffect(() => {
    fetchAllEditors();
  }, [fetchAllEditors]);

  //if (!editor.length)
  if (!editorsList.length)
    //return null // garante que usuario nao será null na renderizacao
    return (
      <EditorsListWrapper>
        <Skeleton height={40} width={75} />
        <Skeleton height={40} width={75} />
        <Skeleton height={40} width={75} />
        <Skeleton height={40} width={75} />
      </EditorsListWrapper>
    );

  return (
    <EditorsListWrapper>
      {/* {editor.map((editor) => { */}
      {editorsList.map((editor) => {
        return (
          <Profile
            key={editor.id}
            editorId={editor.id}
            name={editor.name}
            description={getEditorDescription(new Date(editor.createdAt))}
            avatarUrl={editor.avatarUrls.small}
          />
        );
      })}
      {loading ? "buscando mais informações" : null}
    </EditorsListWrapper>
  );
}

const EditorsListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
`;
