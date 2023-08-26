import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { Reset } from "styled-reset";
import { Routes } from "./routes";
import theme from "./styles/theme.js";
import GlobalStyle from "./styles/global.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  </React.StrictMode>
);
