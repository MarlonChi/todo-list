import { Task } from "./Task";
import styles from "./Tasks.module.css";

export const Tasks = () => {
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
        <Task />
        <Task />
      </div>
    </section>
  );
};
