import React, { useState } from "react";
import { ReactComponent as ClipboardIcon } from "./clipboard.svg";
import "bootstrap/dist/css/bootstrap.min.css";

export default function TextForm({ heading, darkMode }) {
  const [text, setText] = useState("");
  const [alertVisible, setAlertVisible] = useState(false);

  // Handle text changes
  const handleChange = (event) => {
    setText(event.target.value);
  };

  // Handle uppercase conversion
  const handleUpClick = () => {
    setText(text.toUpperCase());
  };

  // Handle lowercase conversion
  const handleLowClick = () => {
    setText(text.toLowerCase());
  };

  // Handle clearing text
  const handleClearClick = () => {
    setText("");
  };

  // Handle copying text to clipboard
  const handleCopyClick = () => {

    navigator.clipboard.writeText(text);
    setAlertVisible(true);

    // Hide the alert after 3 seconds
    setTimeout(() => {
      setAlertVisible(false);
    }, 3000);
  };
  document.title = 'textUtils - Text Utility App'
  return (
    <div className={darkMode ? "bg-dark text-light" : "bg-white text-dark"}>
      <div className={`container my-4 ${darkMode ? "bg-dark text-light" : "bg-white text-dark"}`}>
        {/* Display heading with conditional text color */}
        <h3 className={darkMode ? "text-light" : "text-dark"}>{heading}</h3>

        {/* Textarea for input */}
        <textarea
          className={`form-control ${darkMode ? "bg-dark text-light" : "bg-light text-dark"}`}
          value={text}
          onChange={handleChange}
          rows="8"
        ></textarea>

        {/* Buttons to manipulate text */}
        <button className={`btn btn-primary my-2 ${!text ? "disabled" : ''}`} onClick={handleUpClick}>
          To UpperCase
        </button>
        <button className={`btn btn-success my-2 mx-1 ${!text ? "disabled" : ''}`} onClick={handleLowClick}>
          To LowerCase
        </button>
        <button className={`btn btn-secondary my-2 mx-1 ${!text ? "disabled" : ''}`} onClick={handleClearClick}>
          Clear Text
        </button>
        <button className={`btn btn-light my-2 mx-1 ${!text ? "disabled" : ''}`} onClick={handleCopyClick}>
          <ClipboardIcon /> Copy
        </button>

        {/* Bootstrap Alert for Success */}
        {alertVisible && (
          <div
            className="alert alert-success alert-dismissible fade show my-3"
            role="alert"
          >
            <strong>Success!</strong> Text copied to clipboard.
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
              onClick={() => setAlertVisible(false)}
            ></button>
          </div>
        )}
      </div>

      {/* Text Summary Section */}
      <div className={`container my-4 ${darkMode ? "bg-dark text-light" : "bg-white text-dark"}`}>
        <h3 className={darkMode ? "text-light" : "text-dark"}>Text Summary</h3>
        <p className={darkMode ? "text-light" : "text-dark"}>
          Text contains {text.split(/\s/).filter((word) => word !== "").length} words and {text.length} characters.
        </p>
        <p className={darkMode ? "text-light" : "text-dark"}>
          It will take you {0.006 * text.length} minutes to read it.
        </p>
      </div>
    </div>
  );
}
