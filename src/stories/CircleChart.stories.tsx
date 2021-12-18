import { ComponentStory, ComponentMeta } from '@storybook/react';

import CircleChart, { CircleChartProps } from '../components/CircleChart';

export default {
  title: 'Example/CircleChart',
  component: CircleChart,
  argTypes: {
    progress: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
      }
    }
  }
} as ComponentMeta<typeof CircleChart>;

const Template: ComponentStory<typeof CircleChartProps> = (args) => <CircleChart {...args} />;

export const Default = Template.bind({});

Default.args = { 
  progress: 80,
  size: 150
};