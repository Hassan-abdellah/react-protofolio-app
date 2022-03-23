import React from 'react'
import './about.css';
import Me from '../../images/me1.jpg';
const About = () => {
    return (
        <div className="about wrapper" id="about"> 
            <div className="about-left">
                {/* <div className="about-card bg"></div> */}
                <div className="about-card">
                    <img
                     src={Me} 
                     alt="" className="about-img" />
                </div>
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
