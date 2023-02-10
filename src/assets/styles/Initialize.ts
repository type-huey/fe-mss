import { createGlobalStyle, css } from "styled-components";
import { reset } from "styled-reset";

export const Initiallize = createGlobalStyle` 
	${reset}

  ${({ theme: { colors, fontSize } }) => css`
    * {
      font-size: ${fontSize.small};
      box-sizing: border-box;
    }
    body {
      margin: 0;
      background-color: ${colors.white};
    }
    button {
      padding: 0;
      border: none;
      background-color: inherit;
    }
    a {
      text-decoration: none;
      font: inherit;
      color: inherit;
    }
    input:focus-visible {
      outline: none;
    }

    .App {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      margin: 0 auto;
    }
  `};
`;
