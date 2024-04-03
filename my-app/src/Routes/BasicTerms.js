//Write rafce
import React from 'react'
import Navbar from "../Components/Navbar.js"
import Footer from "../Components/Footer.js"
import MainImg2 from '../Components/MainImg2.js'
import Work from "../Components/Work.js"

const BasicTerms = () => {
  return (
    <div>
      <Navbar />
      <MainImg2 heading="BASIC TERMS." text="Some basic terms" imgsrc = "https://static.vecteezy.com/system/resources/thumbnails/007/984/249/small/stock-market-or-forex-trading-graph-in-graphic-concept-suitable-for-financial-investment-or-economic-trends-business-idea-and-all-art-work-design-abstract-finance-background-illustration-vector.jpg"/>
      <Work />
      <Footer />
    </div>
  )
}

export default BasicTerms