import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import EarthSVG from "../../components/EarthSvg/EarthSVG";

import "./contact.css";

const ContactSection = () => {
  return (
    <section id="contact" className="fluid">
      <div className="contact-container wrapper">
        <div className="contact-left">
          <div className="contact-left-wrapper">
            <h2>
              Contact Me
              <span role="img" aria-label="jsx-a11y/accessible-emoji">
                🤝
              </span>
            </h2>
            <ContactForm />
          </div>
        </div>
        <div className="contact-right">
          <EarthSVG />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
