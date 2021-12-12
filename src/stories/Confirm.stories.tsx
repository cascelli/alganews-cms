import { ComponentStory, ComponentMeta } from '@storybook/react';

import Confirm, { ConfirmProps } from '../components/Confirm/Confirm';

export default {
  title: 'Example/Confirm',
  component: Confirm,
  argTypes: {
    onConfirm: { action: 'confirm' },
    onCancel: { action: 'cancel' }
   }
} as ComponentMeta<typeof Confirm>;

const Template: ComponentStory<typeof ConfirmProps> = (args) => <Confirm {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: 'Você tem certeza ?'
};