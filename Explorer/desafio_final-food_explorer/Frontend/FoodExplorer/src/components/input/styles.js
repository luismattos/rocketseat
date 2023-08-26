import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  background-color: "transparent";
  flex: 1;

  * {
    font-family: ${({ theme }) => theme.FONT.FAMILY.ROBOTO};
    font-weight: ${({ theme }) => theme.FONT.WEIGHT.REGULAR};
    font-size: 1.6rem;
  }

  > label {
    color: ${({ theme }) => theme.COLOR.LIGHT_400};
  }

  > input {
    padding: 0.8rem 1.4rem;
    color: ${({ theme }) => theme.COLOR.LIGHT_100};
    background-color: ${({ theme }) => theme.COLOR.DARK_900};
    border: none;
    border-radius: 0.8rem;

    &::placeholder {
      color: ${({ theme }) => theme.COLOR.LIGHT_500};
    }
  }
`;
