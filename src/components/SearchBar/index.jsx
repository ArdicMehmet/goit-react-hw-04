import React from "react";
import { Formik, Field, Form } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import * as Yup from "yup";
import styles from "./searchBar.module.css";
const SearchBar = () => {
  return (
    <header className={styles.container}>
      <Formik
        initialValues={{ searchText: "" }}
        validationSchema={Yup.object({
          searchText: Yup.string().required("Required"),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          alert(JSON.stringify(values.searchText));
          resetForm();
          setSubmitting(false);
        }}
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
    </header>
  );
};

export default SearchBar;
