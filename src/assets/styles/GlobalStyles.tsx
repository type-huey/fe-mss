import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/assets/styles/theme';
import { Initiallize } from '@/assets/styles/Initialize';

const GlobalStyles = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <Initiallize />
      {children}
    </ThemeProvider>
  );
};

export default GlobalStyles;
