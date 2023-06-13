import { Container } from "./styles.js";

export function Button({ icon: Icon, text, ...rest }) {
  return (
    <Container {...rest}>
      {Icon && <Icon />}
      {text}
    </Container>
  );
}
