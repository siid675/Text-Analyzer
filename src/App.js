import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import OurServices from "./components/OurServices";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("warning");
  // const [name, setName]=useState();

  //     setName(prompt("enter name"));

  const toggleMode = () => {
    if (mode === "warning") {
      setMode("dark");
      document.body.style.backgroundColor = "gray";
      document.title = "https//Siid~Tech-Dark_Mode";
    } else {
      setMode("warning");
      document.body.style.backgroundColor = "white";
      document.title = "https//Siid~Tech-Light_Mode";
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="Siid~Tech"
          about="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/OurServices" element={<OurServices />} />
            <Route
              path="/"
              element={
                <TextForm heading="Enter your text to Analyze" mode={mode} />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
