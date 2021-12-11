import { ComponentStory, ComponentMeta } from '@storybook/react';

import Paragraph, { ParagraphProps } from '../components/Typography/Paragraph'

export default {
  title: 'Typograph/Paragraph',
  component: Paragraph,

  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // }

} as ComponentMeta<typeof Paragraph>

const Template: ComponentStory<typeof ParagraphProps> = (args) => <Paragraph {...args} />

export const Default = Template.bind({})
Default.args = {
  size: 'default',
  children: 'Loren ipsum doren amet Loren ipsum doren amet Loren ipsum doren amet Loren ipsum doren amet Loren ipsum doren amet',
};

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  children: 'Loren ipsum doren amet Loren ipsum doren amet Loren ipsum doren amet Loren ipsum doren amet Loren ipsum doren amet',
};

