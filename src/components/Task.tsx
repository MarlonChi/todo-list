import { Trash } from "phosphor-react";
import styles from "./Task.module.css";

interface Task {
  id: string;
  description: string;
  status: "Em andamento" | "Concluída";
  handleDeleteTask: (id: string) => void;
}

export const Task = ({ id, description, handleDeleteTask }: Task) => {
  return (
    <div className={styles.task}>
      <div className={styles.checkbox}>
        <input type="checkbox" id={id} />
        <label htmlFor={id}>{description}</label>
      </div>
      <button title="Deletar tarefa" onClick={() => handleDeleteTask(id)}>
        <Trash size={24} />
      </button>
    </div>
  );
};
