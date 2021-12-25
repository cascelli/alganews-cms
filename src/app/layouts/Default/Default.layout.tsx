import NavBar from '../../components/NavBar'
import * as DL from './Default.layout.styles'

interface DefaultLayoutProps {
  children: React.ReactNode
}

function DefaultLayout(props: DefaultLayoutProps) {
  return <DL.Wrapper>

    <DL.Header>
      Header
    </DL.Header>

    <DL.Main>
      <DL.Navigation><NavBar /></DL.Navigation>
      <DL.FeaturedContent> { props.children } </DL.FeaturedContent>
      <DL.Aside>Aside</DL.Aside>
    </DL.Main>

  </DL.Wrapper>

}

export default DefaultLayout
