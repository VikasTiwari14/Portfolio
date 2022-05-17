import React,{useState, useEffect} from 'react'
import "./About.css";
import Typewriter from "react-simple-typewriter";
import { Button } from '@material-ui/core';
import "react-simple-typewriter/dist/index.css";
import myImage from "../../Images/myImage.jpg"
import pdf from "../../Images/VikasTiwariResume.pdf"
import Aos from "aos"

const About = () => {
    useEffect(() => {
        Aos.init({duration : 2000})
    },[])
  return (
    <div id='About'>
        <div className='AboutContainer'>
            <div className='AboutLeft'>
                <img src={myImage} className='myImage' />
            </div>

            <div className='AboutRight'>
                <div>
                    <div className='Text-5 Highlighted'>Discover</div>
                    <div className='Text-4'>About Me</div>
                </div>
                <div className='Text-5'>
                    <span className='Highlighted'></span> My Name is Vikas Tiwari and <div className='MobileBreak'><br /></div> I'm a
                    <span className='Highlighted'>
                        <Typewriter
                            words={[' Web Developer', ' MERN Stack', ' Competitive Coder', ' Student']}
                            cursor
                            loop
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                            // onType={(count) => {}}
                        />
                    </span>
                </div>
                <div className='AboutContent'>
                    <span>I am a Full Stack MERN Developer from Madhya Pradesh, India.</span>
                    <span>I am persuing my Bachelor's Degree in Computer Science & Engineering.</span>
                    <span>I develop custom website for Clients & I love seeing the results of my efforts helping the user's experience.</span>
                    <span>I am very passionate & dedicated to my work.</span>
                    <span>I have acquired the skills neccessay to build great & premium websites.</span>
                </div>
                <div className='btnContainer'>
                    <a href={pdf} target="_blank"><Button className='DownloadBtn' variant="contained">Download CV</Button></a>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default About