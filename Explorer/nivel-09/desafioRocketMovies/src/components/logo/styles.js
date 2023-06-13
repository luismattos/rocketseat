import styled from "styled-components";

export const Container = styled.div`
  width: fit-content;
  color: ${({ theme }) => theme.COLOR.PINK};
  font-style: ${({ theme }) => theme.FONT.FAMILY.ROBOTOSLAB};
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.BOLD};
  font-size: ${({ theme, fontSize }) => (fontSize ? fontSize : "1.6rem")};
  cursor: pointer;
`;
