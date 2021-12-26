import usePageTitle from "../../core/Hooks/usePageTitle"
import PostsList from "../features/PostsList"
import UserPerformance from "../features/UserPerformance"
import UserTopTags from "../features/UserTopTags"
import DefaultLayout from "../layouts/Default"

export default function Home() {
  usePageTitle('Home')
  return <DefaultLayout>

    <UserTopTags />

    <UserPerformance />

    <PostsList />
 
  </DefaultLayout>
  
}