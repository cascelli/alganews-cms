import { ComponentStory, ComponentMeta } from '@storybook/react';

import ImageUpload, { ImageUploadProps } from '../components/ImageUpload';

export default {
  title: 'Example/ImageUpload',
  component: ImageUpload,
} as ComponentMeta<typeof ImageUpload>;

const Template: ComponentStory<typeof ImageUploadProps> = (args) => <ImageUpload {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: 'Thumbnail do post'
};
