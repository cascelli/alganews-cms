import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton"
import styled from "styled-components";
import { User } from "../../sdk/@types";
import UserService from "../../sdk/services/User.service";
import getEditorDescription from "../../sdk/utils/getEditorDescription";
import Profile from "../components/Profile";

export default function EditorsList() {

  const [editors, setEditors] = useState<User.EditorSummary[]>([])

  useEffect(() => {
    UserService
      .getAllEditors()
      //.then(editors => setEditors(editors))
      .then(setEditors) // Abreviacao da linha anterior
  }, [])


  if (!editors)
    //return null // garante que usuario nao será null na renderizacao
    return <EditorsListWrapper>
      <Skeleton height={40} width={75} />
      <Skeleton height={40} width={75} />
      <Skeleton height={40} width={75} />
      <Skeleton height={40} width={75} />
    </EditorsListWrapper>


  return <EditorsListWrapper>
    {
      editors.map(editor => {
        return <Profile 
          key={editor.id}
          editorId={editor.id}
          name={editor.name}
          description={getEditorDescription(new Date(editor.createdAt))}
          avatarUrl={editor.avatarUrls.small}
        />
      })
    }

  </EditorsListWrapper>

}

const EditorsListWrapper=styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
`
