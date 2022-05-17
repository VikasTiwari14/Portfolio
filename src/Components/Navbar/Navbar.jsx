import React from 'react'
import logo from "../../Images/VikasTiwari.png"
import { Button } from '@material-ui/core'
import "./Navbar.css"
import {GiHamburgerMenu} from "react-icons/gi"

const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className='NavbarLeft'>
            <img src={logo} className="logoImage" />
        </div>
        <div className='NavbarRight'>
            <a href="#Home"><Button variant='contained' className="NavBtn">Home</Button></a>
            <a href="#About"><Button variant='contained' className="NavBtn">About</Button></a>
            <a href="#Services"><Button variant='contained' className="NavBtn">Services</Button></a>
            <a href="#Skills"><Button variant='contained' className="NavBtn">Skills</Button></a>
            <a href="#Contact"><Button variant='contained' className="NavBtn">Contact</Button></a>
        </div>
        {/* <div className='NavbarRightMobile'>
            <GiHamburgerMenu />
        </div> */}
    </div>
  )
}

export default Navbar