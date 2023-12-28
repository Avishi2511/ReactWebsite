//Write rafce
import React from 'react'
import Navbar from "../Components/Navbar.js"
import Footer from "../Components/Footer.js"
import MainImg2 from "../Components/MainImg2.js"
import Form from "../Components/Form.js"

const Contact = () => {
  return (
    <div>
      <Navbar />
      <MainImg2 heading="CONTACT. " text="Lets have a chat" />
      <Form />
      <Footer />
    </div>
  )
}

export default Contact