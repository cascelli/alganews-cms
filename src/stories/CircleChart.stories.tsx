import { ComponentStory, ComponentMeta } from '@storybook/react';

import CircleChart, { CircleChartProps } from '../components/CircleChart';

export default {
  title: 'Example/CircleChart',
  component: CircleChart,
} as ComponentMeta<typeof CircleChart>;

const Template: ComponentStory<typeof CircleChartProps> = (args) => <CircleChart {...args} />;

export const Default = Template.bind({});

Default.args = { };