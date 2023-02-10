import React, { useMemo, useState } from 'react';
import { useRecoilValue } from 'recoil';
import Icon from '@/components/common/icon/Icon';
import SearchInput from '@/components/common/input/search/SearchInput';
import FilterList from '@/components/header/filter/FilterList';
import { FILTER_TYPE, ICON_TYPE, TAG_SHAPE_TYPE } from '@/constants/constants';
import { tagListAtom } from '@/store/tag';

import * as S from '@/components/header/tag/tag.styles';

const Filter = () => {
  const tagList = useRecoilValue(tagListAtom);

  const isSearching = useMemo(
    () =>
      tagList.find(tag => tag.option === FILTER_TYPE.searching)?.searchVisible,
    [tagList]
  );

  const filterdList = useMemo(
    () => tagList.filter(tag => tag.isFiltered),
    [tagList]
  );

  return (
    <S.Wrapper>
      <FilterList filterList={tagList} shape={TAG_SHAPE_TYPE.ROUND} />
      {isSearching && <SearchInput maxlength={15} />}
      <S.FilteredWrapper>
        <FilterList filterList={filterdList} shape={TAG_SHAPE_TYPE.RECT} />
        {filterdList.length > 0 && (
          <Icon icon={ICON_TYPE.REFRESH} width={'20px'} fill={'#979797'} />
        )}
      </S.FilteredWrapper>
    </S.Wrapper>
  );
};

export default Filter;
