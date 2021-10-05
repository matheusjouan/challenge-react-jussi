import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  :root {
    --color-green: #03FFA5;
    --color-pink: #EE0E7D;
    --color-black: #000000;
    --color-grey: #F2F2F2;
    --color-darkGrey: #5B5B5B;
    --color-white: #FFFFFF;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  body, input, textarea, button {
    font-family: 'Barlow', sans-serif;
    font-weight: 500;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
  }

  button {
    cursor: pointer;
    background: transparent;
    border: 0;
    outline: 0;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;