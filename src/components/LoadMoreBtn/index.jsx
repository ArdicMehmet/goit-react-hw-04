import React from "react";
import styles from "./loadMoreBtn.module.css";
const LoadMoreBtn = ({ text, onClick }) => {
  return (
    <div className={styles.container}>
      <button className={styles.loadBtn} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default LoadMoreBtn;
