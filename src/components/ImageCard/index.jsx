import React from "react";
import styles from "./imageCard.module.css";
const ImageCard = ({ src, alt, openModal }) => {
  const srcSmall = src.small || src.regular || Object.values(src)[0] || "";
  const srcRegular = src.regular || src.small || Object.values(src)[0] || "";
  return (
    <div className={styles.container}>
      <img
        className={styles.cardImage}
        src={srcSmall}
        alt={alt}
        onClick={(_) => openModal({ src: srcRegular, alt: alt })}
      />
    </div>
  );
};

export default ImageCard;
