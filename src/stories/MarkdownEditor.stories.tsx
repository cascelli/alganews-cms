//import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Story, Meta } from '@storybook/react';

import MarkdownEditor, { MarkdownEditorProps } from '../app/components/MarkdownEditor';

export default {
  title: 'Example/MarkdownEditor',
  component: MarkdownEditor,
//} as ComponentMeta<typeof MarkdownEditor>;
} as Meta;

//const Template: ComponentStory<typeof MarkdownEditorProps> = (args) => <MarkdownEditor {...args} />
//const Template: ComponentStory<typeof MarkdownEditor> = (args) => <MarkdownEditor {...args} />
const Template: Story<MarkdownEditorProps> = (args) => <MarkdownEditor {...args} />

export const Default = Template.bind({});
Default.args = { };
