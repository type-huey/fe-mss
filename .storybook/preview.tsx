import React from 'react';
import { RecoilRoot } from 'recoil';
import { theme } from '../src/assets/styles/theme';
import { ThemeProvider } from 'styled-components';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};

export const decorators = [
  Story => (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <Story />
      </RecoilRoot>
    </ThemeProvider>
  )
];
