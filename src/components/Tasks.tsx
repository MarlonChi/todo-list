import { ListEmpty } from "./ListEmpty";
import { Task } from "./Task";

import styles from "./Tasks.module.css";

interface Task {
  id: string;
  description: string;
}

interface TasksProps {
  tasks: Task[];
}

export const Tasks = ({ tasks }: TasksProps) => {
  return (
    <section className={styles.tasks}>
      <header>
        <div className={styles.tasksCreated}>
          <strong>Tarefas criadas</strong>
          <span>5</span>
        </div>
        <div className={styles.tasksFinished}>
          <strong>Concluídas</strong>
          <span>2 de 5</span>
        </div>
      </header>
      <div className={styles.taskList}>
        {tasks.map((task: Task) => (
          <Task key={task.id} id={task.id} description={task.description} />
        ))}
        <ListEmpty />
      </div>
    </section>
  );
};
