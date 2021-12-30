import { useEffect } from "react"
import { useLocation, useParams } from "react-router-dom"
import DefaultLayout from "../layouts/Default"

// Funcao para recuperar os query parameters de uma URL para facilitar 
function useQuery() {
  // URLSearchParams é uma função existente por padrao nos navegadores atuais. Não é do React 
  return new URLSearchParams(useLocation().search) 
}


export default function CalcView() {
  const params = useParams<{ a: string, b: string }>()
  //const params = useParams()

  //const location = useLocation()
  const query = useQuery()
  
  useEffect(() => {
    console.log(params)
    // obtem o parametro search do hook location
    // faz um split da string pelo delimitador '='
    // obtém o indice 1 do array resultante do split
    //console.log(location.search.split('=')[1]) 
    //
    // alternativa a opção anterior : 
    //const query = new URLSearchParams(location.search)
    console.log(query.get('operation')) 

  }, []) //eslint-disable-line

  return <DefaultLayout>
    <h1>Soma - { Number(params.a) + Number(params.b) }</h1>
  </DefaultLayout>
}