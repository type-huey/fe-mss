import { SyntheticEvent, useRef, useState } from 'react';
import Icon from '@/components/common/icon/Icon';
import { ICON_TYPE } from '@/constants/constants';
import { useFilter } from '@/hooks/useFilter';

import * as S from '@/components/common/input/search/searchInput.styles';

const SearchInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { handleFilter } = useFilter();
  const [keyword, setKeyword] = useState('');

  const handleSearch = (value: string) => {
    handleFilter({
      id: 'search',
      isSubmit: true,
      submitValue: value
    });
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (!inputRef.current) return;
    handleSearch(inputRef.current.value);
    inputRef.current.value = '';
  };

  const handleSearchInputChange = () => {
    if (!inputRef.current) return;
    setKeyword(inputRef.current.value);
  };

  return (
    <S.Wrapper onSubmit={handleSubmit}>
      <S.Inner>
        <button type="submit">
          <Icon icon={ICON_TYPE.SEARCH} width="18px" fill="#fff" />
        </button>
        <S.Input ref={inputRef} onChange={handleSearchInputChange} />
      </S.Inner>
    </S.Wrapper>
  );
};

export default SearchInput;
