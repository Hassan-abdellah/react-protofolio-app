import React from 'react'
import { Link } from 'react-scroll';
import './cta.css';
const CTA = ({ nav,isModal,setIsModal }) => {
    return (
        <section className="cta-buttons">
            {!nav && (
                <Link spy={true} to="work" className='cta-btn cta-btn-outline' smooth={true} offset={-10} duration={500}>
                    My Work
                </Link>
            )}
            <button className='cta-btn cta-btn-bg' onClick={() => setIsModal(true)}>
                Contact Me
            </button>
        </section>
    )
}

export default CTA