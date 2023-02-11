import { TGoods } from '@/store/goods';
import { TTag } from '@/store/tag';

export const fillteredGoods = (
  goodsList: TGoods[],
  filterOptions: TTag[],
  keyword?: string
): TGoods[] => {
  const _filters = filterOptions.map(filter => filter.option);

  let _filteredGoods: TGoods[] = [];

  _filteredGoods = curringFilter(goodsList)(keyword)(
    _filters.includes('isSoldOut')
  )(_filters.includes('isExclusive'))(_filters.includes('isSale'));

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

const curringFilter =
  (GoodsList: TGoods[]) =>
  (isSearchingKeyword: string | undefined) =>
  (isSoldOut: boolean) =>
  (isExclusive: boolean) =>
  (isSale: boolean) => {
    let _filteredGoods: TGoods[] = GoodsList;
    let _filteredSoldoutGoods: TGoods[] = [];

    /** 검색 키워드가 있을때 필러링 */
    _filteredGoods = isSearchingKeyword
      ? _filteredGoods.filter(
          goods =>
            goods.goodsName.includes(isSearchingKeyword) ||
            goods.brandName.includes(isSearchingKeyword)
        )
      : _filteredGoods;

    /** isSale 필터링  */
    _filteredGoods = isSale
      ? _filteredGoods.filter(goods => goods.isSale)
      : _filteredGoods;

    /** isExclusive 필터링  */
    _filteredGoods = isExclusive
      ? _filteredGoods.filter(goods => goods.isExclusive)
      : _filteredGoods;

    /** isSoldOut 필터링  */
    _filteredSoldoutGoods = _filteredGoods.filter(goods => !goods.isSoldOut);
    _filteredGoods = isSoldOut
      ? [..._filteredGoods, ..._filteredSoldoutGoods]
      : _filteredSoldoutGoods;

    return _filteredGoods;
  };
