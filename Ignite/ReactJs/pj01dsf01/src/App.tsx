import "./reset.css";
import "./global.module.css";
import { Main } from "./components/Main";
import { Header } from "./components/Header";

export function App() {

  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}
