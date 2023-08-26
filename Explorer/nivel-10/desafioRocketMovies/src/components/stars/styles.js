import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: ${({ theme, size }) => size / 2};

  svg {
    fill: ${({ theme }) => theme.COLOR.PINK};
    font-size: ${({ theme, size }) => size};
  }
`;
