//import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Story, Meta } from '@storybook/react';

import Info, { InfoProps } from '../app/components/Info/Info';

export default {
  title: 'Example/Info',
  component: Info,

  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // }

//} as ComponentMeta<typeof Info>;
} as Meta;

//const Template: ComponentStory<typeof InfoProps> = (args) => <Info {...args} />;
//const Template: ComponentStory<typeof Info> = (args) => <Info {...args} />;
const Template: Story<InfoProps> = (args) => <Info {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  title: 'Post não encontrado',
  description: 'Este post não foi encontrado. Você está sendo redirecionado(a) para a lista de posts.'
};