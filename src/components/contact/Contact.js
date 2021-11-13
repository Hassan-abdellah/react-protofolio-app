import React, {useState,useRef} from 'react'
import './contact.css';
import Phone from '../../images/phone.png';
import Email from '../../images/email.png';
import Address from '../../images/address.png';
import Spinner from '../../images/spinner.gif';
import emailjs from 'emailjs-com';
import Social from '../social/Social';
const Contact = () => {
    const [isSent, setIsSent] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const formRef = useRef();
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
                setIsSent(true);
                setIsLoading(false);
                setName('');
                setSubject('');
                setEmail('');
                setMessage('');
                console.log(result.text);
            }
            setTimeout(() => {
                setIsSent(false);
            },5000);
        }catch(error){
            console.error(error)
        }
    }
    return (
        <div className="contact" id="contact">
            <div className={isSent ? "check-success show" : "check-success"}>
                <i className="fas fa-check fa-2x"></i>
                <span>Your Email Sent Successfully</span>
            </div>
            <div className="contact-bg"></div>
            <div className="contact-wrapper">
                <div className="contact-left">
                    <h1 className="contact-title">
                        Let’s discuss your project
                    </h1>
                    <div className="contact-infos">
                        <div className="contact-info">
                            <img 
                             src={Phone} 
                             alt="phone-icon" className="info-icon" />
                             (+20) 01020849603
                        </div>
                        <div className="contact-info">
                            <img 
                             src={Email} 
                             alt="email-icon" className="info-icon" />
                             hassanabdellah25@gmail.com
                        </div>
                        <div className="contact-info">
                            <img 
                             src={Address} 
                             alt="address-icon" className="info-icon" />
                             Giza, Egypt
                        </div>
                    </div>
                </div>
                <div className="contact-right">
                    <p className="contact-desc">
                        <b>What’s your story?</b> Get in touch. 
                        Always available for freelancing 
                        if the right project comes along me.
                    </p>
                    <h2>You can email me directily from here</h2>
                    <form ref={formRef} onSubmit={sendEmail}>
                        <div className="input-container">
                            <input type="text" id="userName" name="user_name" value={name} onChange={e => setName(e.target.value)} required/>
                            <label htmlFor="userName"> <span>Name:</span> </label>
                        </div>
                        <div className="input-container">
                            <input type="text" id="userSubject" name="user_subject" value={subject} onChange={e => setSubject(e.target.value)} required/>
                            <label htmlFor="userSubject"> <span>Subject:</span> </label>
                        </div>
                        <div className="input-container">
                            <input type="email" id="userEmail" name="user_email" value={email} onChange={e => setEmail(e.target.value)} required/>
                            <label htmlFor="userEmail"> <span>Email:</span> </label>
                        </div>
                        <div className="input-container" style={{width: "100%"}}>
                            <textarea id="userMessage" name="message" rows="5" value={message} onChange={e => setMessage(e.target.value)} required/>
                            <label htmlFor="userMessage" style={{bottom: "7px"}}> <span>Message:</span> </label>
                        </div>
                        <button type="submit">
                             {isLoading && <img src={Spinner} alt="spinner-gif"/>} 
                             Send
                        </button>
                    </form>
                </div>
            </div>
            <Social/>
        </div>
    )
}

export default Contact;
