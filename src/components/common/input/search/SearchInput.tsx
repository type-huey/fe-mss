import {
  SyntheticEvent,
  useRef,
  useState,
  useDeferredValue,
  useMemo
} from 'react';
import Icon from '@/components/common/icon/Icon';
import { ICON_TYPE } from '@/constants/constants';
import { useFilter } from '@/hooks/useFilter';
import { filteredTagSelector } from '@/store/tag';
import { highlightText } from '@/utils/utils';
import { useRecoilValue } from 'recoil';
import { autoCompleteGoodsSelector, goodsSelector } from '@/store/goods';

import * as S from '@/components/common/input/search/searchInput.styles';

type PropsTypes = {
  maxlength: number;
};

const SearchInput = ({ maxlength }: PropsTypes) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { handleFilter } = useFilter();
  const [keyword, setKeyword] = useState('');
  const deferredValue = useDeferredValue(keyword);
  const filteredTag = useRecoilValue(filteredTagSelector);
  const filteredGoodsList = useRecoilValue(goodsSelector(filteredTag));
  const autoCompleteGoodsList = useRecoilValue(
    autoCompleteGoodsSelector(deferredValue)
  );

  const suggestionList = useMemo(() => {
    return (
      autoCompleteGoodsList.length > 0 && (
        <S.Ul>
          {autoCompleteGoodsList.map(keyword => (
            <S.Li
              onClick={() => handleSearchGoods(keyword)}
              dangerouslySetInnerHTML={{
                __html: highlightText(keyword, deferredValue)
              }}
            />
          ))}
        </S.Ul>
      )
    );
  }, [deferredValue, filteredGoodsList]);

  const handleSearchGoods = (value: string) => {
    handleFilter({
      id: 'search',
      isSubmit: true,
      submitValue: value
    });
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (!inputRef.current) return;
    handleSearchGoods(inputRef.current.value);
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
        <S.Input
          ref={inputRef}
          onChange={handleSearchInputChange}
          maxLength={maxlength || 15}
        />
      </S.Inner>
      {suggestionList}
    </S.Wrapper>
  );
};

export default SearchInput;
