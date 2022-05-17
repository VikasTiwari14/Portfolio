import React,{useState, useEffect} from 'react'
import "./Services.css"
import frontend from "../../Images/frontend.jpg";
import backend from "../../Images/backend.jpg";
import blockchain from "../../Images/blockchain.png";
import Aos from "aos"

const Services = () => {
    useEffect(() => {
        Aos.init({duration : 2000})
    },[])
  return (
    <div id="Services">
        <div className='ServicesTop'>
            <div className='Text-5 Highlighted'>What I do</div>
            <div className='Text-4'>My Services</div>
        </div>
        <div className='ServicesDown'>
            <div className='ServiceCard'>
                <div className='ImageBox'>
                    <img src={frontend} className="CardImage" />
                    <div className='Text-1'>Frontend Development</div>
                </div>
                <div className='Content'>
                    <div className='Text-6'>Being a front-end web developer, I have experience in building complex, innovative, responsive, and user-centric solutions. My interfaces are designed with close attention to detail and look great.</div>
                </div>
            </div>
            <div className='ServiceCard'>
                <div className='ImageBox'>
                    <img src={backend} className="CardImage" />
                    <div className='Text-1'>Backend Development</div>
                </div>
                <div className='Content'>
                    <div className='Text-6'>My back-end development services are not just about making a server, application, and database communicate with each other. It's about building a product that works seamlessly and meet market needs.</div>
                </div>
            </div>
            <div className='ServiceCard'>
                <div className='ImageBox'>
                    <img src={blockchain} className="CardImage" />
                    <div className='Text-1'>Blockchain Development</div>
                </div>
                <div className='Content'>
                    <div className='Text-6'>Blockchain development services help create decentralized blockchain networks that provide increased traceability and security of data and transaction.</div>
                </div>
            </div>
        </div>
        <div className='ServicesDownMobile'>
            <div className='ServiceCard'>
                <div className='ImageBox'>
                    <img src={frontend} className="CardImage" />
                    <div className='Text-1'>Frontend Development</div>
                </div>
                <div className='Content'>
                    <div className='Text-6'>Being a front-end web developer, I have experience in building complex, innovative, responsive, and user-centric solutions. My interfaces are designed with close attention to detail and look great.</div>
                </div>
            </div>
            <div className='ServiceCard'>
                <div className='ImageBox'>
                    <img src={backend} className="CardImage" />
                    <div className='Text-1'>Backend Development</div>
                </div>
                <div className='Content'>
                    <div className='Text-6'>My back-end development services are not just about making a server, application, and database communicate with each other. It's about building a product that works seamlessly and meet market needs.</div>
                </div>
            </div>
            <div className='ServiceCard'>
                <div className='ImageBox'>
                    <img src={blockchain} className="CardImage" />
                    <div className='Text-1'>Blockchain Development</div>
                </div>
                <div className='Content'>
                    <div className='Text-6'>Blockchain development services help create decentralized blockchain networks that provide increased traceability and security of data and transaction.</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services