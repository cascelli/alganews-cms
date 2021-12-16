import { ComponentStory, ComponentMeta } from '@storybook/react';
import Chart, { ChartProps } from '../components/Chart/Chart';

const data: Chart.ChartData = {
  labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
  datasets: [
    {
      label: 'Receitas',
      data: [500, 400, 600, 100, 800, 20],
      fill: true,
      backgroundColor: '#0099ff',
      borderColor: '#0099ff',
      borderWidth: 0.5,
      yAxisID: 'cashflow',
    },
    {
      label: 'Despesas',
      data: [100, 200, 250, 500, 1000, 600],
      fill: true,
      backgroundColor: '#274060',
      borderColor: '#274060',
      borderWidth: 0.5,
      yAxisID: 'cashflow',
    },
  ],
};

export default {
  title: 'Example/Chart',
  component: Chart,
} as ComponentMeta<typeof Chart>;



const Template: ComponentStory<typeof ChartProps> = (args) => <Chart {...args} />;

export const Default = Template.bind({});

Default.args = { 
  title: 'Média de performance dos últimos 12 meses',
  data 
};


export const WithoutData = Template.bind({});

WithoutData.args = {
  title: 'Média de performance dos últimos 12 meses',
 };
