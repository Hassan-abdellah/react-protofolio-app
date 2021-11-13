import React from 'react'
import './nav.css';
import Logo from '../../images/logo.png';
import {Link, animateScroll as scroll} from 'react-scroll';
import Toggle from '../toggle/Toggle';
const Nav = () => {
    return (
        <div className="nav">
            <div className="logo">
                <img src={Logo} alt="logo" className="logo-img" />
            </div>
            <ul className="nav-list">
                <li className="list-item">
                    <Link activeClass="active" 
                       spy={true} to="into" smooth={true}
                    duration={500}>Intro</Link>
                </li>
                <li className="list-item">
                    <Link activeClass="active" 
                       spy={true} to="about" smooth={true}
                    duration={500}>About</Link>
                </li>
                <li className="list-item">
                    <Link activeClass="active" 
                       spy={true} to="skills" smooth={true}
                    duration={500}>Skills</Link>
                </li>
                <li className="list-item">
                    <Link activeClass="active" 
                       spy={true} to="work" smooth={true}
                    duration={500}>Work</Link>
                </li>
                <li className="list-item">
                    <Link activeClass="active" 
                       spy={true} to="contact" smooth={true}
                    duration={500}>Contact Me</Link>
                </li>
            </ul>
            <Toggle/>
        </div>
    )
}

export default Nav;
