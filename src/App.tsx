import { Header } from "./components/Header";
import { NewTaskForm } from "./components/NewTaskForm";

import styles from "./App.module.css";

function App() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <NewTaskForm />
      </div>
    </>
  );
}

export default App;
