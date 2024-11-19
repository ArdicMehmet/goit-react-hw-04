import React from "react";
import { Formik, Field, Form } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import * as Yup from "yup";
import styles from "./searchBar.module.css";
const SearchBar = ({ fetchImages, onError }) => {
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    if (values.searchText.trim() === "") {
      onError("Search text is required");
    } else {
      fetchImages(values.searchText, "photos", 1);
      resetForm();
    }
    setSubmitting(false);
  };
  return (
    <div className={styles.container}>
      <Formik
        initialValues={{ searchText: "" }}
        validationSchema={Yup.object({
          searchText: Yup.string(),
        })}
        onSubmit={handleSubmit}
      >
        <Form className={styles.formContainer}>
          <div className={styles.formField}>
            <Field
              className={styles.inputText}
              name="searchText"
              type="text"
              placeholder="Search images and photos"
            />
          </div>
          <button className={styles.submitBtn} type="submit">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchBar;
