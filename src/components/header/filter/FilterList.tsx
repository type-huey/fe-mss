import React from 'react';
import { TTag } from '@/store/tag';
import Tag from '@/components/header/tag/Tag';
import { useFilter } from '@/hooks/useFilter';

import * as S from '@/components/header/tag/tag.styles';

type PropsTypes = {
  filterList: TTag[];
  shape: 'rect' | 'round';
};

const FilterList = ({ filterList, shape }: PropsTypes) => {
  const { handleFilter } = useFilter();

  return (
    <>
      <S.TagList>
        {filterList.length > 0 &&
          filterList.map(tag => (
            <Tag
              key={tag.id}
              tag={tag}
              shape={shape}
              clickHandler={handleFilter}
            />
          ))}
      </S.TagList>
    </>
  );
};

export default FilterList;
