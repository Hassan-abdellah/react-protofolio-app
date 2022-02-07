import React from 'react'
import './scrollBtn.css';
import {animateScroll as scroll} from 'react-scroll';
const ScrollToTop = ({scrollBtn}) => {
    return (
        <button className={ scrollBtn ? "scrollBtn show" : "scrollBtn"}
         onClick={() => scroll.scrollToTop()}>
            <i className="fas fa-chevron-up"></i>
        </button>
    )
}

export default ScrollToTop;
