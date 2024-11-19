import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import Loader from "./components/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn";
import ImageGallery from "./components/ImageGallery";
import ImageModal from "./components/ImageModal";
import axios from "axios";
import { UNSPLASH_BASE_URL, ACCESS_KEY } from "./config";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState({ src: "", alt: "" });
  const [searchQuery, setSearchQuery] = useState({ searchTerm: "", page: 1 });
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const fetchImages = async (text, searchType, page) => {
    setIsLoading(true);
    const response = await axios(
      `${UNSPLASH_BASE_URL}/search/${searchType}/?client_id=${ACCESS_KEY}&query=${text}&page=${page}`
    );
    setIsLoading(false);
    if (response.data.total === 0) {
      onError("The images you were looking for were not found.");
      setImages([]);
      setSearchQuery({ searchTerm: "", page: 1 });
    } else {
      if (page > 1) {
        setImages((prev) => [...prev, ...response.data.results]);
        setSearchQuery((prev) => ({ ...prev, page: page }));
      } else {
        setImages(response.data.results);
        setSearchQuery({ searchTerm: text, page: 1 });
      }
    }
  };
  function openModal(image) {
    setCurrentImage({ src: image.src, alt: image.alt });
    setModalIsOpen(true);
  }
  function onError(text) {
    setErrorMessage(text);
    setIsError(true);
    setTimeout(() => {
      setIsError(false);
    }, 2000);
  }
  return (
    <>
      <header>
        <SearchBar fetchImages={fetchImages} onError={onError} />
      </header>
      <main>
        <ImageGallery openModal={openModal} images={images} />
      </main>
      <Loader isLoading={isLoading} />
      {images.length > 0 && (
        <LoadMoreBtn
          text="Load More"
          searchQuery={searchQuery}
          fetchImages={fetchImages}
        />
      )}
      <ImageModal
        isOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        currentImage={currentImage}
      />
      {isError && <ErrorMessage msg={errorMessage} />}
    </>
  );
}

export default App;
