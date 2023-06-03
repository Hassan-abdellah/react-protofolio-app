import React, { useState, useRef } from "react";

import Spinner from "../../images/spinner.gif";
import emailjs from "emailjs-com";
import { toast } from "react-hot-toast";

import "./contactForm.css";
const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const formRef = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const result = await emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_USER_ID
      );

      if (result) {
        setIsLoading(false);
        setName("");
        setEmail("");
        setMessage("");
        toast.success("Message Sent Successfully");
        console.log(result.text);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something Went Wrong!,please Try Again");
    }
  };

  return (
    <form ref={formRef} className="contact-form" onSubmit={sendEmail}>
      <div className="input-container">
        <input
          type="text"
          id="userName"
          name="user_name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="userName">
          {" "}
          <span>Name:</span>{" "}
        </label>
      </div>

      <div className="input-container">
        <input
          type="email"
          id="userEmail"
          name="user_email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="userEmail">
          {" "}
          <span>Email:</span>{" "}
        </label>
      </div>
      <div className="input-container">
        <textarea
          id="userMessage"
          name="message"
          rows="5"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <label htmlFor="userMessage" style={{ bottom: "7px" }}>
          {" "}
          <span>Message:</span>{" "}
        </label>
      </div>
      <button className="form-btn" type="submit">
        {isLoading && <img src={Spinner} alt="spinner-gif" />}
        Send
      </button>
    </form>
  );
};

export default ContactForm;
