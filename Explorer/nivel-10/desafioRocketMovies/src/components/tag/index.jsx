import { Container } from "./styles.js";

export function Tag({
  content,
  icon: Icon,
  enabled = false,
  handle = () => {},
  ...rest
}) {
  return (
    <Container enabled={enabled}>
      <div contentEditable={enabled}>{content}</div>

      {Icon && (
        <button onClick={handle}>
          <Icon />
        </button>
      )}
    </Container>
  );
}
