import React, { useEffect, useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../Context/AppContext'
import '../styles/Intro.css';
import resume from '../media/documents/oscaroneillResume.pdf';

const Intro = () => {
    const introNavInnerRef = useRef()
    const { setIntroNavData } = useContext(AppContext)

    useEffect(() => {
        const { scrollTop, scrollHeight, clientHeight, offsetTop } = introNavInnerRef.current;

        setIntroNavData({
            clientHeight: clientHeight,
            scrollTop: scrollTop,
            scrollHeight: scrollHeight,
            offsetTop: offsetTop
        })

    }, [introNavInnerRef])

    return (
        <div className="intro__container">
            <div className="intro__data">
                <p id="intro__text">I'm Oscar O'Neill. <br/> Software Engineer <br/> from New York.</p>
                <ul ref={introNavInnerRef}>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href={resume}>Resume</a></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="mailto:oscaroneill@email.com">Contact</Link></li>
                </ul>    
            </div>
        </div>
    )
}

export default Intro
