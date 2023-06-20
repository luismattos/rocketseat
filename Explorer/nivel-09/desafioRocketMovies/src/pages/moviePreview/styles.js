import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;

  svg {
    fill: ${({ theme }) => theme.COLOR.PINK};
  }

  main {
    padding: 2.4rem ${({ theme, lrPadding }) => lrPadding};

    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 4.8rem;

    > div:last-child {
      display: flex;
      flex-direction: column;
      gap: 4rem;
    }

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

export const MovieHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2.4rem;
`;

export const TitleStars = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.COLOR.WHITE};
  font-size: 3.6rem;
  font-family: ${({ theme }) => theme.FONT.FAMILY.ROBOTOSLAB};
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.MEDIUM};
`;

export const Infos = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  > * {
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.FONT.FAMILY.ROBOTO};
    font-weight: ${({ theme }) => theme.FONT.WEIGHT.REGULAR};
  }
`;

export const AuthorImg = styled.div`
  width: 1.6rem;
  height: 1.6rem;
  background-image: url(${({ theme, authorImgUrl }) => authorImgUrl});
  border-radius: 5000px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

export const Author = styled.div``;

export const DateTime = styled.div``;

export const Tags = styled.div`
  display: flex;
  gap: 0.8rem;
`;

export const Summary = styled.div`
  color: ${({ theme }) => theme.COLOR.WHITE};
  font-size: 1.6rem;
  font-family: ${({ theme }) => theme.FONT.FAMILY.ROBOTOSLAB};
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.REGULAR};
  text-align: justify;
`;
