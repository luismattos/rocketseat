import { Container } from "./styles.js";

export function Tag({ content, icon: Icon, enabled = false, ...rest }) {
  return (
    <Container enabled={enabled}>
      <div contentEditable={enabled}>{content}</div>

      {Icon && (
        <button>
          <Icon />
        </button>
      )}
    </Container>
  );
}
