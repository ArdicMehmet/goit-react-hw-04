import React from "react";
import styles from "./loadMoreBtn.module.css";
const LoadMoreBtn = ({ text, searchQuery, fetchImages }) => {
  const handleClick = () => {
    fetchImages(searchQuery.searchTerm, "photos", searchQuery.page + 1);
  };
  return (
    <div className={styles.container}>
      <button className={styles.loadBtn} onClick={handleClick}>
        {text}
      </button>
    </div>
  );
};

export default LoadMoreBtn;
