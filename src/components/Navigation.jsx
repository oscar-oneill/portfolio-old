import React, { useRef, useState, useEffect } from 'react';
import '../components/Navigation.css';
import res from '../media/documents/oscaroneill_resume.pdf';
import html from '../media/images/html.png';
import css from '../media/images/css.png';
import javascript from '../media/images/javascript.png';
import reactjs from '../media/images/react.png';
import node from '../media/images/node.png';
import express from '../media/images/express.png';
import git from '../media/images/git.png';
import postgres from '../media/images/postgreSQL.png';

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
                    <img src={html} alt="html-logo"/>
                </li>
                <li>
                    <img src={css} alt="css-logo"/>
                </li>
                <li>
                    <img src={javascript} alt="js-logo"/>
                </li>
                <li>
                    <img id="react" src={reactjs} alt="react-logo"/>
                </li>
                <li>
                    <img src={node} alt="node-logo"/>
                </li>
                <li>
                    <img src={express} alt="ex-logo"/>
                </li>
                <li>
                    <img src={postgres} alt="psql-logo"/>
                </li>
                <li>
                    <img src={git} alt="git-logo"/>
                </li>
            </ul>

            <div onClick={() => {onClick();}} className="mobile__menu">&#9776;</div>
            <div ref={dropdownRef} className={`blanket ${ isActive ? 'active' : 'inactive' }`}></div>

            <div ref={dropdownRef} className={`nav__items ${ isActive ? 'active' : 'inactive' }`}>
                <div onClick={() => { skillsClick(); }} className="nav__skills nav">
                    <span className="skills">Skills</span>
                </div>

                <div onClick={onClick} className="nav__resume nav">
                    <a href={res}>Resume</a>
                </div>
                
                <div onClick={onClick} className="nav__contact nav">
                    <a href="#contact">Contact Me</a>
                </div>
            </div>

        </div>
    )
}

export default Navigation
