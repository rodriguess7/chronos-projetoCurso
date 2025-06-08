import styles from "./styles.module.css";
export function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="#">Aprenda a técnica pomodoro.</a>
      <a>Chronos Pomodoro &copy; {new Date().getFullYear()}.</a>
    </footer>
  );
}
