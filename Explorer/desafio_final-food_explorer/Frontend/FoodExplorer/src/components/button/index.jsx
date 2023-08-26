import { Container } from "./styles.js";
import { useTheme } from "styled-components";

export function Button({
  icon: Icon,
  text = "",
  fontSize = "1.6rem",
  onClick = () => {},
  color = "black",
  fill = "black",
  backgroundColor = "transparent",
  fontWeight,
}) {
  const theme = useTheme();

  function handleOnClick(e) {
    onClick();
  }

  return (
    <Container
      fontSize={fontSize}
      onClick={handleOnClick}
      color={color}
      fill={fill}
      backgroundColor={backgroundColor}
      fontWeight={fontWeight ?? theme.FONT.WEIGHT.MEDIUM}
    >
      {Icon && <Icon />}
      <div>{text}</div>
    </Container>
  );
}
