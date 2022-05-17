import React,{useState, useEffect} from 'react'
import Typewriter from "react-simple-typewriter";
import { Button } from '@material-ui/core';
import "react-simple-typewriter/dist/index.css";
import "./Home.css"
import banner from "../../Images/banner.png"
import HireModal from '../HireModal/HireModal';
import Aos from "aos"
import "aos/dist/aos.css"

const Home = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        Aos.init({duration : 2000})
    },[])
  return (
    <div id="Home">
        <HireModal show={show} setShow={setShow} />
        <div data-aos='fade-left' className='HomeLeft'>
            <div className='Text-1'><span className='Highlighted'>Hello,</span> My Name is</div>
            <div className='Text-2'>Vikas Tiwari</div>
            <div className='Text-3'>And I'm a  
                <span className='Highlighted'>
                <Typewriter
                    words={[' Web Developer', ' MERN Stack Developer', ' Competitive Coder', ' Student']}
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
            <Button className='HireBtn' variant="contained" onClick={() => setShow(true)}>Hire Me</Button>
        </div>

        <div className='HomeRight'>
            {/* <img src={banner} className="BannerImg" /> */}
        </div>
    </div>
  )
}

export default Home