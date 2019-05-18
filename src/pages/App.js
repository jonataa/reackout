import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';
import 'typeface-roboto';

import ProductList from '../components/ProductList';

const GlobalStyles = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }

    body {
      font-family: 'Roboto', sans-serif;
    }
`;

const App = () => {
  return (
    <React.Fragment>
      <Normalize />
      <GlobalStyles />
      <ProductList></ProductList>
    </React.Fragment>
  );
};

export default App;
