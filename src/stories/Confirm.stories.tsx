//import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Story, Meta } from '@storybook/react';

import Confirm, { ConfirmProps } from '../app/components/Confirm/Confirm';

export default {
  title: 'Example/Confirm',
  component: Confirm,
  argTypes: {
    onConfirm: { action: 'confirm' },
    onCancel: { action: 'cancel' }
   }
//} as ComponentMeta<typeof Confirm>;
} as Meta;

//const Template: ComponentStory<typeof ConfirmProps> = (args) => <Confirm {...args} />;
//const Template: ComponentStory<typeof Confirm> = (args) => <Confirm {...args} />;
const Template: Story<ConfirmProps> = (args) => <Confirm {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: 'Você tem certeza ?'
};