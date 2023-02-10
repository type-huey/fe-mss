import React, { useMemo, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { tagListAtom } from '@/store/tag';
import { TAG_SHAPE_TYPE } from '@/constants/constants';
import FilterList from '@/components/header/filter/FilterList';

import * as S from '@/components/header/tag/tag.styles';

const Filter = () => {
  const tagList = useRecoilValue(tagListAtom);

  return (
    <S.Wrapper>
      <FilterList filterList={tagList} shape={TAG_SHAPE_TYPE.ROUND} />
    </S.Wrapper>
  );
};

export default Filter;
