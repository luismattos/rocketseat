import styles from "./Header.module.css";
import logoURL from "../assets/Logo.svg";

export function Header() {
  return (
    <div className={styles.container}>
      <img src={logoURL} />
    </div>
  );
}
