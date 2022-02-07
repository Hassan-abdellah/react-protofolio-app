import React, { useState,useEffect,useRef} from 'react'
import './nav.css';
import { Link } from 'react-scroll';
// import Toggle from '../toggle/Toggle';
const Nav = () => {

    const [active, setActive] = useState(false);
    const navRef = useRef();
    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth <= 768) {
                navRef.current.classList.add('no-transition');
            } else {
                navRef.current.classList.remove('no-transition');
            }
        })
    }, []);
    useEffect(() => {
        const getClickOutside = (e) => {
          if (active && e.target!== navRef.current) {
            setActive(false);
          }
        };
        document.addEventListener("click", getClickOutside);
        return () => {
          document.removeEventListener("click", getClickOutside);
        };
      }, [active]);
    return (
        <>
            <div className={active ? 'hammenu active' : 'hammenu'} onClick={() => setActive(!active)}>
                <div className="bars">
                    <div className="bar"></div>
                </div>
            </div>
            <div className={active ? 'nav active' : 'nav'} ref={navRef}>
                <div className="logo">
                    <span>H</span>
                    <span>A</span>
                </div>
                <ul className="nav-list">
                    <li className="list-item">
                        <Link activeClass="active"
                            spy={true} to="intro" smooth={true}
                            duration={500} onClick={() => setActive(false)}>Intro</Link>
                    </li>
                    <li className="list-item">
                        <Link activeClass="active"
                            spy={true} to="about" smooth={true}
                            duration={500} onClick={() => setActive(false)}>About</Link>
                    </li>
                    <li className="list-item">
                        <Link activeClass="active"
                            spy={true} to="skills" smooth={true}
                            duration={500} onClick={() => setActive(false)}>Skills</Link>
                    </li>
                    <li className="list-item">
                        <Link activeClass="active"
                            spy={true} to="work" smooth={true} offset={-10}
                            duration={500} onClick={() => setActive(false)}>Work</Link>
                    </li>
                    <li className="list-item">
                        <Link activeClass="active"
                            spy={true} to="contact" smooth={true}
                            duration={500} onClick={() => setActive(false)}>Contact Me</Link>
                    </li>
                </ul>
                {/* <Toggle/> */}
            </div>
        </>
    )
}

export default Nav;
