import styled, { css } from 'styled-components';

interface IInput extends React.HTMLProps<HTMLInputElement> {
  ref: React.RefObject<HTMLInputElement>;
  maxLength: number;
}

export const Wrapper = styled.form`
  width: 100%;
  background-color: #f9f9f9;
  padding: 20px 15px;
`;

export const Inner = styled.div`
  ${({ theme: { colors } }) => css`
    display: flex;
    align-items: center;
    width: 100%;
    border: 1px solid #ccc;
    background-color: ${colors.white};
    padding: 8px 14px;
  `}
`;

export const Input = styled.input<IInput>`
  background-color: inherit;
  margin-left: 10px;
  width: 100%;
  border: none;
`;

export const Ul = styled.ul`
  ${({ theme: { colors } }) => css`
    border: 1px solid ${colors.gray2};
    background-color: ${colors.white};
    padding: 8px 0px;
  `};
`;

export const Li = styled.li`
  width: 100%;
  padding: 10px 10px;
  cursor: pointer;

  &:hover {
    background-color: #d5d5d5;
  }
`;
