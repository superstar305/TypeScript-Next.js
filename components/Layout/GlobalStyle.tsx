import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  
  body{
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif;
  }

  

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  
`;

export default GlobalStyle;