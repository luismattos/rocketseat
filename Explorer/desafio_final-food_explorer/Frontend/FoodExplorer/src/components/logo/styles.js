import { styled } from "styled-components";
import { getRelative, getDecimal } from "../../utils";

export const Container = styled.div`
  display: flex;

  div {
    &:hover {
      text-decoration: none;
    }
  }
`;

/*
display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  gap: ${({ fontSize }) => getRelative(fontSize, 0.5)};

  > * {
    font-size: ${({ fontSize }) => fontSize};
    line-height: ${({ fontSize }) => getRelative(fontSize, 1.5)};
    color: ${({ theme }) => theme.COLOR.WHITE};
    fill: ${({ theme }) => theme.COLOR.LIGHT};
  }
*/
