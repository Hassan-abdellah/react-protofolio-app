import "./about.css";
import Me from "../../images/me1.png";
// social icons photos importing
import Linkedin from "../../images/social/linkedin.svg";
import Github from "../../images/social/github.svg";
import Codepen from "../../images/social/codepen.svg";
import Twitter from "../../images/social/twitter.svg";

const About = () => {
  return (
    <div className="about wrapper" id="about">
      <div className="about-left">
        <div className="main-img">
          <img src={Me} alt="Hassan Abdellah" className="about-img" />
        </div>
        <ul className="social_icons">
          <li>
            <a
              href="https://www.linkedin.com/in/hassan-abdellah-94751b101/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Linkedin} alt="linkedin-icon" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Hassan-abdellah"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Github} alt="github-icon" />
            </a>
          </li>
          <li>
            <a
              href="https://codepen.io/HAbdellah"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Codepen} alt="code-icon" />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/hassanabdellah6"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Twitter} alt="twitter-icon" />
            </a>
          </li>
        </ul>
      </div>
      <div className="about-right">
        <h1 className="about-title">
          About Me
          <span className="green-line"></span>
        </h1>
        <p className="about-desc">
          I’m a Passionate Front End Developer Currently Working at A Lebanese
          Software Company Called
          <span className="company-name"> Optimal Solutions </span>
          as a React Developer to Develop A TPA System for Medical Insurance
          Company
        </p>
        <a
          href="/files/cv.pdf"
          className="download-btn"
          download="hassan-abdellah-cv.pdf"
        >
          <i className="fa fa-download"></i>
          <span>Download CV</span>
        </a>
      </div>
    </div>
  );
};

export default About;
