import React, { ForwardedRef, forwardRef, MutableRefObject } from 'react';
import { TGoods } from '@/store/goods';

import * as S from '@/components/goods/goods.styles';

type PropsTypes = {
  goods: TGoods;
};

const Goods = forwardRef<HTMLLIElement, PropsTypes>(
  ({ goods }: { goods: TGoods }, ref) => {
    const {
      isSoldOut,
      imageUrl,
      isExclusive,
      brandLinkUrl,
      brandName,
      goodsName,
      price,
      saleRate,
      isSale,
      normalPrice,
      linkUrl
    } = goods;
    return (
      <S.GoodsWrapper ref={ref}>
        <S.ImageWrapper>
          <a href={linkUrl}>
            {goods.isSoldOut && <S.SoldOut>sold out</S.SoldOut>}
            <S.GoodsImage
              src={imageUrl}
              isSoldOut={isSoldOut}
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                e.currentTarget.src =
                  'https://image.msscdn.net/musinsaUI/homework/data/img.jpg';
              }}
            />
          </a>
        </S.ImageWrapper>
        <S.DescriptionWrapper>
          {isExclusive && <S.ExclusiveLabel>단독</S.ExclusiveLabel>}
          <S.Brand href={brandLinkUrl}>{brandName}</S.Brand>
          <S.Name>{goodsName}</S.Name>
          <S.PriceWrapper>
            <S.Price>{price.toLocaleString()}원</S.Price>
            {isSale && <S.SaleRate>{saleRate}%</S.SaleRate>}
          </S.PriceWrapper>
          {isSale && (
            <S.NormalPrice>{normalPrice.toLocaleString()}원</S.NormalPrice>
          )}
        </S.DescriptionWrapper>
      </S.GoodsWrapper>
    );
  }
);

export default Goods;
