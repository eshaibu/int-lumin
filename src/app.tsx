import React from 'react';
import { injectGlobal } from '@emotion/css';
import Header from './header';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
    </div>
  );
}

export default App;

// eslint-disable-next-line @typescript-eslint/no-unused-expressions
injectGlobal`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    height: 100%;
    scroll-behavior: smooth;
  }
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Libre Franklin", 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height:100%;
    min-height: 100vh;
    font-size: 16px;
  }
  
  .app-wrapper {
    max-width: 2560px;
    margin: 0 auto;
  }
`;
