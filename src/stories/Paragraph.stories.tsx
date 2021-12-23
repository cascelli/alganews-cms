//import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Story, Meta } from '@storybook/react';

import Paragraph, { ParagraphProps } from '../app/components/Typography/Paragraph'

export default {
  title: 'Typograph/Paragraph',
  component: Paragraph,
//} as ComponentMeta<typeof Paragraph>
} as Meta;

//const Template: ComponentStory<typeof ParagraphProps> = (args) => <Paragraph {...args} />
//const Template: ComponentStory<typeof Paragraph> = (args) => <Paragraph {...args} />
const Template: Story<ParagraphProps> = (args) => <Paragraph {...args} />

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

