import { Container, Form } from "./styles.js";
import { Auth } from "../../components/auth";
import { TfiEmail, TfiLock, TfiArrowLeft } from "react-icons/tfi";
import { SlUser } from "react-icons/sl";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { TextButton } from "../../components/textButton";
import theme from "../../styles/theme.js";

export function SignUp() {
  return (
    <Auth title="Crie sua Conta">
      <Container>
        <Form>
          <Input icon={SlUser} type="text" placeholder="Username" />
          <Input icon={TfiEmail} type="email" placeholder="E-mail" />
          <Input icon={TfiLock} type="password" placeholder="Password" />
        </Form>

        <Button text="Sign Up" />
        <TextButton
          textColor={theme.COLOR.PINK}
          icon={TfiArrowLeft}
          href="#"
          text="Sign In"
        />
      </Container>
    </Auth>
  );
}
