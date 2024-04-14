//Write rafce
import React from 'react'
import Navbar from "../Components/Navbar.js"
import Footer from "../Components/Footer.js"
import MainImg2 from '../Components/MainImg2.js'
import Work from "../Components/Work.js"
import image from '../images/bgimg1.jpg'

const BasicTerms = () => {
  return (
    <div>
      <Navbar />
      <MainImg2 heading="BASIC TERMS" text="Some must know terms before u begin" imgsrc = {image}/>
      <Work />
      <Footer />
    </div>
  )
}

export default BasicTerms