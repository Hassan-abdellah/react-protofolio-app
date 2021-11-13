import React from 'react'
import './social.css';

// social icons photos importing 
import Linkedin from '../../images/social/linkedin.svg';
import Instagram from '../../images/social/instagram.svg';
import Github from '../../images/social/github.svg';
import Codepen from '../../images/social/codepen.svg';
import Twitter from '../../images/social/twitter.svg';

// tooltip package
// import Tippy from '@tippyjs/react';
// import ' .js/dist/tippy.css'; // optional

const Social = () => {
    return (
        <div className="social-icons">
           {/* <Tippy content="LinkedIn"> */}
                <a href="https://www.linkedin.com/in/hassan-abdellah-94751b101/" target="_blank" rel="noreferrer">
                    <img src={Linkedin} alt="linkedin-icon" className="social-icon"/>
                </a> 
            {/* </Tippy>  */}
            {/* <Tippy content="Instagram"> */}
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" style={{display: 'none'}}>
                    <img src={Instagram} alt="instagram-icon" className="social-icon"/>
                </a> 
            {/* </Tippy> */}
            {/* <Tippy content="Github"> */}
                <a href="https://github.com/Hassan-abdellah" target="_blank" rel="noreferrer">
                    <img src={Github} alt="github-icon" className="social-icon"/>
                </a>
            {/* </Tippy> */}
            {/* <Tippy content="Codepen">  */}
                <a href="https://codepen.io/HAbdellah" target="_blank" rel="noreferrer">
                    <img src={Codepen} alt="code-icon" className="social-icon"/>
                </a> 
            {/* </Tippy> */}
            {/* <Tippy content="Twitter"> */}
                <a href="https://twitter.com/hassanabdellah6" target="_blank" rel="noreferrer">
                    <img src={Twitter} alt="twitter-icon" className="social-icon"/>
                </a> 
            {/* </Tippy> */}
        </div>
    )
}

export default Social;
