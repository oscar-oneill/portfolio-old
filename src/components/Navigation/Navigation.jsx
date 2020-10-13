import React from 'react';
import '../Navigation/Navigation.css';
import resume from '../Media/documents/oscaroneill_resume.pdf';

const Navigation = () => {
    return (
        <div className="nav__container">
            <div className="nav__home nav">
                <a href="#home">
                    <svg className="svg" width="111" height="103" viewBox="0 0 111 103" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="*" d="M64.576 41.28L104.896 28.32L110.944 44.448L70.336 57.408L96.256 92.256L82.432 102.624L55.936 66.912L29.44 102.624L15.616 92.256L41.536 57.408L0.928 44.448L6.976 28.32L47.296 41.28V0.0959988H64.576V41.28Z"/>
                    </svg>
                </a>
            </div>

            <div className="nav__items">
                <div className="nav__skills nav">Skills</div>
                <div className="nav__resume nav">
                    <a href={resume}>Resume</a>
                </div>
                <div className="nav__contact nav">Contact Me</div>
            </div>
        </div>
    )
}

export default Navigation