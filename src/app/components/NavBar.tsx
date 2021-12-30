// import { MouseEvent } from "react";
// import { useHistory } from "react-router-dom";

// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function NavBar() {

  /*
  // Obtem o history de nevegacao
  const history = useHistory();
  
  function handleAnchorClick(e: MouseEvent<HTMLAnchorElement>) {
    // previne o evento padrao do click de fazer uma nova requisicao
    e.preventDefault()
    console.log('clicou')

    //const newRoute = e.currentTarget.href
    //console.log(newRoute) 

    // recuperando a rota selecionada em NavBar 
    const newRoute = e.currentTarget.getAttribute('href')
    console.log(newRoute) 

    if (newRoute) // Verifica se a nova rota existe
    history.push(newRoute) // Faz o push 

  }
  */
  // Codigo acima substituido



  // return <nav>
  return <>
    {/* <ul> */}
    <List>
      {/* Substituindo <a href> por <Link to>
      <li><a onClick={handleAnchorClick} href="/home">Home</a></li>
      <li><a onClick={handleAnchorClick} href="/contato">Contato</a></li> 
      */}

      {/* <Item><Link to="/home">Home</Link></Item>
      <Item><Link to="/contato">Contato</Link></Item>
      <Item><Link to="/calc/1/2">Calculo - 1 + 2</Link></Item> */}

      {/*<Item><NavLink exact to="/home">Home</NavLink></Item> */}
      <Item><NavLink exact to="/">Home</NavLink></Item>
      <Item><NavLink exact to="/editores">Editores</NavLink></Item>
      <Item><NavLink exact to="/posts/criar">Novo post</NavLink></Item>

      <Item><NavLink exact to="/contato">Contato</NavLink></Item>
      <Item><NavLink exact to="/calc/1/2">Calculo - 1 + 2</NavLink></Item>

    {/* </ul> */}
    </List>
  </>
  // </nav>

}

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  list-style: none;
`

const Item = styled.li`
  text-transform: lowercase;
  font-size: 18px;

  a {
    text-decoration: none;
    color: #274060;

    &.active {
      color: #09f;
    }
  }
`