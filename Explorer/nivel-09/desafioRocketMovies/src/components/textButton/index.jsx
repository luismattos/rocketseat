import { Container } from "./styles.js";
import { Link } from "react-router-dom";

export function TextButton({ to="#", icon: Icon, text = "", textColor, ...rest }) {
  return (
    <Container textColor={textColor}>
      <Link to={to} {...rest}>
        {Icon && <Icon />}
        {text}
      </Link>
    </Container>
  );
}
