import { useTheme } from "styled-components";
import { Container } from "./styles.js";
import { Logo } from "../logo";

export function Footer({}) {
  const theme = useTheme();
  return (
    <Container>
      <Logo
        fontSize="2.4rem"
        color={theme.COLOR.LIGHT_700}
        iconColor={theme.COLOR.LIGHT_700}
      />
      <div>© 2023 - Todos os direitos reservados.</div>
    </Container>
  );
}
