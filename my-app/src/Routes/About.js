//Write rafce
import React from 'react'
import Navbar from "../Components/Navbar.js"
import Footer from "../Components/Footer.js"
import MainImg2 from '../Components/MainImg2.js'
import Recs from '../Components/Recs.js'
import image from '../images/recs1.jpg'

const About = () => {
  return (
    <div> 
      <Navbar />
      <MainImg2 heading="RECOMMENDATIONS " text="Get some of the best recommendations for books, movies and series to fuel your financial mindset" 
      imgsrc={image} />
      <Recs/>
      <Footer />
    </div>
  )
}

export default About