import "./NavbarStyles.css"
//Write rafce
import React, {useState} from 'react'
import {Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

/* Portfolio redirects to home page */
const Navbar = () => {

    /*for hamburger menu*/
    const [click, setClick]=useState(false);
    const handleClick= () => setClick(!click);

    /*for change in color of navbar while scrolling*/
    const [color, setColor]=useState(false);
    const changeColor = () =>{
        if(window.scrollY >= 100){ /*100 defines length of scroll*/
            setColor(true);
        }
        else{
            setColor(false);
        }
    }
    window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
        <Link to={"/"}>
            <h1>FinWeb</h1>
        </Link>
        <ul className={click ?"nav-menu active": "nav-menu"} >
            <li>
                <Link to={"/"}>Home</Link>
            </li>
            <li>
                <Link to={"/BasicTerms"}>Basic Terms</Link>
            </li>
            <li>
                <Link to={"/About"}>About</Link>
            </li>
            <li>
                <Link to={"/Contact"}>Calculator</Link>
            </li>
        </ul>
        <div class="hamburger" onClick={handleClick}>
            {/*Use if-else for displaying hamburger and cross*/}
                {click ? (<FaTimes size={20} color="#fff"/>)
                :
                (<FaBars size={20} color="#fff"/>)
                }
        </div>
    </div>
  )
}

export default Navbar