//Write rafce
import React from 'react'
import Navbar from "../Components/Navbar.js"
import Footer from "../Components/Footer.js"
import MainImg2 from "../Components/MainImg2.js"
import FinancialCalculator from "../Components/Form.js"
import image from '../images/basicterms1.jpg'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <MainImg2 heading="FINANCIAL CALCULATOR " text=" " imgsrc={image}/>
      <FinancialCalculator />
      <Footer />
    </div>
  )
}

export default Contact