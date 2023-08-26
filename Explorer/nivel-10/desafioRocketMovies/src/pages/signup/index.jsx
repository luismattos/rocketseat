import { Container, Form } from "./styles.js";
import { Auth } from "../../components/auth";
import { TfiEmail, TfiLock } from "react-icons/tfi";
import { SlUser } from "react-icons/sl";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { TextButton } from "../../components/textButton";
import theme from "../../styles/theme.js";
import { api } from "../../services/api.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function SignUp() {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleSignUp() {
    if (!(data.email && data.username && data.password)) {
      return alert("Todos os campos devem ser preenchidos");
    }

    api
      .post("/user", data)
      .then(() => {
        alert(`${data.username} cadastrado com sucesso`);
        navigate("/");
      })
      .catch((err) => {
        if (err.response) {
          return alert(err.response.data.message);
        }
        return alert(`Nao foi possivel cadastrar ${data.username}`);
      })
      .finally();
  }

  return (
    <Auth title="Crie sua Conta">
      <Container>
        <Form>
          <Input
            icon={SlUser}
            type="text"
            placeholder="Username"
            onChange={(e) =>
              setData((data) => (data.username = String(e.target.value)))
            }
          />
          <Input
            icon={TfiEmail}
            type="email"
            placeholder="E-mail"
            onChange={(e) =>
              setData((data) => (data.email = String(e.target.value)))
            }
          />
          <Input
            icon={TfiLock}
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setData((data) => (data.password = String(e.target.value)))
            }
          />
        </Form>

        <Button text="Sign Up" onClick={handleSignUp} />
        <TextButton textColor={theme.COLOR.PINK} to="/" text="Sign In" />
      </Container>
    </Auth>
  );
}
