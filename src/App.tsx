import { FormEvent, useState } from "react";
import { v4 as uuid } from "uuid";

import { Header } from "./components/Header";
import { NewTaskForm } from "./components/NewTaskForm";
import { Tasks } from "./components/Tasks";

import styles from "./App.module.css";

interface Task {
  id: string;
  description: string;
  status: "Em andamento" | "Concluída";
}
function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [task, setTask] = useState<string>("");

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    const newUuid = uuid();

    const newTask: Task = {
      id: newUuid,
      description: task,
      status: "Em andamento",
    };

    setTasks([...tasks, newTask]);
    setTask("");
  }

  function handleDeleteTask(id: string) {
    const updatedTasks = tasks.filter((item) => item.id !== id);

    setTasks(updatedTasks);
  }

  const handleUpdateTask = (
    id: string,
    status: "Em andamento" | "Concluída"
  ) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, status: status };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  return (
    <>
      <Header />
      <div className={styles.container}>
        <NewTaskForm
          task={task}
          setTask={setTask}
          handleCreateNewTask={handleCreateNewTask}
        />
        <Tasks
          tasks={tasks}
          handleDeleteTask={handleDeleteTask}
          handleUpdateTask={handleUpdateTask}
        />
      </div>
    </>
  );
}

export default App;
