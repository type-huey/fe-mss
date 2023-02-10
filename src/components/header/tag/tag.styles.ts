import styled, { css } from 'styled-components';

type TagProps = {
  shape: 'round' | 'rect';
  isSelected?: boolean;
  isActive?: boolean;
};

export const Wrapper = styled.div`
  padding: 7px 0px;
`;

export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.2rem;
  padding: 10px 7px;
`;

export const Tag = styled.button<TagProps>`
  ${({ theme: { colors }, isSelected, isActive, shape }) => css`
    color: #777;
    background-color: #fff;
    border: solid 1px #eee;
    display: flex;
    align-items: center;
    path {
      fill: #777;
    }
    ${shape === 'round' &&
    css`
      font-size: 0.8rem;
      font-weight: 400;
      border-radius: 1rem;
      padding: 0.4rem 0.8rem;
      gap: 0.2rem;
      svg {
        width: 16px;
        height: 16px;
      }
    `}
    ${shape === 'rect' &&
    css`
      font-size: 0.6rem;
      font-weight: 400;
      border-radius: 0.3rem;
      padding: 0.3rem 0.5rem;
      gap: 0.3rem;
      svg {
        width: 0.8rem;
        height: 0.8rem;
      }
    `}
		${!isActive &&
    !isSelected &&
    css`
      :hover {
        border-color: ${colors.blue};
        color: ${colors.blue};
        font-weight: 700;
        path {
          fill: ${colors.blue};
        }
      }
    `}
		${isSelected &&
    css`
      border-color: ${colors.blue};
      color: ${colors.blue};
      opacity: 1;
      path {
        fill: ${colors.blue};
      }

      :hover {
        opacity: 1;
      }
    `}
		${isActive &&
    css`
      border-color: ${colors.blue};
      background-color: ${colors.blue};
      color: ${colors.white};
      font-weight: 700;
      opacity: 1;
      path {
        fill: ${colors.white};
      }
      :hover {
        opacity: 1;
      }
    `}

    ${isSelected &&
    shape === 'rect' &&
    css`
      background-color: ${colors.blue};
      color: ${colors.white};
      path {
        fill: ${colors.white};
      }
    `}
  `}
`;
