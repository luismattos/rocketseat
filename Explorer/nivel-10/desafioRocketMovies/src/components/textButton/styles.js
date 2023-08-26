import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > a {
    display: flex;
    align-items: center;
    color: ${({ theme, textColor }) => textColor};
    font-family: ${({ theme }) => theme.FONT.FAMILY.ROBOTOSLAB};
    font-weight: ${({ theme }) => theme.FONT.WEIGHT.REGULAR};
    font-size: 1.6rem;
    text-align: center;
    text-decoration: none;
    cursor: pointer;

    svg {
      margin-right: 0.8rem;
      fill: ${({ theme, textColor }) => textColor};
    }

    &:hover {
      text-decoration: underline;
    }
  }
`;
