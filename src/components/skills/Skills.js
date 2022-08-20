import React from 'react'
import './skills.css';
// photos importing
import ReactJS from '../../images/skills/react.svg';
import Html from '../../images/skills/html.svg';
import Linux from '../../images/skills/linux.svg';
import Postman from '../../images/skills/postman.svg';
import Mongodb from '../../images/skills/mongodb.svg';
import Js from '../../images/skills/js.svg';
import Nodejs from '../../images/skills/nodejs.svg';
import Git from '../../images/skills/git.svg';
import Github from '../../images/skills/github.svg';
import Css from '../../images/skills/css3.svg';
import Tailwind from '../../images/skills/tailwindcss.svg';
import Figma from '../../images/skills/figma.svg';
import Express from '../../images/skills/express.svg';
import Firebase from '../../images/skills/firebase.svg';
import Sass from '../../images/skills/sass.svg';
const Skills = () => {
    return (
        <div className="skills wrapper" id="skills">
            {/* <h1 className="header">Here is what i can do</h1> */}
            <div className="skills-wrapper">
                <div className="skill">
                    <img src={ReactJS} alt="reactjs-icon"/>
                    <h2>React JS</h2>
                </div>
                <div className="skill">
                    <img src={Html} alt="html-icon"/>
                    <h2>HTML</h2>
                </div>
                <div className="skill">
                    <img src={Figma} alt="figma-icon"/>
                    <h2>Figma</h2>
                </div>
                <div className="skill">
                    <img src={Nodejs} alt="nodejs-icon"/>
                    <h2>Node JS</h2>
                </div>
                <div className="skill">
                    <img src={Css} alt="css-icon"/>
                    <h2>CSS</h2>
                </div>
                <div className="skill">
                    <img src={Postman} alt="postman-icon"/>
                    <h2>Postman</h2>
                </div>
                <div className="skill">
                    <img src={Linux} alt="linux-icon"/>
                    <h2>Linux</h2>
                </div>
                <div className="skill">
                    <img src={Git} alt="git-icon"/>
                    <h2>Git</h2>
                </div>
                <div className="skill">
                    <img src={Tailwind} alt="tailwind-icon"/>
                    <h2>Tailwind</h2>
                </div>
                <div className="skill">
                    <img src={Mongodb} alt="mongodb-icon"/>
                    <h2>MongoDB</h2>
                </div>
                <div className="skill">
                    <img src={Github} alt="github-icon"/>
                    <h2>Github</h2>
                </div>
                <div className="skill">
                    <img src={Js} alt="javascript-icon"/>
                    <h2>Javascript</h2>
                </div>
                <div className="skill">
                    <img src={Express} alt="express-js-icon"/>
                    <h2>Express JS</h2>
                </div>
                <div className="skill">
                    <img src={Firebase} alt="firebase-icon"/>
                    <h2>Firebase</h2>
                </div>
                <div className="skill">
                    <img src={Sass} alt="sass-icon"/>
                    <h2>Sass</h2>
                </div>
            </div>
        </div>
    )
}

export default Skills;
