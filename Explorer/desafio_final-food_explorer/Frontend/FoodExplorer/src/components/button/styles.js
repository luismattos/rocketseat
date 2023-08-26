import { styled } from "styled-components";
import { getRelative } from "../../utils";

const paddingTopBottom = ({ fontSize }) => getRelative(fontSize, 0.3);
const paddingLeftRight = ({ fontSize }) => getRelative(fontSize, 1);

export const Container = styled.button`
  padding: ${paddingTopBottom} ${paddingLeftRight};
  display: flex;
  gap: ${({ fontSize }) => getRelative(fontSize, 0.5)};
  justify-content: center;
  align-items: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: filter 0.2s ease-in-out 25ms;

  &:hover {
    filter: brightness(1.2);
  }

  > * {
    font-family: ${({ theme }) => theme.FONT.FAMILY.POPPINS};
    font-size: ${({ fontSize }) => fontSize};
    font-weight: ${({ fontWeight }) => fontWeight};
    line-height: ${({ fontSize }) => getRelative(fontSize, 1.5)};
    color: ${({ color }) => color};
    fill: ${({ fill }) => fill};
  }
`;
