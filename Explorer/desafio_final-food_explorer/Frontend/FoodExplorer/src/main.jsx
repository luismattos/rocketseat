import React from "react";
import ReactDOM from "react-dom/client";
import { Reset } from "styled-reset";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import GlobalStyle from "./styles/global.jsx";
import { Routes } from "./routes";

import { Hexagon, Search } from "./icons";
import { Logo } from "./components/logo";
import { Button } from "./components/button";
import { TextButton } from "./components/textButton";
import { Frame } from "./components/frame";
import { Input } from "./components/input";
import { Footer } from "./components/footer";
import { Header } from "./components/Header";
import { Tag } from "./components/tag";
import { Card } from "./components/card";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyle />

      <header>
        <Header buttonIcon={Search} buttonText="Novo Prato" />
      </header>
      <main>
        <Frame>
          <Logo fontSize="4.2rem" />
        </Frame>
        <Frame>
          <TextButton
            fontSize="4.2rem"
            text="TextButton"
            icon={Hexagon}
            color="blue"
            fill="blue"
            fontWeight={theme.FONT.WEIGHT.REGULAR}
          />
        </Frame>
        <Frame>
          <Button
            fontSize="4.2rem"
            text="Button"
            color="yellow"
            fill="yellow"
            icon={Hexagon}
            backgroundColor="green"
            fontWeight={theme.FONT.WEIGHT.REGULAR}
          />
        </Frame>
        <Frame>
          <Input label="Label" placehoder="Exemplo: Input" name="Input" />
        </Frame>
        <Frame>
          <div style={{ display: "flex", gap: "0.8rem" }}>
            <Tag content="Tag editMode isCreation" editMode isCreation />
            <Tag content="Tag editMode" editMode />
            <Tag content="Tag isCreation" isCreation />
            <Tag />
          </div>
        </Frame>
        <Frame>{"CARDS"}</Frame>
      </main>
      <footer>
        <Footer />
      </footer>
    </ThemeProvider>
  </React.StrictMode>
);
