import usePageTitle from "../../core/Hooks/usePageTitle"
import DefaultLayout from "../layouts/Default"

export default function Home() {
  usePageTitle('Home')
  return <DefaultLayout>
    <h1>Home</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis illo rem dolorum, magni blanditiis reprehenderit! Deserunt nihil velit pariatur beatae.</p>

  </DefaultLayout>
}