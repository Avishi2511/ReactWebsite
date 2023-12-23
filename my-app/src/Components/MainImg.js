import "./MainImgStyles.css";
import React from 'react'
import IntroImg from "../images/intro-bg.jpg"
import {Link} from "react-router-dom";

const MainImg = () => {
  return (
    <div className="mainImg">
        <div className="mask">
            <img className="intro-img" src={IntroImg} />
        </div>
        <div className="content">
            <p>Hi, I'm a Freelancer</p>
            <h1>React Developer</h1>
            <div>
                <Link to={"/Project"} className="btn">Projects</Link>
                <Link to={"/Contact"} className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default MainImg