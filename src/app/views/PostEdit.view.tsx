import usePageTitle from "../../core/Hooks/usePageTitle"
import PostForm from "../features/PostForm"
import DefaultLayout from "../layouts/Default"

export default function PostEditView() {
  usePageTitle('Novo post')
  return <DefaultLayout>
    <PostForm />
  </DefaultLayout>
  
}
