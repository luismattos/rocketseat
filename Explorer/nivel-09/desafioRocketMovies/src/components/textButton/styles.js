import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > a {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.COLOR.PINK};
    font-family: ${({ theme }) => theme.FONT.FAMILY.ROBOTOSLAB};
    font-weight: ${({ theme }) => theme.FONT.WEIGHT.REGULAR};
    font-size: 1.6rem;
    line-height: 2.4rem;
    text-align: center;
    text-decoration: none;
    cursor: pointer;

    svg {
      margin-right: 0.8rem;
      fill: ${({ theme }) => theme.COLOR.PINK};
    }

    &:hover {
      text-decoration: underline;
    }
  }
`;
