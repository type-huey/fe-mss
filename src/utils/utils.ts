import { TGoods } from '@/store/goods';
import { TTag } from '@/store/tag';

export const fillteredGoods = (
  goodsList: TGoods[],
  filterOptions: TTag[]
): TGoods[] => {
  const _filters = filterOptions.map(filter => filter.option);
  let _filteredGoods = goodsList;

  if (!_filters.includes('isSoldOut'))
    _filteredGoods = _filteredGoods.filter(goods => !goods.isSoldOut);

  _filters.forEach(option => {
    if (option === 'searching') {
      const keyword = filterOptions.find(tag => tag.type === 'search')
        ?.keyword as string;
      _filteredGoods = _filteredGoods.filter(
        goods =>
          goods.goodsName.toUpperCase().includes(keyword.toUpperCase()) ||
          goods.brandName.toUpperCase().includes(keyword.toUpperCase())
      );
    } else {
      _filteredGoods = _filteredGoods.filter(goods => goods[option]);
    }
  });

  return _filteredGoods;
};

export const makeSuggestionList = (goodsList: TGoods[], keyword: string) => {
  const MAX_COUNT = 4;

  const _makeSuggestionList = [
    ...new Set([
      ...goodsList.map(goods => goods.brandName),
      ...goodsList.map(goods => goods.goodsName)
    ])
  ];

  const _suggestionsList = keyword
    ? _makeSuggestionList
        .filter(title => title.toUpperCase().includes(keyword.toUpperCase()))
        .slice(0, MAX_COUNT)
    : [];

  return _suggestionsList;
};

export const highlightText = (keyword: string, searchKeyword: string) => {
  var regex = new RegExp(searchKeyword, 'gi');
  var response = keyword.replace(regex, function (str) {
    return `<span style="color: #0078ff;">${str}</span>`;
  });
  return response;
};
