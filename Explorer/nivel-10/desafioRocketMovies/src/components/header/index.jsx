import { Container, Profile } from "./styles";
import { TextButton } from "../textButton";
import { Input } from "../input";
import { Logo } from "../logo";
import theme from "../../styles/theme.js";
import { useAuth } from "../../hooks/auth";

export function Header({
  userName = "luismattos",
  userImgUrl = "https://github.com/luismattos.png",
  lrPadding = "2.4rem",
  ...rest
}) {
  const { signOut } = useAuth();

  function handleInput(e) {
    // TODO
  }

  return (
    <Container lrPadding={lrPadding}>
      <Logo fontSize="2.4rem"></Logo>

      <div id="inSearch">
        <Input placeholder="Pesquisar pelo titulo" onChange={handleInput} />
      </div>

      <Profile userImgUrl={userImgUrl}>
        <div>
          <div id="username">{userName}</div>

          <TextButton
            id="textButton"
            text="Logout"
            textColor={theme.COLOR.LIGHT_GREY}
            onClick={signOut}
          />
        </div>

        <div></div>
      </Profile>
    </Container>
  );
}
