import { Container } from "./styles.js";
import theme from "../../styles/theme.js";

export function Button({
  icon: Icon,
  text,
  textColor = theme.COLOR.GREY,
  backgroundColor = theme.COLOR.PINK,
  to = "#",
  onClick = () => {},
  ...rest
}) {
  return (
    <Container
      textColor={textColor}
      backgroundColor={backgroundColor}
      to={to}
      onClick={onClick}
      {...rest}
    >
      {Icon && <Icon />}
      {text}
    </Container>
  );
}
