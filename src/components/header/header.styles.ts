import styled, { css } from 'styled-components';

export const Wrapper = styled.header`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.white};
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 2;
    padding: 0px 7px;
    box-shadow: 0px 4px 10px ${colors.gray4}, 0px 4px 4px ${colors.gray4};
  `}
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
`;
