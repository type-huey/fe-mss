import React from 'react';
import { ComponentMeta, ComponentStory, Story } from '@storybook/react';
import Goods from '@/components/goods/Goods';

export default {
  title: 'Goods',
  component: Goods,
  args: {
    goods: {
      brandLinkUrl: 'https://www.musinsa.com/brands/sovermentwithlomort',
      brandName: '소버먼트',
      goodsName: '980g pigment mtm-charcoal-',
      goodsNo: 1582356,
      imageUrl:
        'https://image.msscdn.net/images/goods_img/20200903/1582356/1582356_1_500.jpg',
      isExclusive: true,
      isSale: true,
      isSoldOut: false,
      linkUrl: 'https://store.musinsa.com/app/goods/1582356',
      normalPrice: 74000,
      price: 46400,
      saleRate: 37
    }
  }
} as ComponentMeta<typeof Goods>;

export const Default: ComponentStory<typeof Goods> = args => (
  <Goods {...args} />
);
