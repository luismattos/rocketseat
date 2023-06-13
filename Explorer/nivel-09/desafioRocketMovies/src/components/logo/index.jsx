import { Container } from "./styles.js";

export function Logo({ fontSize = "1.6rem", ...rest }) {
  return (
    <Container fontSize={fontSize} {...rest}>
      RocketMovies
    </Container>
  );
}
