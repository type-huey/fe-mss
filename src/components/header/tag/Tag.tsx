import React from 'react';
import Icon from '@/components/common/icon/Icon';
import { ICON_TYPE } from '@/constants/constants';
import { type TTag } from '@/store/tag';

import * as S from '@/components/header/tag/tag.styles';

type PropsTypes = {
  tag: TTag;
  shape?: 'round' | 'rect';
  clickHandler?: ({}: {
    id: string | number;
    isSubmit?: boolean;
    submitValue?: string;
    shape?: 'rect' | 'round';
  }) => void;
};

const Tag = ({
  tag: { isFiltered, id, title, keyword = '', icon, searchVisible, type },
  shape = 'round',
  clickHandler = () => {}
}: PropsTypes) => {
  const tagName =
    type === 'tag' ? title : isFiltered && shape === 'rect' ? keyword : title;

  return (
    <S.Tag
      shape={shape}
      isSelected={isFiltered}
      isActive={!!searchVisible}
      onClick={() => clickHandler({ id: id, shape: shape })}
    >
      {tagName}
      {shape === 'rect' ? (
        <Icon icon={ICON_TYPE.CLOSE} width="13px" />
      ) : (
        icon && <Icon icon={ICON_TYPE.SEARCH} width="13px" />
      )}
    </S.Tag>
  );
};

export default Tag;
