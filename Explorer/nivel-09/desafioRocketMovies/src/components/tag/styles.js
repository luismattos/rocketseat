import styled from "styled-components";

export const Container = styled.div`
  margin-top: 0.8rem;
  padding: 0.8rem 1.6rem;
  width: fit-content;
  border-radius: 0.8rem;

  color: ${({ theme }) => theme.COLOR.LIGHT_GREY};
  font-size: 1.2rem;
  font-family: ${({ theme }) => theme.FONT.FAMILY.ROBOTO};
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.REGULAR};
  background-color: ${({ theme }) => theme.COLOR.GREY};
`;
