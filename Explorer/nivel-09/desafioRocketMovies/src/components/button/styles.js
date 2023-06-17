import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  color: ${({ theme }) => theme.COLOR.GREY};
  font-family: ${({ theme }) => theme.FONT.FAMILY.ROBOTOSLAB};
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.MEDIUM};
  background-color: ${({ theme }) => theme.COLOR.PINK};
  border: none;
  border-radius: 1rem;
  font-size: 1.6rem;
  padding: 1.6rem
  3.2rem;

  cursor: pointer;

  svg {
    fill: ${({ theme }) => theme.COLOR.GREY};
  }

  &:hover {
    filter: brightness(0.9);
  }
`;
