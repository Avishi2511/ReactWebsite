import "./FooterStyles.css"
import React from 'react'
import {FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className='footer-container'>
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight: "2rem" }} />
                    <div>
                        <p>ABC Housing Society</p>
                        <p>India</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color:"#fff", marginRight: "2rem" }} />
                    82644xxxxx</h4>
                </div>
                <div>
                    <h4><FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem" }} />
                    avishimittal2004@gmail.com</h4>
                </div>
            </div>

            <div className='right'>
                <h4>About the company</h4>
                <p>My name is Avishi. It's me, Hi!!!, I am the problem its me!!!</p>
                <div className='social'>
                    <FaFacebook size={30} style={{color:"#fff", marginRight: "2rem" }}/>
                    <FaTwitter size={30} style={{color:"#fff", marginRight: "2rem" }}/>
                    <FaLinkedin size={30} style={{color:"#fff", marginRight: "2rem" }}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer