import React from "react";
import "./intro.css";
// import Hero from '../../images/hero.jpg'
import Hero from "../../images/freelancer.svg";
import CTA from "../cta/CTA";
const Intro = ({ isModal, setIsModal }) => {
  return (
    <section className="fluid" id="intro">
      <div className="intro-container wrapper">
        <div className="intro-left">
          <div className="intro-left-wrapper">
            <h2>Hello 👋, My Name is</h2>
            <h1>Hassan Abdellah</h1>
            <div className="job-titles">
              <span>I’m</span>
              <div className="job-titles-wrapper">
                <div className="job-title">UI/UX Designer</div>
                <div className="job-title">Web Developer</div>
                <div className="job-title">API Developer</div>
                <div className="job-title">Full Stack</div>
              </div>
            </div>
            <p className="intro-desc">
              Let’s Convert Your new great idea into a real End-User Product,
              I’m Ready!! and Can’t Wait to listen to it
            </p>
            <CTA isModal={isModal} setIsModal={setIsModal} />
          </div>
        </div>
        <div className="intro-right">
          <img src={Hero} alt="man" className="intro-img" />
        </div>
      </div>
    </section>
  );
};

export default Intro;
