import { Container } from "./styles.js";

export function Input({
  icon: Icon,
  onChange = () => {},
  ...rest }) {
  return (
    <Container>
      {Icon && <Icon />}
      <input {...rest} onChange={onChange} />
    </Container>
  );
}
