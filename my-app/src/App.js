import React from "react";
import './index.css';
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import About from "./Routes/About";
import Project from "./Routes/Project";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Contact" element={<Contact />}/>
      <Route path="/About" element={<About />}/>
      <Route path="/Project" element={<Project />}/>
    </Routes>
  );
}

export default App;
