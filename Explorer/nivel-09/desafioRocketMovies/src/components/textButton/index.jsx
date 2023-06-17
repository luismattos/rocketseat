import { Container } from "./styles.js";

export function TextButton({ icon: Icon, text = "", textColor, ...rest }) {
  return (
    <Container textColor={textColor}>
      <a {...rest}>
        {Icon && <Icon />}
        {text}
      </a>
    </Container>
  );
}
