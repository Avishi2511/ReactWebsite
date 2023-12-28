import "./AboutContentStyles.css"

import React from 'react'
import {Link } from "react-router-dom"
import react1 from "../images/react1.jpg"
import project4 from "../images/project4.png" 

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who am I?</h1>
            <p>Blah blah blah</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={react1} className="img"></img>
                </div>
                <div className="image-stack bottom">
                    <img src={project4} className="img"></img>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent