import React from 'react'
import "./App.css"
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Services from './Components/Services/Services'
import Skills from './Components/Skills/Skills'
import { Button } from '@material-ui/core';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {BsFillArrowUpSquareFill} from "react-icons/bs";


const App = () => {
  return (
    <div className='App'>
        <Navbar />
        <Home />
        <About />
        <Services />
        <Skills />
        <Contact />
        <a href='#' className='topButtonAnchor'><BsFillArrowUpSquareFill className='TopBtn' /></a>
    </div>
  )
}

export default App