import React from 'react'
import './skills.css';
import Slider from '../slider/Slider';
const Skills = () => {
    return (
        <div className="skills" id="skills">
            <h1 className="header">Here is what i can do</h1>
            <div className="skills-wrapper">
                <div className="skill">
                    <div className="skill-info">
                        <div className="skill-name">HTML5</div>
                        <div className="skill-percent">80%</div>
                    </div>
                    <div className="skill-meter">
                        <div className="inner" style={{width: "80%"}}></div>
                    </div>
                </div>
                <div className="skill">
                    <div className="skill-info">
                        <div className="skill-name">CSS3</div>
                        <div className="skill-percent">80%</div>
                    </div>
                    <div className="skill-meter">
                        <div className="inner" style={{width: "80%"}} ></div>
                    </div>
                </div>
                <div className="skill">
                    <div className="skill-info">
                        <div className="skill-name">Tailwind CSS</div>
                        <div className="skill-percent">80%</div>
                    </div>
                    <div className="skill-meter">
                        <div className="inner" style={{width: "80%"}}></div>
                    </div>
                </div>
                <div className="skill">
                    <div className="skill-info">
                        <div className="skill-name">Javascript</div>
                        <div className="skill-percent">70%</div>
                    </div>
                    <div className="skill-meter">
                        <div className="inner" style={{width:"70%"}}></div>
                    </div>
                </div>
                <div className="skill">
                    <div className="skill-info">
                        <div className="skill-name">React JS</div>
                        <div className="skill-percent">90%</div>
                    </div>
                    <div className="skill-meter">
                        <div className="inner" style={{width:"90%"}}></div>
                    </div>
                </div>
                <div className="skill">
                    <div className="skill-info">
                        <div className="skill-name">Node JS</div>
                        <div className="skill-percent">70%</div>
                    </div>
                    <div className="skill-meter">
                        <div className="inner" style={{width: "70%"}}></div>
                    </div>
                </div>
                <div className="skill">
                    <div className="skill-info">
                        <div className="skill-name">Mongo DB</div>
                        <div className="skill-percent">60%</div>
                    </div>
                    <div className="skill-meter">
                        <div className="inner" style={{width: "60%"}}></div>
                    </div>
                </div>
                {/* <div className="skill">
                    <div className="skill-info">
                        <div className="skill-name">Socket io</div>
                        <div className="skill-percent">50%</div>
                    </div>
                    <div className="skill-meter">
                        <div className="inner" style={{width: "50%"}}></div>
                    </div>
                </div> */}
                <div className="skill">
                    <div className="skill-info">
                        <div className="skill-name">Linux OS</div>
                        <div className="skill-percent">80%</div>
                    </div>
                    <div className="skill-meter">
                        <div className="inner" style={{width: "80%"}}></div>
                    </div>
                </div>
            </div>
            <div className="rest">
                <Slider/>
            </div>
        </div>
    )
}

export default Skills;
