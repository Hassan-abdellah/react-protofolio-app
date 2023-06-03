import React from "react";
import { Link } from "react-scroll";
import "./cta.css";
const CTA = ({ nav, isModal, setIsModal }) => {
  return (
    <section className="cta-buttons">
      {!nav && (
        <Link
          spy={true}
          to="work"
          className="cta-btn cta-btn-bg"
          smooth={true}
          offset={-10}
          duration={500}
          data-title="My Work"
        >
          My Work
        </Link>
      )}
      <Link
        className="cta-btn cta-btn-underline"
        spy={true}
        to="contact"
        smooth={true}
        offset={-10}
        duration={500}
      >
        <span>Contact Me</span>
      </Link>
    </section>
  );
};

export default CTA;
