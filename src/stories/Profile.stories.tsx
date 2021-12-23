//import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Story, Meta } from '@storybook/react';

import Profile, { ProfileProps } from '../app/components/Profile';

export default {
  title: 'Example/Profile',
  component: Profile,
//} as ComponentMeta<typeof Profile>;
} as Meta;

//const Template: ComponentStory<typeof ProfileProps> = (args) => <Profile {...args} />;
//const Template: ComponentStory<typeof Profile> = (args) => <Profile {...args} />;
const Template: Story<ProfileProps> = (args) => <Profile {...args} />;

export const Default = Template.bind({});

Default.args = {
  name: 'Daniel Bonfacio',
  description: 'editor ha muito tempo'
};