import React from 'react'
import './intro.css';
import Me from '../../images/me.jpg'
import ScrollMouse from '../scrollmouse/ScrollMouse';
const Intro = () => {
  return (
    <div className="intro-container wrapper" id="intro">
      <div className="intro-left">
        <div className="intro-left-wrapper">
          <h2>Hello, My Name is</h2>
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
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services and online stores.
          </p>
        </div>
        <ScrollMouse />
      </div>
      <div className="intro-right">
        <img src={Me} alt="man" className="intro-img" />
      </div>
    </div>
  )
}

export default Intro;
