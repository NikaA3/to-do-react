import { useState } from "react";
import { todo } from "../interfaceTodo";
import logo from "../../Images/Vector.svg";
import styles from "./Task.module.css";
interface Props {
  task: todo;
  deleteTask(taskName: string): void;
}

const Task = (props: {
  index: number;
  item: todo;
  deleteTask: (taskName: string) => void;
}) => {
  const { index, item, deleteTask } = props;
  const [checked, isChecked] = useState(false);

  const mapTime = item.createdAt.toLocaleTimeString().slice(0, 5);
  const mapAmPM = item.createdAt.toLocaleTimeString().slice(8, 11);
  return (
    <div className={styles.taskWrapper}>
      <div className={styles.leftSide}>
        <div
          key={index}
          className={checked ? styles.taskValueCrossed : styles.taskValue}
        >
          {item.text}
        </div>
        {item.text.length === 0 ? null : (
          <div>
            <div className={styles.timeValue}>
              Today at {mapTime} {mapAmPM}
            </div>
          </div>
        )}
      </div>
      {item.text.length === 0 ? null : (
        <div className={styles.rightSide}>
          <div
            onClick={() => isChecked(!checked)}
            className={checked ? styles.checked : styles.completed}
          ></div>
          <button
            onClick={() => {
              deleteTask(item.text);
            }}
            className={styles.logoBtn}
          >
            <img src={logo} alt="logo" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Task;
