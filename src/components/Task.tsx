import { Trash } from "phosphor-react";
import styles from "./Task.module.css";

export const Task = () => {
  return (
    <div className={styles.task}>
      <div className={styles.checkbox}>
        <input type="checkbox" id="nome" />
        <label htmlFor="nome">
          Integer urna interdum massa libero auctor neque turpis turpis semper.
          Duis vel sed fames integer.
        </label>
      </div>
      <button title="Deletar tarefa">
        <Trash size={24} />
      </button>
    </div>
  );
};
