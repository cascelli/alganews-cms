//import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Story, Meta } from '@storybook/react';

import ProgressBar, { ProgressBarProps } from '../components/ProgressBar/ProgressBar';

export default {
  title: 'Example/ProgressBar',
  component: ProgressBar,
//} as ComponentMeta<typeof ProgressBar>;
} as Meta;

//const Template: ComponentStory<typeof ProgressBarProps> = (args) => <ProgressBar {...args} />;
//const Template: ComponentStory<typeof ProgressBar> = (args) => <ProgressBar {...args} />;
const Template: Story<ProgressBarProps> = (args) => <ProgressBar {...args} />;

export const Primary = Template.bind({})
Primary.args = {
  title: 'Você tem certeza?',
  progress: 50,
  theme: 'primary',
  width: 375
}

export const Secondary = Template.bind({})
Secondary.args = {
  title: 'Você tem certeza?',
  progress: 50,
  theme: 'secondary',
  width: 375
}

export const Complete = Template.bind({})
Complete.args = {
  title: 'Você tem certeza?',
  progress: 100,
  theme: 'primary',
  width: 375
}

export const ZeroProgress = Template.bind({})
ZeroProgress.args = {
  title: 'Você tem certeza?',
  progress: 0,
  theme: 'secondary',
  width: 375
}

export const ProgressInHalfOfText = Template.bind({})
ProgressInHalfOfText.args = {
  title: 'Você tem certeza?',
  progress: 0,
  theme: 'secondary',
  width: 375
}
