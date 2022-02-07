import React from 'react'
import './social.css';

// social icons photos importing 
import Linkedin from '../../images/social/linkedin.svg';
import Github from '../../images/social/github.svg';
import Codepen from '../../images/social/codepen.svg';
import Twitter from '../../images/social/twitter.svg';

const Social = () => {
    return (
        <div className="social-icons">
                <a href="https://www.linkedin.com/in/hassan-abdellah-94751b101/" target="_blank" rel="noreferrer">
                    <img src={Linkedin} alt="linkedin-icon" className="social-icon"/>
                    <span>LinkedIn</span>
                </a>  
                <a href="https://github.com/Hassan-abdellah" target="_blank" rel="noreferrer">
                    <img src={Github} alt="github-icon" className="social-icon"/>
                    <span>Github</span>
                </a>
                <a href="https://codepen.io/HAbdellah" target="_blank" rel="noreferrer">
                    <img src={Codepen} alt="code-icon" className="social-icon"/>
                    <span>CodePen</span>
                </a> 
                <a href="https://twitter.com/hassanabdellah6" target="_blank" rel="noreferrer">
                    <img src={Twitter} alt="twitter-icon" className="social-icon"/>
                    <span>Twitter</span>
                </a> 
        </div>
    )
}

export default Social;
