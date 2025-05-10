import styles from "./styles.module.css";
import { Timer } from "lucide-react";

export function Logo() {
  return (
    <a href="#" className={styles.logoContainer}>
      <Timer size={72} color="var(--primary)" />
      <span>Chronos</span>
    </a>
  );
}
