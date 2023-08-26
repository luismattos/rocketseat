import { api } from "../../services/api.js";
import theme from "../../styles/theme.js";
import { Auth } from "../../components/auth";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { TextButton } from "../../components/textButton";
import { Container, Form } from "./styles.js";
import { TfiEmail, TfiLock } from "react-icons/tfi";
import { useAuth } from "../../hooks/auth.jsx";
import { useState } from "react";

export function SignIn() {
  function handleSignIn() {}

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn(e) {
    if (!(email && password)) {
      return alert("Todos os campos devem ser preenchidos");
    }

    signIn({ email, password });
  }

  return (
    <Auth title="Faça seu login">
      <Container>
        <Form>
          <Input
            icon={TfiEmail}
            type="email"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            icon={TfiLock}
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e)}
          />
        </Form>

        <Button text="Sign In" handle={handleSignIn} />

        <TextButton
          textColor={theme.COLOR.PINK}
          to="/register"
          text="Sign Up"
        />
      </Container>
    </Auth>
  );
}
