import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --color-black: #000;
    --color-background: #F0F0F7;
    --color-primary-lighter: #9871F5;
    --color-primary-light: #916BEA;
    --color-primary: #8257E5;
    --color-primary-dark: #774DD6;
    --color-primary-darker: #6842C2;
    --color-secundary: #04D361;
    --color-secundary-dark: #04BF58;
    --color-title-in-primary: #FFFFFF;
    --color-text-in-primary: #D4C2FF;
    --color-text-title: #32264D;
    --color-text-complement: #9C98A6;
    --color-text-base: #6A6180;
    --color-line-in-white: #E6E6F0;
    --color-input-background: #F8F8FC;
    --color-button-text: #FFFFFF;
    --color-box-base: #FFFFFF;
    --color-box-footer: #FAFAFC;

    font-size: 60%;
  }

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100vw;
    height: 100vh;
  }

  body {
    background: var(--color-background);
    -webkit-font-smoothing: antialiased !important;
  }

  #root{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  body, input, button, textarea {
    font: 500 1.6rem Poppins;
    color: var(--color-text-base)
  }

  button {
    width: 100%;
    height: 5.6rem;
    margin-top: 3.2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 1;
    border-radius: 0.8rem;
    text-decoration: none;
    font: 700 1.6rem Archivo;
    cursor: pointer;

    transition: background 0.2s;
  }

  .container {
    width: 90vw;
    max-width: 70rem;
  }
`;
