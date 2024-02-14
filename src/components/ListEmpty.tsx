import EmptyImg from "../assets/empty.svg";

import styles from "./ListEmpty.module.css";

export const ListEmpty = () => {
  return (
    <div className={styles.listEmpty}>
      <img src={EmptyImg} />
      <p>Você ainda não tem tarefas cadastradas</p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
};
