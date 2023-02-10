import styled, { css, keyframes } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 240px;
  margin-bottom: 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const EmptyMessage = styled.span`
  ${({ theme: { colors } }) => css`
    color: ${colors.gray1};
  `}
  display: block;
  text-align: center;
`;

export const GoodsWrapper = styled.li`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 140px;
`;

export const SoldOut = styled.div`
  ${({ theme: { colors, fontSize, fontWeight } }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-size: 2rem;
    font-weight: ${fontWeight.bold};
    color: ${colors.gray1};
    text-transform: uppercase;
    background: ${colors.white};
    opacity: 0.8;
    z-index: 1;
  `};
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GoodsImage = styled.img<{ isSoldOut: boolean }>`
  ${({ isSoldOut }) => isSoldOut && 'opacity: 0.8;'}
  width: 100%;
`;

export const DescriptionWrapper = styled.div`
  position: relative;
  padding: 20px 10px;
`;

export const ExclusiveLabel = styled.span`
  ${({ theme: { colors } }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 10px;
    top: 0;
    color: ${colors.white};
    background: ${colors.green};
    transform: translateY(-50%);
    height: 1.635rem;
    padding: 0 6px;
    font-size: 0.75rem;
    z-index: 1;
  `};
`;

export const Brand = styled.a`
  ${({ theme: { fontSize } }) => css`
    display: block;
    font-size: ${fontSize.small};
    white-space: nowrap;
    margin-bottom: 8px;
  `};
`;

export const Name = styled.div`
  ${({ theme: { fontWeight, fontSize } }) => css`
    font-weight: ${fontWeight.bold};
    font-size: ${fontSize.large};
    display: -webkit-box;
    overflow: hidden;
    height: 36px;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  `};
`;

export const PriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Price = styled.p`
  ${({ theme: { fontWeight } }) => css`
    font-weight: ${fontWeight.medium};
  `}
`;

export const SaleRate = styled.p`
  ${({ theme: { colors, fontWeight } }) => css`
    color: ${colors.red};
    font-weight: ${fontWeight.bold};
  `}
`;

export const NormalPrice = styled.p`
  ${({ theme: { colors, fontWeight, fontSize } }) => css`
    color: ${colors.gray3};
    font-weight: ${fontWeight.medium};
    font-size: ${fontSize.small};
    text-decoration-line: line-through;
    margin-top: 3px;
  `};
`;

const LoadingAnimation = keyframes`
  0% { transform: rotate(0); }
  50% { transform: rotate(180deg); }
  100% { transform: rotate(360deg); }
`;

export const LoadingIndicator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0 30px;

  svg {
    animation: ${LoadingAnimation} 0.5s infinite linear;
  }
`;
