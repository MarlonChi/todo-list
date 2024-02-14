import { Header } from "./components/Header";
import { NewTaskForm } from "./components/NewTaskForm";

import styles from "./App.module.css";
import { Tasks } from "./components/Tasks";

function App() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <NewTaskForm />
        <Tasks />
      </div>
    </>
  );
}

export default App;
