import React from "react";
import Modal from "react-modal";
import styles from "./imageModal.module.css";
Modal.setAppElement(document.getElementById("root"));
const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.8)", // Siyah arka plan, 0.8 opaklık
  },
};
const ImageModal = ({ isOpen, setModalIsOpen, currentImage }) => {
  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }
  function closeModal() {
    setModalIsOpen(false);
  }
  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      contentLabel="Image Modal"
      className={styles.modalContainer}
      style={customStyles}
    >
      <img
        className={styles.modalImage}
        src={currentImage.src}
        alt={currentImage.alt}
      />
    </Modal>
  );
};

export default ImageModal;
