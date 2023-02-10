import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: string;
      white: string;
      blue: string;
      red: string;
      green: string;
      gray1: string;
      gray2: string;
      gray3: string;
    };

    fontWeight: {
      bold: string;
      medium: string;
      regular: string;
    };

    fontSize: {
      large: string;
      medium: string;
      small: string;
    };
  }
}
