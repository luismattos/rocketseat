import { Container } from "./styles.js";
import { Logo } from "../logo";
import { Input } from "../input";
import { Button } from "../button";
import { SignOut } from "../../icons";

export function Header({ buttonIcon, buttonText = "" }) {
  return (
    <Container>
      <Logo fontSize="2.4rem" />
      <Input
        id="in-search"
        placehoder="Busque por pratos ou ingredientes"
        name="Search"
      />
      <Button
        id="btn"
        icon={buttonIcon}
        text={buttonText}
        color={({ theme }) => theme.COLOR.LIGHT_100}
        fill={({ theme }) => theme.COLOR.LIGHT_100}
        backgroundColor={({ theme }) => theme.COLOR.TOMATO_100}
        fontWeight={({ theme }) => theme.FONT.WEIGHT.MEDIUM}
        fontSize="1.4rem"
      />
      <SignOut id="signout" />
    </Container>
  );
}
