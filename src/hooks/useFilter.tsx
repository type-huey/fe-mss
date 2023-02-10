import { useRecoilState } from 'recoil';
import { FILTER_TYPE } from '@/constants/constants';
import { tagListAtom } from '@/store/tag';

type PFilter = {
  id: string | number;
  isSubmit?: boolean;
  submitValue?: string;
  shape?: 'rect' | 'round';
};

export function useFilter() {
  const [tagList, setTagList] = useRecoilState(tagListAtom);

  function handleFilter({ id, isSubmit, submitValue, shape }: PFilter) {
    let _filteredList = tagList.map(tag => {
      let _tag = { ...tag };

      if (tag.id === id) {
        tag.option === FILTER_TYPE.searching
          ? isSubmit
            ? ((_tag.keyword = submitValue),
              (_tag.isFiltered = true),
              (_tag.searchVisible = !_tag.searchVisible))
            : shape === 'round'
            ? (_tag.searchVisible = !_tag.searchVisible)
            : ((_tag.isFiltered = !_tag.isFiltered), (_tag.keyword = ''))
          : (_tag.isFiltered = !_tag.isFiltered);
      }

      return _tag;
    });
    setTagList(_filteredList);
  }

  return {
    handleFilter
  };
}
