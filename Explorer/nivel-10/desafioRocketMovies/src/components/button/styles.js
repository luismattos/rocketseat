import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  color: ${({ theme, textColor }) => textColor};
  font-family: ${({ theme }) => theme.FONT.FAMILY.ROBOTOSLAB};
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.MEDIUM};
  background-color: ${({ theme, backgroundColor }) => backgroundColor};
  border: none;
  border-radius: 1rem;
  font-size: 1.6rem;
  padding: 1.6rem 3.2rem;

  cursor: pointer;

  svg {
    fill: ${({ theme }) => theme.COLOR.GREY};
  }

  &:hover {
    filter: brightness(0.9);
  }
`;
