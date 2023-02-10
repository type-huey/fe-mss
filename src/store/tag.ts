import { atom } from 'recoil';

export type TFilterOption =
  | 'searching'
  | 'isSale'
  | 'isExclusive'
  | 'isSoldOut';

export type TTag = {
  id: string | number;
  title: string;
  type: 'search' | 'tag';
  option: TFilterOption;
  isFiltered: boolean;
  searchVisible?: boolean;
  keyword?: string;
  icon?: string;
};

export const tagListAtom = atom<TTag[]>({
  key: 'tag-list',
  default: [
    {
      id: 'search',
      title: '검색',
      type: 'search',
      option: 'searching',
      isFiltered: false,
      searchVisible: false,
      keyword: '',
      icon: 'logo'
    },
    {
      id: 1,
      title: '세일상품',
      option: 'isSale',
      type: 'tag',
      isFiltered: false
    },
    {
      id: 2,
      title: '단독상품',
      option: 'isExclusive',
      type: 'tag',
      isFiltered: false
    },
    {
      id: 3,
      title: '품절포함',
      option: 'isSoldOut',
      type: 'tag',
      isFiltered: false
    }
  ]
});
