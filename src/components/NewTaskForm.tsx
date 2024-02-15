import { FormEvent } from "react";
import { PlusCircle } from "phosphor-react";

import styles from "./NewTaskForm.module.css";

interface NewTaskFormProps {
  task: string;
  setTask: (task: string) => void;
  handleCreateNewTask: (event: FormEvent<HTMLFormElement>) => void;
}

export const NewTaskForm = ({
  task,
  setTask,
  handleCreateNewTask,
}: NewTaskFormProps) => {
  return (
    <form onSubmit={handleCreateNewTask} className={styles.newTaskForm}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={task}
        onChange={(event) => setTask(event.target.value)}
        required
      />
      <button type="submit" disabled={task.length === 0}>
        Criar <PlusCircle size={16} />
      </button>
    </form>
  );
};
