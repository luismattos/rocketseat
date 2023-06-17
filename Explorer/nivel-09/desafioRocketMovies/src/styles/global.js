import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  :root {
    font-size: 62.5%;
  }

  *{
    box-sizing: border-box;
    color: ${({ theme }) => theme.COLOR.WHITE};
    font-weight: ${({ theme }) => theme.FONT.WEIGHT.REGULAR};
    font-size: 1.6rem;
  }

  body{
    background-color: ${({ theme }) => theme.COLOR.BODY_BACKGROUND};
    height: 100vh;
  }

`;
