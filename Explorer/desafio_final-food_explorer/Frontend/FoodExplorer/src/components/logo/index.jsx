import { Container } from "./styles.js";
import { Hexagon } from "../../icons";
import { TextButton } from "../textButton/index.jsx";
import { useTheme } from "styled-components";

export function Logo({
  fontSize = "2.4rem",
  iconColor,
  color,
  onClick = () => {},
}) {
  const theme = useTheme();

  function handleClick(e) {
    onClick();
  }

  return (
    <Container>
      <TextButton
        icon={Hexagon}
        text="food explorer"
        fontSize={fontSize}
        onClick={handleClick}
        fill={iconColor ?? theme.COLOR.CAKE_100}
        color={color ?? theme.COLOR.LIGHT_100}
        fontWeight={theme.FONT.WEIGHT.BOLD}
      />
    </Container>
  );
}

/**
  <Container fontSize={fontSize} onClick={handleClick}>
    <PiHexagonFill />
    <h1>food explorer</h1>
  </Container>
 */
