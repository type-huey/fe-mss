import React, { useMemo, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { tagListAtom } from '@/store/tag';
import { FILTER_TYPE, TAG_SHAPE_TYPE } from '@/constants/constants';
import SearchInput from '@/components/common/input/search/SearchInput';
import FilterList from '@/components/header/filter/FilterList';

import * as S from '@/components/header/tag/tag.styles';

const Filter = () => {
  const tagList = useRecoilValue(tagListAtom);

  const isSearching = useMemo(
    () =>
      tagList.find(tag => tag.option === FILTER_TYPE.searching)?.searchVisible,
    [tagList]
  );

  return (
    <S.Wrapper>
      <FilterList filterList={tagList} shape={TAG_SHAPE_TYPE.ROUND} />
      {isSearching && <SearchInput />}
    </S.Wrapper>
  );
};

export default Filter;
