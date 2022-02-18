import usePageTitle from "../../core/Hooks/usePageTitle"
import ErrorBoundary from "../components/ErrorBoundary"
import PostsList from "../features/PostsList"
import UserEarnings from "../features/UserEarnings"
import UserPerformance from "../features/UserPerformance"
import UserTopTags from "../features/UserTopTags"
import DefaultLayout from "../layouts/Default"

export default function Home() {
  usePageTitle('Home')
  return <DefaultLayout>

    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', gap: 32 }}>

      <ErrorBoundary component={'top tags'}>
        <UserTopTags />
      </ErrorBoundary>    

      <ErrorBoundary component={'earnings'}>
        <UserEarnings />
      </ErrorBoundary>    

    </div>

    {/* <ErrorBoundary component={'performance'}> */}

    {/* 
        Forma alternativa e mais eficiente de implementação do ErrorBoundary em um componente :

        Usando HOC (Higher Order Component) para inserir o ErrorBoundary 
        automaticamente no mesmo sem ser necessário delimitá-lo com
        o bloco <ErrorBoundary></ErrorBoundary>

    */}

      <UserPerformance />
    {/* </ErrorBoundary> */}

    <ErrorBoundary component={'lista de posts'}>
      <PostsList />
    </ErrorBoundary>
 
  </DefaultLayout>
  
}