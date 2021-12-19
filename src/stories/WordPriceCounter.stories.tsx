import { ComponentStory, ComponentMeta } from '@storybook/react';

import WordPriceCounter, { WordPriceCounterProps } from '../components/WordPriceCounter';

export default {
  title: 'Example/WordPriceCounter',
  component: WordPriceCounter,
} as ComponentMeta<typeof WordPriceCounter>;

const Template: ComponentStory<typeof WordPriceCounterProps> = (args) => 
  <div>
    <WordPriceCounter {...args} />
  </div>

export const Default = Template.bind({});

Default.args = {
  pricePerWord: 0.25,
  wordsCount: 20
};