import { useParams } from "react-router-dom"
import usePageTitle from "../../core/Hooks/usePageTitle"
import PostForm from "../features/PostForm"
import DefaultLayout from "../layouts/Default"

export default function PostEditView() {
  const params = useParams<{ id: string }>()
  usePageTitle('Novo post')
  return <DefaultLayout>
    <PostForm postId={ Number(params.id) }/>
  </DefaultLayout>
  
}
