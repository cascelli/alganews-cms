import { ComponentStory, ComponentMeta } from '@storybook/react';
import MarkdownEditor, { MarkdownEditorProps } from '../components/MarkdownEditor';

export default {
  title: 'Example/MarkdownEditor',
  component: MarkdownEditor,
} as ComponentMeta<typeof MarkdownEditor>;

const Template: ComponentStory<typeof MarkdownEditorProps> = (args) => <MarkdownEditor {...args} />

export const Default = Template.bind({});
Default.args = { };
