import usePageTitle from "../../core/Hooks/usePageTitle"
import PostsList from "../features/PostsList"
import UserMetrics from "../features/UserMetrics"
import DefaultLayout from "../layouts/Default"

export default function Home() {
  usePageTitle('Home')
  return <DefaultLayout>

    <UserMetrics />

    <PostsList />
 
  </DefaultLayout>
  
}