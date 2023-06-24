import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  height: 100vh;

  * {
    border-radius: 1.2rem;
  }

  > header {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    > div:last-child {
      padding: 0 ${({ theme, lrPadding }) => lrPadding};
      display: flex;
    }
  }

  > main {
    padding: 0 ${({ theme, lrPadding }) => lrPadding};
    display: grid;
    gap: 4rem 1.6rem;
    grid-template-columns: repeat(2, 1fr);

    overflow-y: auto;

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

export const Title = styled.div`
  grid-column: 1 / 3;
  grid-row: 1 / 2;
  display: flex;

  color: ${({ theme }) => theme.COLOR.WHITE};
  font-family: ${({ theme }) => theme.FONT.FAMILY.ROBOTOSLAB};
  font-size: 3.6rem;
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.MEDIUM};
`;

export const MovieTitle = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  display: flex;
  flex-direction: column;
`;

export const MovieRating = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  display: flex;
  flex-direction: column;
`;

export const Summary = styled.div`
  grid-column: 1 / 3;
  grid-row: 3 / 4;
  display: flex;
  flex-direction: column;

  > textarea {
    padding: 1.2rem;
    background-color: ${({ theme }) => theme.COLOR.GREY};
    border: none;
    resize: none;
    height: 16rem;
    font-size: 1.6rem;

    overflow-y: auto;

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

export const MovieTags = styled.div`
  grid-column: 1 / 3;
  grid-row: 4 / 5;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  > div:first-child {
    color: ${({ theme }) => theme.COLOR.LIGHT_GREY};
    font-family: ${({ theme }) => theme.FONT.FAMILY.ROBOTOSLAB};
    font-size: 2rem;
    font-weight: ${({ theme }) => theme.FONT.WEIGHT.REGULAR};
  }

  > div:last-child {
    padding: 0.8rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1.2rem;
    background-color: ${({ theme }) => theme.COLOR.BLACK};
  }
`;

export const DeleteBtn = styled.div`
  grid-column: 1 / 2;
  grid-row: 5 / 6;
  display: flex;
  flex-direction: column;
`;

export const UpdateBtn = styled.div`
  grid-column: 2 / 3;
  grid-row: 5 / 6;
  display: flex;
  flex-direction: column;
`;
