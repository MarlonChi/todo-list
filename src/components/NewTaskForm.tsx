import { PlusCircle } from "phosphor-react";

import styles from "./NewTaskForm.module.css";

export const NewTaskForm = () => {
  return (
    <form className={styles.newTaskForm}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button type="submit">
        Criar <PlusCircle size={16} />
      </button>
    </form>
  );
};
