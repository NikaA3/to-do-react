import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  let day = new Date().toDateString().slice(0, 3);
  let date = new Date().toDateString().slice(8, 11);
  let time = new Date().toLocaleTimeString().slice(0, 5);
  let amPm = new Date().toLocaleTimeString().slice(8, 11);
  return (
    <div className={styles.header}>
      <div>
        <span className={styles.date}>{day}</span>
        <span className={styles.date}>{date}</span>
      </div>
      <div>
        <span className={styles.time}>{time}</span>
        <span className={styles.time}>{amPm}</span>
      </div>
    </div>
  );
};

export default Header;
