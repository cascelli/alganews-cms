import { ComponentStory, ComponentMeta } from '@storybook/react';

//import Table, { TableProps } from '../components/Table/Table';
import Table from '../components/Table/Table';
//import Table from '../components/Table/Table';

export default {
  title: 'Example/Table',
  component: Table,

  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // }

} as ComponentMeta<typeof Table>;

//const Template: ComponentStory<typeof { TableProps }> = (args) => <Table {...args} />;
//const Template: ComponentStory<typeof { } > = (args) => <Table {...args} />;
const Template: ComponentStory = (args) => <Table {...args} />;

export const Default = Template.bind({});

Default.args = {

};
