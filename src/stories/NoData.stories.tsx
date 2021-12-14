import { ComponentStory, ComponentMeta } from '@storybook/react';

import NoData, { NoDataProps } from '../components/NoData/NoData';

export default {
  title: 'Example/NoData',
  component: NoData,
  argTypes: {
    onNoData: { action: 'NoData' },
    onCancel: { action: 'cancel' }
   }
} as ComponentMeta<typeof NoData>;

const Template: ComponentStory<typeof NoDataProps> = (args) => <NoData {...args} />;


export const Default = Template.bind({});

Default.args = { };


export const FixedHeight = Template.bind({});

Default.args = {
  height: 240
};