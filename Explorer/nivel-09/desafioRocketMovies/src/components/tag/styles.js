import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem 1.6rem;
  width: fit-content;
  border: ${({ theme, enabled }) =>
    enabled ? `1px dashed ${theme.COLOR.LIGHT_GREY}` : "none"};
  border-radius: 0.8rem;
  background-color: ${({ theme, enabled }) =>
    enabled ? `transparent` : theme.COLOR.GREY};

  > div:first-child {
    color: ${({ theme, enabled }) =>
      enabled ? theme.COLOR.LIGHT_GREY : theme.COLOR.WHITE};
    font-size: 1.2rem;
    font-family: ${({ theme }) => theme.FONT.FAMILY.ROBOTO};
    font-weight: ${({ theme }) => theme.FONT.WEIGHT.REGULAR};
    border: none;
    outline: none;
  }

  > button {
    display: flex;
    cursor: pointer;
    padding: 0;
    background-color: transparent;
    border: none;
    outline: none;
    > svg {
      font-size: 1rem;
      fill: ${({ theme }) => theme.COLOR.PINK};
    }
  }
`;
