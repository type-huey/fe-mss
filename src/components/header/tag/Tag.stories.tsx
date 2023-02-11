import React from 'react';
import { ComponentMeta, ComponentStory, Story } from '@storybook/react';
import Tag from '@/components/header/tag/Tag';

export default {
  title: 'Tag',
  component: Tag,
  args: {
    tag: {
      id: 'search',
      title: '검색',
      type: 'search',
      option: 'searching',
      isFiltered: false,
      searchVisible: false,
      keyword: '',
      icon: 'logo'
    }
  }
} as ComponentMeta<typeof Tag>;

export const Default: ComponentStory<typeof Tag> = args => <Tag {...args} />;
