import React, { ChangeEvent, useState } from "react";
import styles from "./App.module.css";
import { todo } from "./Components/interfaceTodo";
import Task from "./Components/Task/Task";
import Header from "./Components/Header/Header";

const App = () => {
  const [input, setInput] = useState<string>("");
  const [toDos, setToDos] = useState<todo[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const addTodo = () => {
    if (input.length === 0) {
      return;
    } else {
      setToDos([...toDos, { text: input, createdAt: new Date() }]);
    }

    setInput("");
  };

  const deleteTask = (taskName: string): void => {
    setToDos(
      toDos.filter((task) => {
        return task.text !== taskName;
      })
    );
  };

  return (
    <div className={styles.App}>
      <div className={styles.text}>Todo</div>
      <div className={styles.todo}>
        <Header />
        <div className={styles.body}>
          <div className={styles.wrapper}>
            <input
              type="text"
              onChange={handleChange}
              value={input}
              className={styles.input}
              placeholder="Note"
            />
            <button
              onClick={addTodo}
              className={input.length === 0 ? styles.disabled : styles.addBtn}
            >
              +
            </button>
          </div>
          {toDos.map((item: todo, index: number) => {
            return <Task index={index} item={item} deleteTask={deleteTask} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
