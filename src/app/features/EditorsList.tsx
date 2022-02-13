import { useEffect } from "react";
import styled from "styled-components";
import { User } from "../../sdk/@types/User";
import PostService from "../../sdk/services/Post.service";
import ConfirmStories from "../../stories/Confirm.stories";
import Profile from "../components/Profile";

export default function EditorsList() {

  //const editors: AlgaNews.components['schemas']['EditorSummary'][] = []
  const editors: User.EditorSummary[] = []

  useEffect(() => {
    const posts = PostService.getAllPosts()
    console.log(posts)
  },[])

  return <EditorsListWrapper>
    <Profile editorId={1} name="Daniel Bonifácio" description="Editor a 8 anos" />
    <Profile editorId={2} name="João Frango" description="Editor a 2 anos" />
    <Profile editorId={3} name="Alex Teixeira" description="Editor a 2 anos" />
    <Profile editorId={4} name="Camila Vasconcellos" description="Editora a 6 anos" />
    <Profile editorId={5} name="Gabriel Freitas" description="Editor a 2 meses" />
  </EditorsListWrapper>

}

const EditorsListWrapper=styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
`
