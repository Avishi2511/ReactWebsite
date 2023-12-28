//Write rafce
import React from 'react'
import Navbar from "../Components/Navbar.js"
import Footer from "../Components/Footer.js"
import MainImg2 from '../Components/MainImg2.js'
import PricingCard from "../Components/PricingCard.js"
import Work from "../Components/Work.js"

const Project = () => {
  return (
    <div>
      <Navbar />
      <MainImg2 heading="PROJECTS." text="Some of my most recent works"/>
      <Work />
      <PricingCard />
      <Footer />
    </div>
  )
}

export default Project