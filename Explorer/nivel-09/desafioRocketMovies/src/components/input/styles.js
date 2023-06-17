import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  background: ${({ theme }) => theme.COLOR.GREY};
  padding: 1.2rem;
  border-radius: 1rem;

  > svg {
    fill: ${({ theme }) => theme.COLOR.LIGHT_GREY};
    font-size: 1.6rem;
  }

  > input {
    padding: 0;
    width: 100%;
    flex-grow: 1;
    border: none;
    font-size: 1.6rem;
    background: transparent;
    color: ${({ theme }) => theme.COLOR.WHITE};

    &::placeholder {
      color: ${({ theme }) => theme.COLOR.LIGHT_GREY};
    }
  }
`;
