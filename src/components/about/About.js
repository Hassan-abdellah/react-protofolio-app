import React from 'react'
import './about.css';
import Me from '../../images/me1.jpg';
const About = () => {
    return (
        <div className="about" id="about"> 
            <div className="about-left">
                <div className="about-card bg"></div>
                <div className="about-card">
                    {/* <img
                     src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                     alt="" className="about-img" /> */}
                    <img
                     src={Me} 
                     alt="" className="about-img" />
                </div>
            </div>
            <div className="about-right">
                <h1 className="about-title">About Me</h1>
                <p className="about-subtitle">
                    It is a long established fact that a reader will be distracted by the
                    readable content.
                </p>
                <p className="about-desc">
                    A Communication Engineer love coding, passionate to show my abilities of work and shipping a real world products
                    or apps for the end users to make their lifes much easy and much funny. 
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
