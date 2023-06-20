import styled from "styled-components";

export const Container = styled.div`
  padding: 3.2rem;
  background-color: ${({ theme }) => theme.COLOR.PINK_ST};
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  border-radius: 1.6rem;

  #title {
    color: ${({ theme }) => theme.COLOR.LIGHT_GREY};
    font-size: 2.4rem;
    font-family: ${({ theme }) => theme.FONT.FAMILY.ROBOTOSLAB};
    font-weight: ${({ theme }) => theme.FONT.WEIGHT.BOLD};
  }

  #summary {
    margin: 0.8rem 0;

    color: ${({ theme }) => theme.COLOR.LIGHT_GREY};
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.FONT.FAMILY.ROBOTO};
    font-weight: ${({ theme }) => theme.FONT.WEIGHT.REGULAR};
    /*text-align: justify;*/

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    white-space: pre-wrap;
  }
`;

export const Tags = styled.div`
  margin-top: 0.8rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`;
