import React, { useState, useEffect, useRef } from "react";
import "./nav.css";
import { Link } from "react-scroll";
import Social from "../social/Social";
import Toggle from "../toggle/Toggle";
import CTA from "../cta/CTA";
const Nav = ({ isModal, setIsModal }) => {
  const [active, setActive] = useState(false);
  const navRef = useRef();
  useEffect(() => {
    const getClickOutside = (e) => {
      if (active && e.target !== navRef.current) {
        setActive(false);
      }
    };
    document.addEventListener("click", getClickOutside);
    return () => {
      document.removeEventListener("click", getClickOutside);
    };
  }, [active]);
  return (
    <header className="fluid nav-container">
      <nav className="nav wrapper" ref={navRef}>
        <div className="logo">
          <span>H</span>
          <span>A</span>
        </div>
        <Toggle />
        <ul className={active ? "nav-list active" : "nav-list"}>
          <li className="list-item">
            <Link
              activeClass="active"
              spy={true}
              to="intro"
              smooth={true}
              duration={500}
              onClick={() => setActive(false)}
              data-title="Intro"
            >
              <span>Intro</span>
            </Link>
          </li>
          <li className="list-item">
            <Link
              activeClass="active"
              spy={true}
              to="about"
              smooth={true}
              duration={500}
              onClick={() => setActive(false)}
              data-title="About"
            >
              <span>About</span>
            </Link>
          </li>
          <li className="list-item">
            <Link
              activeClass="active"
              spy={true}
              to="skills"
              smooth={true}
              duration={500}
              onClick={() => setActive(false)}
              data-title="Skills"
            >
              <span>Skills</span>
            </Link>
          </li>
          <li className="list-item">
            <Link
              activeClass="active"
              spy={true}
              to="work"
              smooth={true}
              offset={-10}
              duration={500}
              onClick={() => setActive(false)}
              data-title="Work"
            >
              <span>Work</span>
            </Link>
          </li>
          <li>
            <CTA nav="true" isModal={isModal} setIsModal={setIsModal} />
          </li>
          <Social />
        </ul>
        <div
          className={active ? "hammenu active" : "hammenu"}
          onClick={() => setActive(!active)}
        >
          <div className="bars">
            <div className="bar"></div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
