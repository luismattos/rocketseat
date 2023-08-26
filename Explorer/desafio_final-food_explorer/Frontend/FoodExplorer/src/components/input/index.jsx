import { Container } from "./styles.js";

export function Input({ name, label, placehoder }) {
  return (
    <Container>
      {label && <label for={name}>{label}</label>}
      <input type="text" id={name} placeholder={placehoder} />
    </Container>
  );
}
