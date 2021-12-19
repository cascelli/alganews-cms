import { ComponentStory, ComponentMeta } from '@storybook/react';

import Profile, { ProfileProps } from '../components/Profile';

export default {
  title: 'Example/Profile',
  component: Profile,
} as ComponentMeta<typeof Profile>;

const Template: ComponentStory<typeof ProfileProps> = (args) => <Profile {...args} />;

export const Default = Template.bind({});

Default.args = {
  name: 'Daniel Bonfacio',
  description: 'editor ha muito tempo'
};