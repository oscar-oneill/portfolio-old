import React, { useRef, useState } from 'react';
import '../styles/Navigation.css';
import res from '../media/documents/oscaroneillResume.pdf';

const Navigation = () => {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const onClick = () => setIsActive(!isActive);

    return (
        <div className="nav__container">
            <div className="nav__home nav">
                <a href="/">
                    <svg className="svg" width="111" height="103" viewBox="0 0 111 103" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="*" d="M64.576 41.28L104.896 28.32L110.944 44.448L70.336 57.408L96.256 92.256L82.432 102.624L55.936 66.912L29.44 102.624L15.616 92.256L41.536 57.408L0.928 44.448L6.976 28.32L47.296 41.28V0.0959988H64.576V41.28Z"/>
                    </svg>
                </a>
            </div>

            <div onClick={() => {onClick();}} className="mobile__menu">&#9776;</div>
            <div ref={dropdownRef} className={`blanket ${ isActive ? 'active' : 'inactive' }`}></div>

            <div ref={dropdownRef} className={`nav__items ${ isActive ? 'active' : 'inactive' }`}>
                <div onClick={onClick} className="nav__links nav">
                    <a href="/about">About Me</a>
                </div>

                <div onClick={onClick} className="nav__links nav">
                    <a href="/portfolio">Portfolio</a>
                </div>

                <div onClick={onClick} className="nav__links nav">
                    <a href={res}>Resume</a>
                </div>

                <div onClick={onClick} className="nav__links nav">
                    <a href="/blog">Blog</a>
                </div>

                <div onClick={onClick} className="nav__links nav">
                    <a href="mailto:oscar.oneill@aol.com">Contact</a>
                </div>
            </div>

        </div>
    )
}

export default Navigation
