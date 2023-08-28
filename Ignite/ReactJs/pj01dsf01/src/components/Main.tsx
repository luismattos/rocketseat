import { useState } from "react";
import styles from "./Main.module.css";
import { NewTask } from "./NewTask";
import { TaskList } from "./TaskList";

export function Main() {
  const [tasks, setTasks] = useState<Task[]>([]);

  interface Task {
    id: number;
    isDone: boolean;
    content: string;
  }

  function createTask(content: string) {
    if (content) {
      const nt = { isDone: false, content: content, id: Date.now() };
      setTasks([...tasks, nt]);
    }
  }

  function changeStatus(id: number) {
    setTasks((prevState) => {
      const index = prevState.findIndex((task) => task.id == id);
      const found = prevState[index];

      prevState = prevState.filter((task) => {
        return task.id != id;
      });

      found.isDone = !found.isDone;

      prevState.splice(index, 0, found);

      return prevState;
    });
  }

  function deleteTask(id: number) {
    if (id) {
      setTasks(tasks.filter((task) => task.id != id));
    }
  }

  return (
    <div className={styles.container}>
      <NewTask createTask={createTask} />
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        changeStatus={changeStatus}
      />
    </div>
  );
}
