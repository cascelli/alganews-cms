import usePageTitle from "../../core/Hooks/usePageTitle"
import PostForm from "../features/PostForm"
import DefaultLayout from "../layouts/Default"

export default function PostCreateView() {
  usePageTitle('Novo post')
  return <DefaultLayout>
    <PostForm />
  </DefaultLayout>
  
}
