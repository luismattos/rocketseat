import { Container } from "./styles.js";

export function Input({ icon: Icon, ...rest }) {
  return (
    <Container>
      {Icon && <Icon />}
      <input {...rest} />
    </Container>
  );
}
