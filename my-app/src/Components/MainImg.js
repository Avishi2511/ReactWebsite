import "./MainImgStyles.css";
import React from 'react'
import IntroImg from "../images/intro-bg.jpg"
import {Link} from "react-router-dom";

const MainImg = () => {
  return (
    <div className="mainImg">
        <div className="mask">
            <img className="intro-img" src={IntroImg} alt="intro-img"/>
        </div>
        <div className="content">
            <p>Hey!! Curious about the world of finances?? You've come to the right place</p>
            <h1>FinWeb</h1>
            <div>
                <Link to={"/Project"} className="btn">Sign Up</Link>
                <Link to={"/Contact"} className="btn btn-light">Log In</Link>
            </div>
        </div>
    </div>
  ) 
}

export default MainImg