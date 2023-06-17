import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;

  grid-template-areas:
    "A"
    "B"
    "C";

  > div:first-child {
    grid-area: A;
  }

  > header {
    grid-area: B;
    padding: 2.4rem ${({ theme, lrPadding }) => lrPadding};
    display: flex;
    justify-content: space-between;
    align-items: center;

    > div:first-child {
      color: ${({ theme }) => theme.COLOR.WHITE};
      font-family: ${({ theme }) => theme.FONT.FAMILY.ROBOTOSLAB};
      font-size: 3.2rem;
      font-weight: ${({ theme }) => theme.FONT.WEIGHT.REGULAR};
    }
  }

  > main {
    grid-area: C;
    margin: 2.4rem ${({ theme, lrPadding }) => lrPadding};
    display: flex;
    flex-direction: column;
    gap: 4.8rem;

    overflow-y: auto;
    /*scrollbar-color: ${({ theme }) => theme.COLOR.PINK};*/
    /*scrollbar-width: thin;*/

    &::-webkit-scrollbar {
      width: 2.8rem; /* width of the entire scrollbar */
    }

    &::-webkit-scrollbar-track {
      background: transparent; /* color of the tracking area */
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) =>
        theme.COLOR.PINK}; /* color of the scroll thumb */
      border-radius: 510px; /* roundness of the scroll thumb */
      border: 0.8rem solid ${({ theme }) => theme.COLOR.BODY_BACKGROUND};
    }
  }
`;
