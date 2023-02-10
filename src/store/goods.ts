import { atom, selectorFamily } from 'recoil';
import { TTag } from '@/store/tag';
import { fillteredGoods, makeSuggestionList } from '@/utils/utils';

export type TGoods = {
  brandLinkUrl: string;
  brandName: string;
  goodsName: string;
  goodsNo: number;
  imageUrl: string;
  isExclusive: boolean;
  isSale: boolean;
  isSoldOut: boolean;
  linkUrl: string;
  normalPrice: number;
  price: number;
  saleRate: number;
};

export const goodsListAtom = atom<{
  goodsList: TGoods[];
  pagination: { page: number; totalPage: number };
}>({
  key: 'goods-list',
  default: {
    goodsList: [],
    pagination: {
      page: 0,
      totalPage: 3
    }
  }
});

export const goodsSelector = selectorFamily<TGoods[], TTag[]>({
  key: 'goods-selector',
  get:
    filterOption =>
    ({ get }) =>
      fillteredGoods(get(goodsListAtom).goodsList, filterOption)
});

export const autoCompleteGoodsSelector = selectorFamily<string[], string>({
  key: 'aotu-searching-goods-selector',
  get:
    keyword =>
    ({ get }) =>
      makeSuggestionList(get(goodsListAtom).goodsList, keyword)
});
