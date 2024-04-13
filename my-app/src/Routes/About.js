//Write rafce
import React from 'react'
import Navbar from "../Components/Navbar.js"
import Footer from "../Components/Footer.js"
import MainImg2 from '../Components/MainImg2.js'
import Recs from '../Components/Recs.js'

const About = () => {
  return (
    <div>
      <Navbar />
      <MainImg2 heading="ABOUT. " text="Im a Front-End Developer" />
      <Recs />
      <Footer />
    </div>
  )
}

export default About