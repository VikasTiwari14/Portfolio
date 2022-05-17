import React,{useState} from 'react'
import ReactModal from 'react-modal'
import { FaTimes } from 'react-icons/fa'
import "./HireModal.css"
import { Button, TextField } from '@material-ui/core'
import ShowAlert from '../Alert/Alert'
import emailjs from "emailjs-com"
// import { Button } from 'bootstrap'

const HireModal = ({show, setShow}) => {
    const [company, setCompany] = useState("");
    const [website, setWebsite] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [stipend, setStipend] = useState("");
    const [email, setEmail] = useState("");
    const [resStatus, setResStatus] = useState(false);
    const [open, setOpen] = useState(false);
    const [resMessage, setResMessage] = useState("")
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(company == "" || email == "" || title == "" || description == "" || stipend == ""){
            setOpen(true);
            setResStatus(false);
            setResMessage("Please Fill all the Fields");
            // alert("")
            return;
        }

        setLoading(true);
        emailjs.sendForm('service_65md60g', 'template_vsz6ye7', e.target, 'yUWFmzGlcmwOLQyWj')
        .then((response) => {
            setOpen(true);
            setResStatus(true);
            setResMessage("Your Message Sent Successfully");
            setShow(false);
            setLoading(false);
            setCompany("");
            setDescription("");
            setWebsite("");
            setEmail("");
            setStipend("");
            setTitle("");
        })
        .catch((err) => {
            setOpen(true);
            setResStatus(false);
            setLoading(false);
            setResMessage("Your Message Not Sent");
        })
    }

    return (
        <ReactModal isOpen={show} portalClassName="ReactModal">
            <FaTimes onClick={() => setShow(false)} className="CloseIcon" />
            {open&&<ShowAlert resMessage={resMessage} resSuccess={resStatus} open={open} setOpen={setOpen} />}
            <form onSubmit={handleSubmit}>
                <div className='ModalHeader'>
                    <h2>Post your jobs for Vikas Tiwari</h2>
                </div>
                <hr />
                <div className='ModalBody'>
                    <div>
                        <label>Company Name<span className='redText'>*</span></label>
                        <TextField variant='outlined' className='MaterialInput' value={company} onChange={(e) => setCompany(e.target.value)} name="company" />
                    </div>
                    <div>
                        <label>Company Website</label>
                        <TextField variant='outlined' className='MaterialInput' value={website} onChange={(e) => setWebsite(e.target.value)} name="website" />
                    </div>
                    <div>
                        <label>Email<span className='redText'>*</span></label>
                        <TextField variant='outlined' className='MaterialInput' value={email} onChange={(e) => setEmail(e.target.value)} name="email" />
                    </div>
                    <div>
                        <label>Job Title<span className='redText'>*</span></label>
                        <TextField variant='outlined' className='MaterialInput' value={title} onChange={(e) => setTitle(e.target.value)} name="title" />
                    </div>
                    <div>
                        <label>Job Description<span className='redText'>*</span></label>
                        <TextField variant='outlined' className='MaterialInput' value={description} onChange={(e) => setDescription(e.target.value)} multiline minRows={3} name="description" />
                    </div>
                    <div>
                        <label>Offered Stipend<span className='redText'>*</span></label>
                        <TextField variant='outlined' className='MaterialInput' value={stipend} onChange={(e) => setStipend(e.target.value)} name="stipend" />
                    </div>
                </div>
                <hr />
                <div className='ModalFooter'>
                    <Button variant='contained' className='DownloadBtn' type="submit">Submit</Button>
                </div>
            </form>
        </ReactModal>
    )
}

export default HireModal