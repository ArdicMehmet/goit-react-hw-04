import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import { Audio } from "react-loader-spinner";
function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <SearchBar />
      {isLoading && (
        <div className="loader">
          <Audio
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
          />
        </div>
      )}
    </>
  );
}

export default App;
