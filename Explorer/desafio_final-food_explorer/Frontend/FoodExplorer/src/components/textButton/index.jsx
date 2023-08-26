import { useTheme } from "styled-components";
import { Button } from "../button/index.jsx";
import { Container } from "./styles.js";

export function TextButton({
  icon: Icon,
  text = "",
  fontSize = "1.6rem",
  onClick = () => {},
  color = "black",
  fill = "black",
  fontWeight = 500,
}) {
  const theme = useTheme();

  function handleOnClick(e) {
    onClick();
  }

  return (
    <Container>
      <Button
        icon={Icon}
        fontSize={fontSize}
        onClick={handleOnClick}
        text={text}
        color={color}
        fill={fill}
        backgroundColor="transparent"
        fontWeight={fontWeight}
      />
    </Container>
  );
}
