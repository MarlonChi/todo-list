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

  console.log(tasks);

  return (
    <>
      <Header />
      <div className={styles.container}>
        <NewTaskForm
          task={task}
          setTask={setTask}
          handleCreateNewTask={handleCreateNewTask}
        />
        <Tasks tasks={tasks} />
      </div>
    </>
  );
}

export default App;
