import styles from "./Task.module.css";

import { GiCheckMark } from "react-icons/gi";
import { HiOutlineTrash } from "react-icons/hi";

export function Task({ task, deleteTask, changeStatus }) {
  function handleDelete() {
    deleteTask(task.id);
  }
  function handleChangeStatus() {
    changeStatus(task.id);
  }

  function checked() {
    return (
      <div className={styles.checked}>
        <div onClick={handleChangeStatus}>
          <GiCheckMark />
        </div>
        <p>{task.content}</p>
      </div>
    );
  }

  function unchecked() {
    return (
      <div className={styles.unchecked}>
        <div onClick={handleChangeStatus}></div>
        <p>{task.content}</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {task.isDone ? checked() : unchecked()}
      <div className={styles.trash} onClick={handleDelete}>
        <HiOutlineTrash />
      </div>
    </div>
  );
}
