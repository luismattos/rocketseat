import { Container } from "./styles.js";
import { Link } from "react-router-dom";

export function TextButton({
  to = "#",
  icon: Icon,
  text = "",
  textColor,
  onClick = () => {},
  ...rest
}) {
  return (
    <Container textColor={textColor}>
      <Link to={to} {...rest} onClick={onClick}>
        {Icon && <Icon />}
        {text}
      </Link>
    </Container>
  );
}
