import {
  Container,
  Content,
  Children,
  Header,
  Image,
  Title,
} from "./styles.js";
import { Logo } from "../logo";

export function Auth({ title, children }) {
  return (
    <Container>
      <Content>
        <div>
          <Header>
            <Logo fontSize="4.8rem" />
            <div id="description">
              Aplicação para acompanhar tudo que assistir.
            </div>
          </Header>
          {title && <Title>{title}</Title>}
          {children && <Children>{children}</Children>}
        </div>
      </Content>
      <Image />
    </Container>
  );
}
