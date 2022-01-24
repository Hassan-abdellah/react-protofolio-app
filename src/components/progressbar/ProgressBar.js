import React from 'react';
import './progressbar.css';
const ProgressBar = ({width}) => {
    return (
        <div className="progress">
            <div className="bar" style={{width: `${width}%`}}></div>
        </div>
    )
};

export default ProgressBar;
