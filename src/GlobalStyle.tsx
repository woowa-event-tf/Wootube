import { Global, css } from '@emotion/react';

import emotionNormalize from 'emotion-normalize';

const GlobalStyle = () => (
  <Global
    styles={css`
      ${emotionNormalize}

      * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        border: 0;
      }

      html,
      body,
      #root {
        min-height: 100%;
        height: 100vh;

        font-family: Helvetica, Arial, sans-serif;
        background-color: #fafafa;

        position: relative;
      }

      li {
        list-style: none;
      }

      a {
        :link,
        :visited {
          text-decoration: none;
          color: #000000;
        }
      }
    `}
  />
);

export default GlobalStyle;
