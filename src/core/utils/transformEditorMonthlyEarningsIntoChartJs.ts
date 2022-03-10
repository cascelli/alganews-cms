import { ChartProps } from "../../app/components/Chart/Chart";

//import { Metric } from '../../sdk/@types';
// Substituindo os imports dos services do sdk local pelo modulo alganews-sdk
//  criado fora do projeto como um pacote npm separado pois será usado em mais
//  partes do projeto alganews
import { Metric } from "danielbonifacio-sdk";

import { format } from 'date-fns'; // Formatacao de datas
import { ptBR } from 'date-fns/locale'; // Traducao para protugues brasileiro de data


function transformEditorMonthlyEarningsIntoChartJs(editorEarnings: Metric.EditorMonthlyEarnings): ChartProps['data'] {

    const labels: string[] = []
    const data1: number[] = []
    const data2: number[] = []

    editorEarnings.forEach(earning => {

        // Funcao format - date-fns => https://date-fns.org/v2.22.1/docs/format
        // const formattedMonth = format(new Date(earning.yearMonth), 'MMMM', { locale: ptBR } )
        const formattedMonth = format(new Date(earning.yearMonth), 'MMM', { locale: ptBR } )
        labels.push(formattedMonth) // passa o valor formatado
        data1.push(earning.totalAmount)
        data2.push(earning.totalPlatformAverageAmount)

    })

    return {
        labels,
        datasets: [
            {
                label: 'Performance pessoal',
                data: data1,
                fill: true,
                backgroundColor: "#0099FF",
                borderColor: "#0099FF",
                borderWidth: 0.5,
            },

            {
                label: 'Performance média do time',
                data: data2,
                fill: true,
                backgroundColor: "#274060",
                borderColor: "#274060",
                borderWidth: 0.5,
            }
        ]
    }

}

export default transformEditorMonthlyEarningsIntoChartJs