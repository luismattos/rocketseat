import { LuClipboardList } from "react-icons/lu";
import styles from "./TaskList.module.css";
import { Task } from "./Task";

export function TaskList({ tasks, deleteTask, changeStatus }) {
  function Empty() {
    return (
      <div className={styles.empty}>
        <LuClipboardList />
        <p>
          <span>Voce ainda nao tem tarefas cadastradas</span>
          <br />
          Crie tarefas e organize seus itens a fazer
        </p>
      </div>
    );
  }

  function NotEmpty() {
    return (
      <div className={styles.notEmpty}>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            changeStatus={changeStatus}
          />
        ))}
      </div>
    );
  }

  const tdone = tasks.filter((task) => task.isDone == true);
  const ntdone = tdone.length;

  const isEmpty = tasks.length ? false : true;

  return (
    <div className={styles.container}>
      <header>
        <div>
          <span>Tarefas criadas</span>
          <span>{tasks.length}</span>
        </div>
        <div>
          <span>Concluidas</span>
          <span>{ntdone}</span>
        </div>
      </header>
      <main>{isEmpty ? <Empty /> : <NotEmpty />}</main>
    </div>
  );
}
