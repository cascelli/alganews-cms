//import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Story, Meta } from '@storybook/react';

import ImageUpload, { ImageUploadProps } from '../components/ImageUpload';

export default {
  title: 'Example/ImageUpload',
  component: ImageUpload,
//} as ComponentMeta<typeof ImageUpload>;
} as Meta;

//const Template: ComponentStory<typeof ImageUploadProps> = (args) => <ImageUpload {...args} />;
//const Template: ComponentStory<typeof ImageUpload> = (args) => <ImageUpload {...args} />;
const Template: Story<ImageUploadProps> = (args) => <ImageUpload {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: 'Thumbnail do post'
};
