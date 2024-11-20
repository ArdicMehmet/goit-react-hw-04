import React from "react";
import ImageCard from "../ImageCard";
import styles from "./imageGallery.module.css";

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={styles.container}>
      {images.map((image, index) => (
        <li key={index}>
          <ImageCard
            openModal={openModal}
            src={image.urls}
            alt={image.alt_description || "Image"}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
