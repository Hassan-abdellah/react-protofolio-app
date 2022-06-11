import React from 'react'
import './about.css';
import Me from '../../images/me1.png';
// social icons photos importing 
import Linkedin from '../../images/social/linkedin.svg';
import Github from '../../images/social/github.svg';
import Codepen from '../../images/social/codepen.svg';
import Twitter from '../../images/social/twitter.svg';

const About = () => {
    return (
        <div className="about wrapper" id="about">
            <div className="about-left">
                <div className="main-img">
                    <img
                        src={Me}
                        alt="" className="about-img" />
                </div>
                <ul className="social_icons">
                    <li>
                        <a href="https://www.linkedin.com/in/hassan-abdellah-94751b101/" target="_blank" rel="noreferrer">
                            <img src={Linkedin} alt="linkedin-icon"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Hassan-abdellah" target="_blank" rel="noreferrer">
                            <img src={Github} alt="github-icon"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://codepen.io/HAbdellah" target="_blank" rel="noreferrer">
                            <img src={Codepen} alt="code-icon"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/hassanabdellah6" target="_blank" rel="noreferrer">
                            <img src={Twitter} alt="twitter-icon"/>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="about-right">
                <h1 className="about-title">About Me</h1>
                <p className="about-desc">
                    A Communication Engineer love coding, passionate to show my abilities of work and shipping a real world products
                    or apps for the end users to make their lifes much easier and much funny.
                </p>
                <a href="/files/cv.pdf" className="download-btn" download="hassan-abdellah-cv.pdf">
                    <i className="fa fa-download"></i>
                    <span>Download CV</span>
                </a>
            </div>
        </div>
    )
}

export default About;
