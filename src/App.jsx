import React from 'react'

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"

import Home from "./website/Home";
import About from "./website/About";
import Contact from "./website/Contact";
import Services from "./website/Services";
import Navbar from './website/Navbar'
import Footer from "./website/Footer";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    
    <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/Service" element={<Services/>} />
        <Route exact path="/contact" element={<Contact/>} />

      </Routes>
      <Footer />
    </>
  )
}

export default App