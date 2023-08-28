import { AiOutlinePlusCircle } from "react-icons/ai";
import styles from "./NewTask.module.css";
import { useState } from "react";

export function NewTask({ createTask }) {
  const [contentText, setContentText] = useState("");

  function handleNewTask() {
    event!.preventDefault();
    createTask(contentText);
    setContentText("");
  }

  function handleOnChange() {
    setContentText(event!.target.value);
  }

  const isNewTaskEmpty = contentText ? false : true;

  return (
    <form className={styles.form} onSubmit={handleNewTask}>
      <input
        className={styles.teste}
        type="text"
        name="inTask"
        placeholder="Adicione uma nova tarefa"
        onChange={handleOnChange}
        value={contentText}
      />

      <button type="submit" name="btnSubmit" disabled={isNewTaskEmpty}>
        <span>Criar</span> <AiOutlinePlusCircle />
      </button>
    </form>
  );
}
