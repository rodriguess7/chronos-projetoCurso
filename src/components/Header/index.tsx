import styles from "./styles.module.css";
import { Logo } from "../Logo";
import { Menu } from "../Menu";
export function Heading() {
  return (
    <header className={styles.heading}>
      <Logo />
      <Menu />
    </header>
  );
}
