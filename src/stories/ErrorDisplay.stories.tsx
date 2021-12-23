//import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Story, Meta } from '@storybook/react';

import ErrorDisplay, { ErrorDisplayProps } from '../app/components/ErrorDisplay';

export default {
  title: 'Example/ErrorDisplay',
  component: ErrorDisplay,
  argTypes: {
    small: {
      control: {
        type: 'boolean'
      }
    }
  }
//} as ComponentMeta<typeof ErrorDisplay>;
} as Meta;

//const Template: ComponentStory<typeof ErrorDisplayProps> = (args) => 
//const Template: ComponentStory<typeof ErrorDisplay> = (args) => 
const Template: Story<ErrorDisplayProps> = (args) => 
  <div>
    <ErrorDisplay {...args} />
  </div>

export const Default = Template.bind({});
Default.args = { };


export const CustomTitle = Template.bind({})
CustomTitle.args = {
  title: 'Houve um erro'
}


export const CustomMessage = Template.bind({})
CustomMessage.args = {
  title: 'Houve um erro',
  message: 'Falha na comunicação com o servidor'
}


export const Small = Template.bind({})
Small.args = {
  title: 'Houve um erro',
  message: 'Falha na comunicação com o servidor',
  small: true
}