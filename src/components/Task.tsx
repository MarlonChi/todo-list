import { useState } from "react";

import { Trash } from "phosphor-react";
import styles from "./Task.module.css";

interface Task {
  id: string;
  description: string;
  status: "Em andamento" | "Concluída";
  handleDeleteTask: (id: string) => void;
  handleUpdateTask: (id: string, status: "Em andamento" | "Concluída") => void;
}

export const Task = ({
  id,
  description,
  status,
  handleDeleteTask,
  handleUpdateTask,
}: Task) => {
  const [isChecked, setIsChecked] = useState<boolean>(status === "Concluída");

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    handleUpdateTask(id, isChecked ? "Em andamento" : "Concluída");
  };

  return (
    <div className={styles.task}>
      <div className={styles.checkbox}>
        <input
          type="checkbox"
          id={id}
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <label htmlFor={id}>{description}</label>
      </div>
      <button title="Deletar tarefa" onClick={() => handleDeleteTask(id)}>
        <Trash size={24} />
      </button>
    </div>
  );
};
