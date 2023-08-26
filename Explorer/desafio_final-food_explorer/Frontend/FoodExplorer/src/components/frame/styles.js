import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.COLOR.DARK_700};
  padding: ${({ padding }) => padding};
  border-radius: ${({ borderRadius }) => borderRadius};
`;
