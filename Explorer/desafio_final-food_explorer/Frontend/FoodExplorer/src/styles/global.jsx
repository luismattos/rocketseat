import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root{
    font-size: 62.5%;
  }

  *{
    box-sizing: border-box;
    color: ${({ theme }) => theme.COLOR.LIGHT_100};
    font-family: ${({ theme }) => theme.FONT.FAMILY.ROBOTO};
    font-weight: ${({ theme }) => theme.FONT.WEIGHT.REGULAR};
    font-size: 1.6rem;
		text-decoration:none;
  }

  body{
    background-color: ${({ theme }) => theme.COLOR.DARK_400};
    height: 100vh;

    header, footer {
      >*{
        padding: 0 6.4rem
      }
    }
    main {
      margin: 0 6.4rem;
    }
  }
`;
