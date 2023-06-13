import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
  color: ${({ theme }) => theme.COLOR.GREY};
  background-color: ${({ theme }) => theme.COLOR.PINK};
  border: none;
  border-radius: 1rem;
  font-size: 1.6rem;
  padding: 1.2rem;

  cursor: pointer;

  svg {
    fill: ${({ theme }) => theme.COLOR.GREY};
  }

  &:hover {
    filter: brightness(0.9);
  }
`;
