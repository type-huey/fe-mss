import { atom, selector } from 'recoil';

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

export const filteredTagSelector = selector<TTag[]>({
  key: 'tag-selector',
  get: ({ get }) => get(tagListAtom).filter((tag: TTag) => tag.isFiltered)
});

export const searchingKeywordSelector = selector<string | undefined>({
  key: 'search-keyword',
  get: ({ get }) => {
    const filter = get(tagListAtom).filter(
      (tag: TTag) => tag.type === 'search'
    );

    return filter[0].keyword;
  }
});
