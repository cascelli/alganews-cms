import { ComponentStory, ComponentMeta } from '@storybook/react';

import TagInput, { TagInputProps } from '../components/TagInput';

export default {
  title: 'Example/TagInput',
  component: TagInput,
} as ComponentMeta<typeof TagInput>;

const Template: ComponentStory<typeof TagInputProps> = (args) => 
  <div>
    <TagInput {...args} />
  </div>

export const Default = Template.bind({});

Default.args = {
  placeholder: 'Insira as tags deste post',
  tags: [{ id: '1', text:'Javascript'}]
};


export const VariousTags = Template.bind({});

VariousTags.args = {
  placeholder: 'Insira as tags deste post',
  tags: [
    { id: '1', text:'Javascript'},
    { id: '2', text:'Java'},
    { id: '3', text:'Rubi on Rails'},
    { id: '4', text:'Python'},
    { id: '5', text:'C'},
    { id: '6', text:'DotNet'},
    { id: '7', text:'VBA'},
  ]
};