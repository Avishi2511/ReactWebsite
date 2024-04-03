import React from "react";
import './index.css';
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import About from "./Routes/About";
import BasicTerms from "./Routes/BasicTerms";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Contact" element={<Contact />}/>
      <Route path="/About" element={<About />}/>
      <Route path="/BasicTerms" element={<BasicTerms />}/>
    </Routes>
  );
}

export default App;
