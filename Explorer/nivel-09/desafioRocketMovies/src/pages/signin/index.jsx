import { Container, Form } from "./styles.js";
import { Auth } from "../../components/auth";
import { TfiEmail, TfiLock } from "react-icons/tfi";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { TextButton } from "../../components/textButton";
import theme from "../../styles/theme.js";

export function SignIn() {
  return (
    <Auth title="Faça seu login">
      <Container>
        <Form>
          <Input icon={TfiEmail} type="email" placeholder="E-mail" />
          <Input icon={TfiLock} type="password" placeholder="Password" />
        </Form>

        <Button text="Sign In" />
        <TextButton
          textColor={theme.COLOR.PINK}
          to="/register"
          text="Sign Up"
        />
      </Container>
    </Auth>
  );
}
