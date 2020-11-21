import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import Routes from './Routes';

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  height: 100vh;
  width: 100vw;
  background-color: #fafafc;
}

button {
  cursor: pointer;
}

`;

const theme = {
  colors: {
    textPrimary: '#fafafc',
    primary: '#ff9023',
    secondary: '#b06612',
    callCardBlue: '#31708f',
    callCardGreen: '#5cb85c',
    callCardYellow: '#ffff4f',
    callCardRed: '#d9534f;',
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
