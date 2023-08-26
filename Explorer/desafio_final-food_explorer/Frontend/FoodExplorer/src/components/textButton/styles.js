import { styled } from "styled-components";

export const Container = styled.div`
  width: fit-content;

  > button {
    background: transparent;
    padding: 0;
  }

  &:hover {
    text-decoration: underline;
  }

  * {
    &:hover {
      filter: none;
    }
  }
`;
