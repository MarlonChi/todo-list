import { ListEmpty } from "./ListEmpty";
import { Task } from "./Task";

import styles from "./Tasks.module.css";

interface Task {
  id: string;
  description: string;
  status: "Em andamento" | "Concluída";
}

interface TasksProps {
  tasks: Task[];
  handleDeleteTask: (id: string) => void;
  handleUpdateTask: (id: string, status: "Em andamento" | "Concluída") => void;
}

export const Tasks = ({
  tasks,
  handleDeleteTask,
  handleUpdateTask,
}: TasksProps) => {
  const taskQuantity = tasks.length;

  const taskFinished = tasks.filter(
    (task: Task) => task.status === "Concluída"
  ).length;

  return (
    <section className={styles.tasks}>
      <header>
        <div className={styles.tasksCreated}>
          <strong>Tarefas criadas</strong>
          <span>{taskQuantity}</span>
        </div>
        <div className={styles.tasksFinished}>
          <strong>Concluídas</strong>
          <span>
            {taskFinished} de {taskQuantity}
          </span>
        </div>
      </header>
      <div className={styles.taskList}>
        {tasks.length > 0 ? (
          <>
            {tasks.map((task: Task) => (
              <Task
                key={task.id}
                id={task.id}
                description={task.description}
                status={task.status}
                handleDeleteTask={handleDeleteTask}
                handleUpdateTask={handleUpdateTask}
              />
            ))}
          </>
        ) : (
          <ListEmpty />
        )}
      </div>
    </section>
  );
};
