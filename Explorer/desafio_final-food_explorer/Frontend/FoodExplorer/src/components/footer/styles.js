import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.COLOR.DARK_600};
  padding-top: 2.4rem;
  padding-bottom: 2.4rem;

  > div:last-child {
    font-size: 1.4rem;
    font-weight: ${({ theme }) => theme.FONT.WEIGHT.REGULAR};
    color: ${({ theme }) => theme.COLOR.LIGHT_200};
  }
`;
