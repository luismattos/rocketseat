import { Container, ProfileImg, Form } from "./styles";
import { TextButton } from "../../components/textButton";
import { TfiArrowLeft, TfiLock, TfiEmail } from "react-icons/tfi";
import { Button } from "../../components/button";
import { SlUser } from "react-icons/sl";
import theme from "../../styles/theme";
import { Input } from "../../components/input";
import { BsCamera } from "react-icons/bs";

export function Profile({ userImgUrl, userEmail, userName }) {
  return (
    <Container>
      <header>
        <div>
          <TextButton
            icon={TfiArrowLeft}
            textColor={theme.COLOR.PINK}
            text="Voltar"
          />
        </div>
        <ProfileImg userImgUrl={userImgUrl}>
          <div></div>
          <div>
            <BsCamera />
          </div>
        </ProfileImg>
      </header>
      <main>
        <Form>
          <Input
            icon={SlUser}
            type="text"
            placeholder="username"
            value={userName}
            disabled
          />
          <Input
            icon={TfiEmail}
            type="email"
            placeholder="email"
            value={userEmail}
            disabled
          />
        </Form>
        <Form>
          <Input icon={TfiLock} type="password" placeholder="Nova senha" />
          <Input icon={TfiLock} type="password" placeholder="Nova senha" />
        </Form>
        <div>
          <Button text={"Salvar"} />
        </div>
      </main>
    </Container>
  );
}

// <ProfileImg userImgUrl={userImgUrl} />;
