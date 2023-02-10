import React, { useState, useEffect, useCallback } from 'react';
import { useGoods } from '@/hooks/useGoods';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import { useRecoilValue } from 'recoil';
import { goodsListAtom, goodsSelector } from '@/store/goods';
import { filteredTagSelector } from '@/store/tag';
import { ICON_TYPE } from '@/constants/constants';
import Icon from '@/components/common/icon/Icon';
import Goods from '@/components/goods/Goods';

import * as S from '@/components/goods/goods.styles';

const GoodsList = () => {
  const [goodsLastElement, setGoodsLastElement] =
    useState<HTMLLIElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { pagination } = useRecoilValue(goodsListAtom);
  const filteredTag = useRecoilValue(filteredTagSelector);
  const filteredGoodsList = useRecoilValue(goodsSelector(filteredTag));
  const { fetchGoodsList } = useGoods();

  useInfiniteScroll(goodsLastElement, () => {
    getGoodsList(pagination.page);
  });

  const setRefTarget = useCallback((node: HTMLLIElement) => {
    setGoodsLastElement(node);
  }, []);

  const getGoodsList = async (page: number) => {
    if (page > pagination.totalPage) return;
    await fetchGoodsList(page, setIsLoading);
  };

  useEffect(() => {
    getGoodsList(pagination.page);
  }, []);

  return (
    <>
      <S.Wrapper>
        {filteredGoodsList.length > 0 ? (
          filteredGoodsList.map((goods, index) => {
            let lastEl = index === filteredGoodsList.length - 1;

            return (
              <Goods
                key={index}
                ref={lastEl ? setRefTarget : null}
                goods={goods}
              />
            );
          })
        ) : (
          <S.IconWrapper>
            <Icon icon={ICON_TYPE.EMPTY} width={'90px'} fill={'#D5D5D5'} />
            <S.EmptyMessage>검색 결과 없음</S.EmptyMessage>
          </S.IconWrapper>
        )}
      </S.Wrapper>
      {isLoading && (
        <S.LoadingIndicator>
          <Icon icon={ICON_TYPE.LOADING} width={'1rem'} />
        </S.LoadingIndicator>
      )}
    </>
  );
};

export default GoodsList;
