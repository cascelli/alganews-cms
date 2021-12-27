import curriedTransparentize from 'polished/lib/color/transparentize';
import { createGlobalStyle } from 'styled-components/macro';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Lato', sans-serif;
    background-color: #F3F8FA;
    color: #274060
  }

  .confirm-overlay {
    background-color: ${curriedTransparentize(0.2, '#274060')};
  }

  .info-overlay {
    background-color: ${curriedTransparentize(0.2, '#F3F8FA')};
  }


`