import { Cycles } from "../Cycles";
import { DefaultInput } from "../DefaultInput";
import styles from "./styles.module.css";
export function Form() {
  return (
    <div className="formContainer">
      <form action="" className="form">
        <div className={styles.inputContainer}>
          <DefaultInput labelText="task" id="taskInput" type="text" />
        </div>
        <p>
          nesse ciclo <strong>foque</strong> por <strong>25min</strong>
        </p>
        <div className={styles.wrapper}>
          <Cycles />
        </div>
        <button>Enviar</button>
      </form>
    </div>
  );
}
