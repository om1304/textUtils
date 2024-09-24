import "./App.css";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode function
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  if(darkMode) {
    document.querySelector('body').style.backgroundColor = '#212529';
  } else {
    document.querySelector('body').style.backgroundColor = 'white';
  }

  return (
    <Router>
      <div className={darkMode ? "bg-dark text-light" : "bg-white text-dark"}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <div className="container my-4">
          <Routes>
            <Route path="/about" element={<About darkMode={darkMode}/>} />
            <Route path="/" element={<TextForm heading="Enter the text to analyze" darkMode={darkMode} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
