import { ComponentStory, ComponentMeta } from '@storybook/react';

import Chart, { ChartProps } from '../components/Chart/Chart';

export default {
  title: 'Example/Chart',
  component: Chart,
} as ComponentMeta<typeof Chart>;

const Template: ComponentStory<typeof ChartProps> = (args) => <Chart {...args} />;

export const Default = Template.bind({});

Default.args = { };