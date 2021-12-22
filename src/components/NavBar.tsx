// import { MouseEvent } from "react";
// import { useHistory } from "react-router-dom";

import { Link } from "react-router-dom";

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



  return <nav>
    <ul>
      {/* Substituindo <a href> por <Link to>
      <li><a onClick={handleAnchorClick} href="/Home">Home</a></li>
      <li><a onClick={handleAnchorClick} href="/contato">Contato</a></li> 
      */}
      <li><Link to="/Home">Home</Link></li>
      <li><Link to="/contato">Contato</Link></li>
    </ul>
  </nav>
}