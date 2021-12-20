//import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Story, Meta } from '@storybook/react';

import NoData, { NoDataProps } from '../components/NoData/NoData';

export default {
  title: 'Example/NoData',
  component: NoData,
  argTypes: {
    onNoData: { action: 'NoData' },
    onCancel: { action: 'cancel' }
   }
//} as ComponentMeta<typeof NoData>;
} as Meta;

//const Template: ComponentStory<typeof NoDataProps> = (args) => <NoData {...args} />;
//const Template: ComponentStory<typeof NoData> = (args) => <NoData {...args} />;
const Template: Story<NoDataProps> = (args) => <NoData {...args} />;


export const Default = Template.bind({});

Default.args = { };


export const FixedHeight = Template.bind({});

Default.args = {
  height: 240
};