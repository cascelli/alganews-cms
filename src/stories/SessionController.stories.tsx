//import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Story, Meta } from '@storybook/react';

import SessionController, { SessionControllerProps } from '../app/components/SessionController';

export default {
  title: 'Example/SessionController',
  component: SessionController,
  argTypes: {
    onLogout: {
      action: 'logout'
    }
  }
//} as ComponentMeta<typeof SessionController>;
} as Meta;

//const Template: ComponentStory<typeof SessionControllerProps> = (args) => 
//const Template: ComponentStory<typeof SessionController> = (args) => 
const Template: Story<SessionControllerProps> = (args) => 
  <div>
    <SessionController {...args} />
  </div>

export const Default = Template.bind({});

Default.args = {
  name: 'Daniel Bonfacio',
  description: 'editor ha muito tempo'
};