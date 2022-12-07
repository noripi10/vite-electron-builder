import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import type { ThemeConfig } from '@chakra-ui/react';
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react';

// https://chakra-ui.com/docs/styled-system/color-mode#updating-the-theme-config
const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  style: {
    global: {},
  },
});

const element = document.getElementById('app') as HTMLElement;
const root = ReactDOM.createRoot(element);

root.render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
