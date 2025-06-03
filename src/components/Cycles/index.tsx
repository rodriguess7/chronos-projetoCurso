import styles from "./styles.module.css";
export function Cycles() {
  return (
    <div className={styles.cycles}>
      <p>Ciclos:</p>
      <div className={styles.cycleDots}>
        <span className={`${styles.cycleDot} ${styles.worktime}`}></span>
        <span className={`${styles.cycleDot} ${styles.shortBreakTime}`}></span>
        <span className={`${styles.cycleDot} ${styles.worktime}`}></span>
        <span className={`${styles.cycleDot} ${styles.shortBreakTime}`}></span>
        <span className={`${styles.cycleDot} ${styles.worktime}`}></span>
        <span className={`${styles.cycleDot} ${styles.shortBreakTime}`}></span>
        <span className={`${styles.cycleDot} ${styles.worktime}`}></span>
        <span className={`${styles.cycleDot} ${styles.longBreakTime}`}></span>
      </div>
    </div>
  );
}
