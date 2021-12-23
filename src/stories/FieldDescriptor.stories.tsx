//import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Story, Meta } from '@storybook/react';

import FieldDescriptor, { FieldDescriptorProps } from '../app/components/FieldDescriptor/FieldDescriptor';

export default {
  title: 'Example/FieldDescriptor',
  component: FieldDescriptor,
//} as ComponentMeta<typeof FieldDescriptor>;
} as Meta;

//const Template: ComponentStory<typeof FieldDescriptorProps> = (args) => <FieldDescriptor {...args} />;
//const Template: ComponentStory<typeof FieldDescriptor> = (args) => <FieldDescriptor {...args} />;
const Template: Story<FieldDescriptorProps> = (args) => <FieldDescriptor {...args} />;

export const Default = Template.bind({})
Default.args = {
  field: 'Data de nascimento',
  value: '26 de Dezembro de 1997 (22 anos)' 
}

