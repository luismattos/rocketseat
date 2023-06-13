import { Container } from "./styles.js";

export function TextButton({ icon: Icon, text = "", ...rest }) {
  return (
    <Container>
      <a {...rest}>
        {Icon && <Icon />}
        {text}
      </a>
    </Container>
  );
}
