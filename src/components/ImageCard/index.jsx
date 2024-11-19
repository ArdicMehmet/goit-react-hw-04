import React from "react";
import styles from "./imageCard.module.css";
const ImageCard = ({ src, alt, openModal }) => {
  return (
    <div className={styles.container}>
      <img
        className={styles.cardImage}
        src={src.small}
        alt={alt}
        onClick={(_) => openModal({ src: src.regular, alt: alt })}
      />
    </div>
  );
};

export default ImageCard;
