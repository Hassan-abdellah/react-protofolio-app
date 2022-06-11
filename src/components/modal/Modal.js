import React,{useState,useRef,useEffect} from 'react'
import Spinner from '../../images/spinner.gif';
import emailjs from 'emailjs-com';
import './modal.css';
import { motion } from 'framer-motion';
// import { toast } from 'react-toastify';
const Modal = ({isModal,setIsModal}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const formRef = useRef();
    const modalRef = useRef();
    const sendEmail =  async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try{
            const result = await emailjs.sendForm(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                formRef.current,
                process.env.REACT_APP_USER_ID);
            
            if(result){
                setIsLoading(false);
                setName('');
                setSubject('');
                setEmail('');
                setMessage('');
                // toast.success('Message Sent Successfully');
                console.log(result.text);
            }
        }catch(error){
            console.error(error);
            // toast.error('Something Went Wrong!')
        }
        setIsModal(false);
    }
    useEffect(() => {
        const getClickOutside = (e) => {
            if (isModal && e.target === modalRef.current) {
                setIsModal(false);
            }
        };
        document.addEventListener("click", getClickOutside);
        return () => {
            document.removeEventListener("click", getClickOutside);
        };
    }, [isModal, setIsModal]);
    return (
        <motion.section 
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0,transition:{duration:"0.35"}}}
            transition={{easings:"easeInOut",duration:"0.75"}}
            className="modal-container">
            <button className='close-btn' onClick={() => setIsModal(false)}>X</button>
            <div className="modal-content" ref={modalRef}>
                <motion.form ref={formRef} onSubmit={sendEmail} 
                    initial={{ y:"-100%"}}
                    animate={{ y:"0" }}
                    exit={{ y:"-100%",transition:{duration:"0.3"} }}
                    transition={{ easings: "easeInOut", type: "spring", stiffness: "100", duration: "0.4" }}
                >
                    <h1>Email Me</h1>
                    <div className="input-container">
                        <input type="text" id="userName" name="user_name" value={name} onChange={e => setName(e.target.value)} required />
                        <label htmlFor="userName"> <span>Name:</span> </label>
                    </div>
                    <div className="input-container">
                        <input type="text" id="userSubject" name="user_subject" value={subject} onChange={e => setSubject(e.target.value)} required />
                        <label htmlFor="userSubject"> <span>Subject:</span> </label>
                    </div>
                    <div className="input-container">
                        <input type="email" id="userEmail" name="user_email" value={email} onChange={e => setEmail(e.target.value)} required />
                        <label htmlFor="userEmail"> <span>Email:</span> </label>
                    </div>
                    <div className="input-container">
                        <textarea id="userMessage" name="message" rows="5" value={message} onChange={e => setMessage(e.target.value)} required />
                        <label htmlFor="userMessage" style={{ bottom: "7px" }}> <span>Message:</span> </label>
                    </div>
                    <button className='send-btn' type="submit">
                        {isLoading && <img src={Spinner} alt="spinner-gif" />}
                        Send
                    </button>
                </motion.form>
            </div>
        </motion.section>
    )
}

export default Modal