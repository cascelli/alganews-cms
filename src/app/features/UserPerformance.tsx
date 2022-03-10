import { useEffect, useState } from "react"
import Skeleton from "react-loading-skeleton"
import withBoundary from "../../core/hoc/withBoundary"
import transformEditorMonthlyEarningsIntoChartJs from "../../core/utils/transformEditorMonthlyEarningsIntoChartJs"

//import MetricService from "../../sdk/services/Metric.service"
// Substituindo os imports dos services do sdk local pelo modulo alganews-sdk
//  criado fora do projeto como um pacote npm separado pois será usado em mais
//  partes do projeto alganews
import { MetricService } from "danielbonifacio-sdk"

import Chart, { ChartProps } from "../components/Chart/Chart"

//const FAKE_DATA = { labels: ['Batata', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'], datasets: [ { label: 'Receitas', data: [500, 400, 600, 100, 800, 20, 123, 320, 120, 500, 434, 322], fill: true, backgroundColor: '#0099FF', borderColor: '#0099FF', borderWidth: 0.5, yAxisID: 'cashflow', }, { label: 'Despesas', data: [100, 200, 250, 500, 1000, 600, 123, 210, 344, 800, 123, 0], fill: true, backgroundColor: '#274060', borderColor: '#274060', borderWidth: 0.5, yAxisID: 'cashflow', }, ] }

//export default function UserPerformance() {
function UserPerformance() {

  const [error,setError] = useState<Error>()

  const [editorEarnings, setEditorEarnings] = useState<ChartProps['data']>()

  useEffect(() => {
    MetricService
      .getEditorMonthlyEarnings()
      .then(transformEditorMonthlyEarningsIntoChartJs)
      .then(setEditorEarnings)
      .catch(error => { // Captura erro, quando houver
        setError(new Error(error.message))
      })
  }, [])

  if(error) // Lanca o erro, quando houver
    throw error

  if(!editorEarnings)
    //return null
    return <div><Skeleton height={227} /></div>

  return <Chart 
    title = "Média de performance nos últimos 12 meses"
    data = { editorEarnings }
  />

}

export default withBoundary(UserPerformance, 'user performance')