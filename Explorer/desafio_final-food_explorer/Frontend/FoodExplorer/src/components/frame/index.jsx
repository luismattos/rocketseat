import { useTheme } from "styled-components";
import { Container } from "./styles.js";

export function Frame({ padding = "0rem", borderRadius = "0rem", children }) {
  const theme = useTheme();

  return (
    <Container padding={padding} borderRadius={borderRadius}>
      {children}
    </Container>
  );
}
