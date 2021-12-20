//import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Story, Meta } from '@storybook/react';

import { useState } from 'react';

import TagInput, { TagInputProps } from '../components/TagInput';
import { Tag } from 'react-tag-input';

export default {
  title: 'Example/TagInput',
  component: TagInput,
//} as ComponentMeta<typeof TagInput>;
} as Meta;

//const Template: ComponentStory<typeof TagInputProps> = (args) => 
//const Template: ComponentStory<typeof TagInput> = (args) => 
const Template: Story<TagInputProps> = (args) => 
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

export function WorkingLiveExample() {

  const [tags, setTags] = useState<Tag[]>([]);

  return <TagInput
    placeholder='Insira as tags deste post'
    tags={tags}
    onAdd={ tag => setTags([...tags, tag])}
    onDelete={ index => setTags(tags.filter((tag, i) => i !== index))}
  />
}