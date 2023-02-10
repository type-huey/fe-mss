import React, { ReactNode } from 'react';
import Icon from '@/components/common/icon/Icon';
import { ICON_TYPE } from '@/constants/constants';

import * as S from '@/components/header/header.styles';

const Header = ({ children }: { children: ReactNode }) => {
  return (
    <S.Wrapper>
      <S.Logo>
        <Icon icon={ICON_TYPE.LOGO} width="95px" />
      </S.Logo>
      {children}
    </S.Wrapper>
  );
};

export default Header;
