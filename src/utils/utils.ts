import { TGoods } from '@/store/goods';
import { TTag } from '@/store/tag';

export const fillteredGoods = (
  goodsList: TGoods[],
  filterOptions: TTag[]
): TGoods[] => {
  const _filters = filterOptions.map(filter => filter.option);

  let _filteredGoods = goodsList;

  /** base goodsList */
  if (!filterOptions.length)
    return _filteredGoods.filter(goods => !goods.isSoldOut);

  _filters.forEach(option => {
    if (option === 'searching') {
      const keyword = filterOptions.find(tag => tag.type === 'search')
        ?.keyword as string;
      _filteredGoods = _filteredGoods.filter(goods =>
        goods.goodsName.includes(keyword)
      );
    } else {
      _filteredGoods = _filteredGoods.filter(goods => goods[option]);
    }
  });

  return _filteredGoods;
};
