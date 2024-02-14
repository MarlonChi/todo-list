import { Trash } from "phosphor-react";
import styles from "./Task.module.css";

interface Task {
  id: string;
  description: string;
  status: "Em andamento" | "Concluída";
}

export const Task = ({ id, description }: Task) => {
  return (
    <div className={styles.task}>
      <div className={styles.checkbox}>
        <input type="checkbox" id={id} />
        <label htmlFor={id}>{description}</label>
      </div>
      <button title="Deletar tarefa">
        <Trash size={24} />
      </button>
    </div>
  );
};
