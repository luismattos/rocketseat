import { Container } from "./styles.js";

export function Tag({ content }) {
  return content && <Container>{content}</Container>;
}
