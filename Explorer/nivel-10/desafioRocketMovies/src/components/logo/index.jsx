import { Container } from "./styles.js";

export function Logo({ fontSize = "1.6rem", handle = () => {}, ...rest }) {
  return (
    <Container fontSize={fontSize} {...rest} onClick={handle}>
      RocketMovies
    </Container>
  );
}
