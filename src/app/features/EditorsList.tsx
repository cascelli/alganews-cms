import styled from "styled-components";
import Profile from "../components/Profile";

export default function EditorsList() {

  return <EditorsListWrapper>
    <Profile name="Daniel Bonifácio" description="Editor a 8 anos" />
    <Profile name="João Frango" description="Editor a 2 anos" />
    <Profile name="Alex Teixeira" description="Editor a 2 anos" />
    <Profile name="Camila Vasconcellos" description="Editora a 6 anos" />
    <Profile name="Gabriel Freitas" description="Editor a 2 meses" />
  </EditorsListWrapper>

}

const EditorsListWrapper=styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
`
