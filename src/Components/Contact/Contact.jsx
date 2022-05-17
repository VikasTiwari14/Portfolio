import React,{useState, useEffect} from 'react'
import { Form } from 'react-bootstrap'
import { TextField, Button } from '@material-ui/core'
import "./Contact.css"
import {FaLinkedin, FaGithub, FaFacebookSquare} from "react-icons/fa"
import ShowAlert from '../Alert/Alert'
import emailjs from "emailjs-com"
import Aos from "aos"

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [resStatus, setResStatus] = useState(false);
    const [open, setOpen] = useState(false);
    const [resMessage, setResMessage] = useState("")

    useEffect(() => {
        Aos.init({duration : 2000})
    },[])
    const handleClick = (e) => {
        e.preventDefault();

        if(email == "" || name == "" || message == ""){
            setOpen(true);
            setResStatus(false);
            setResMessage("Please Fill all the Fields");

            return;
        }

        emailjs.sendForm('service_65md60g', 'template_y9tqari', e.target, 'yUWFmzGlcmwOLQyWj')
        .then((response) => {
            setOpen(true);
            setResStatus(true);
            setResMessage("Your Message Sent Successfully");
            setEmail("");
            setName("");
            setMessage("");
        })
        .catch((err) => {
            setOpen(true);
            setResStatus(false);
            setResMessage("Your Message Not Sent");
        })
    }
    return (
    <div id='Contact'>
        {open&&<ShowAlert resMessage={resMessage} resSuccess={resStatus} open={open} setOpen={setOpen} />}
        <div className='ContactTop'>
            <div className='Text-5 Highlighted'>Get in Touch</div>
            <div className='Text-4'>Contact</div>
        </div>

        <div className='ContactDown'>
            <div className='ContactLeft'>
                <div className='Text-6'>I am here to answer any question you have about me. Reach out to me and I will respond as soon as I can.</div>
                <form className='ContactForm' onSubmit={handleClick}>
                    <div className='Row1'>
                        <div>Name</div>
                        <div>Email</div>
                        <TextField variant='outlined' name="name" value={name} onChange={(e) => setName(e.target.value)} className="MaterialInput" />
                        <TextField variant='outlined' name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="MaterialInput" />
                    </div>
                    <div className='Row1Mobile'>
                        <div>Name</div>
                        <TextField variant='outlined' name="name" value={name} onChange={(e) => setName(e.target.value)} className="MaterialInput" />
                        <div>Email</div>
                        <TextField variant='outlined' name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="MaterialInput" />
                    </div>
                    <div className='Row2'>
                        <div>Message</div>
                        <TextField
                            name='message'
                            value={message}
                            multiline
                            rows={3}
                            variant="outlined"
                            className="MaterialInput"
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                    <div className='Row3'>
                        <div></div>
                        <Button variant='contained' className='DownloadBtn' type='submit'>Send</Button>
                    </div>
                </form>
            </div>
            <div className='ContactRight'>
                <div className='DetailContainer'>
                    <div>
                        <div className='Highlighted'>Email</div>
                        <div>tiwarivikas1407@gmail.com</div>
                    </div>
                    <div>
                        <div className='Highlighted'>Phone</div>
                        <div>+91 9826831306</div>
                    </div>
                    <div>
                        <div className='Highlighted'>Address</div>
                        <div>Bhopal, Madhya Pradesh, India</div>
                    </div>
                </div>
                
                <div className='IconContainer'>
                    <a href="https://www.linkedin.com/in/vikas-tiwari-1aa81b18a/" target="_blank"><FaLinkedin className='LinkedIn' /></a>
                    <a href="https://github.com/VikasTiwari14" target="_blank"><FaGithub className='Github' /></a>
                    <a href="https://www.facebook.com/profile.php?id=100014279024801" target="_blank"><FaFacebookSquare className='Facebook' /></a>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Contact