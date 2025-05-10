import { House, HistoryIcon, Settings, Sun } from "lucide-react";
import styles from "./styles.module.css";
export function Menu() {
  return (
    <nav className={styles.navContainer}>
      <a href="#">
        <House size={24} color="var(--text-over-primary)" />
      </a>
      <a href="#">
        <HistoryIcon size={24} color="var(--text-over-primary)" />
      </a>
      <a href="#">
        <Settings size={24} color="var(--text-over-primary)" />
      </a>
      <a href="#">
        <Sun size={24} color="var(--text-over-primary)" />
      </a>
    </nav>
  );
}
