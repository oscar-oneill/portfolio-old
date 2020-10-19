import React, { useRef, useState, useEffect } from 'react';
import '../Navigation/Navigation.css';
import resume from '../Media/documents/oscaroneill_resume.pdf';
import html from '../Media/images/html.png';
import css from '../Media/images/css.png';
import javascript from '../Media/images/javascript.png';
import reactjs from '../Media/images/react.png';
import node from '../Media/images/node.png';
import express from '../Media/images/express.png';
import mongo from '../Media/images/mongodb.png';

const Navigation = () => {
    const dropdownRef = useRef(null);
    const slideRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const [slide, setSlide] = useState(false);
    const onClick = () => setIsActive(!isActive);
    const skillsClick = () => setSlide(!slide);

    useEffect(() => {
        const pageClickEvent = (e) => {
            if (slideRef.current !== null && !slideRef.current.contains(e.target)) {
                setSlide(!slide);
            }
        };

        if (slide) {
            window.addEventListener("click", pageClickEvent);
        };

        return () => {
            window.removeEventListener("click", pageClickEvent);
        };    



    }, [slide])

    return (
        <div className="nav__container">
            <div className="nav__home nav">
                <a href="#home">
                    <svg className="svg" width="111" height="103" viewBox="0 0 111 103" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="*" d="M64.576 41.28L104.896 28.32L110.944 44.448L70.336 57.408L96.256 92.256L82.432 102.624L55.936 66.912L29.44 102.624L15.616 92.256L41.536 57.408L0.928 44.448L6.976 28.32L47.296 41.28V0.0959988H64.576V41.28Z"/>
                    </svg>
                </a>
            </div>

            <ul ref={slideRef} className={`skills__list ${slide ? 'active' : 'inactive' }`}>
                <li>
                    <img src={html} alt=""/>
                </li>
                <li>
                    <img src={css} alt=""/>
                </li>
                <li>
                    <img src={javascript} alt=""/>
                </li>
                <li>
                    <img id="react" src={reactjs} alt=""/>
                </li>
                <li>
                    <img src={node} alt=""/>
                </li>
                <li>
                    <img src={express} alt=""/>
                </li>
                <li>
                    <img src={mongo} alt=""/>
                </li>
            </ul>

            <div onClick={() => {onClick();}} className="mobile__menu">&#9776;</div>
            <div ref={dropdownRef} className={`blanket ${ isActive ? 'active' : 'inactive' }`}></div>

            <div ref={dropdownRef} className={`nav__items ${ isActive ? 'active' : 'inactive' }`}>
                <div onClick={() => { skillsClick(); }} className="nav__skills nav">
                    <span className="skills">Skills</span>
                </div>

                <div onClick={onClick} className="nav__resume nav">
                    <a href={resume}>Resume</a>
                </div>
                
                <div onClick={onClick} className="nav__contact nav">
                    <a href="#contact">Contact Me</a>
                </div>
            </div>

        </div>
    )
}

export default Navigation
