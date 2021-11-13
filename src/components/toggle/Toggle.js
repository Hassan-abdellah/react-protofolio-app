import React, { useContext } from 'react'
import './toggle.css';
import Sun from '../../images/sun.png';
import Moon from '../../images/moon.png';
import { ThemeContext } from '../../context';
const Toggle = () => {

    const theme = useContext(ThemeContext);

    const toggleTheme = () => {
        theme.dispatch({ type: "TOGGLE"})
    }
    return (
        <div className="toggle" onClick={toggleTheme}>
            <img src={Sun} alt="sun-img" className="toggle-img"/>
            <img src={Moon} alt="moon-img" className="toggle-img"/>
            <div className={theme.state.darkMode ? "toggle-btn dark" :"toggle-btn"}></div>
        </div>
    )
}

export default Toggle;
