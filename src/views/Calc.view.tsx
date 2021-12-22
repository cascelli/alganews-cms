import { useEffect } from "react"
import { useParams } from "react-router-dom"

export default function CalcView() {
//  const params = useParams<{ a: string, b: string }>()
  const params = useParams()
  
  useEffect(() => {
    console.log(params)
  }, [])

  return <div>
    <h1>Soma - { Number(params.a) + Number(params.b) }</h1>
  </div>
}