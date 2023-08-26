import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.2rem;
  padding-top: 2.4rem;
  padding-bottom: 2.4rem;
  background-color: ${({ theme }) => theme.COLOR.DARK_600};
`;
