import React, { useContext } from 'react'
import './toggle.css';
import Sun from '../../images/sun.svg';
import Moon from '../../images/moon.svg';
import { ThemeContext } from '../../context';

const Toggle = () => {

    const theme = useContext(ThemeContext);

    const toggleTheme = () => {
        theme.dispatch({ type: "TOGGLE" })
    }
    return (
        <div className="toggle" onClick={toggleTheme}>
            {theme.state.darkMode ? (
                <img src={Sun} alt="sun-img" className="toggle-img" />
            ) : (
                <img src={Moon} alt="moon-img" className="toggle-img moon" />
            )}
        </div>
    )
}

export default Toggle;
