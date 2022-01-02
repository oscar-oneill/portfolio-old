import React, { useEffect, useRef, useState, useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import { Link } from 'react-router-dom'
import '../styles/Navigation.css'
import res from '../media/documents/oscaroneillResume.pdf'
import scrollHeight from '../Hooks/Size'
import { navigationScheme } from '../Hooks/NavigationScheme'

const Navigation = () => {
    const dropdownRef = useRef(null)
    const navigationRef = useRef()
    const [isActive, setIsActive] = useState(false)
    const onClick = () => setIsActive(!isActive)
    const { setNavigationData, introNavData } = useContext(AppContext)
    const size = scrollHeight()

    useEffect(() => {
        const { scrollTop, scrollHeight, clientHeight, offsetTop } = navigationRef.current;

        setNavigationData({
            clientHeight: clientHeight,
            scrollTop: scrollTop,
            scrollHeight: scrollHeight,
            offsetTop: offsetTop
        })

    }, [navigationRef])

    const scrollEvent = () => {
        if (size.scrollY < (introNavData.offsetTop + introNavData.clientHeight)) {
            return 0

        } else if (size.scrollY > (introNavData.offsetTop + introNavData.clientHeight)) {
            return 1

        } 
    }

    useEffect(() => {
        scrollEvent()
    }, [size])

    const scrollLocation = scrollEvent();

    const navigationStyle = () => {
        if (scrollLocation === 0) {
            return navigationScheme.default

        } else if (scrollLocation === 1) {
            return navigationScheme.intro

        }
    }

    return (
        <div 
            style={navigationStyle()} 
            className="nav__container" 
            ref={navigationRef}
        >
            <div className="nav__home nav">
                <span><a href="/">Oscar O'Neill</a></span>
            </div>

            <div onClick={() => {onClick();}} className="mobile__menu">&#9776;</div>
            <div ref={dropdownRef} className={`blanket ${ isActive ? 'active' : 'inactive' }`}></div>

            <div ref={dropdownRef} className={`nav__items ${ isActive ? 'active' : 'inactive' }`}>
                <div onClick={onClick} className="nav__links nav">
                    <a href="#about">About Me</a>
                </div>

                <div onClick={onClick} className="nav__links nav">
                    <a href="#portfolio">Portfolio</a>
                </div>

                <div onClick={onClick} className="nav__links nav">
                    <a href={res}>Resume</a>
                </div>

                <div onClick={onClick} className="nav__links nav">
                    <Link to="/blog">Blog</Link>
                </div>

                <div onClick={onClick} className="nav__links nav">
                    <a href="mailto:oscaroneill@email.com">Contact</a>
                </div>
            </div>
        </div>
    )
}

export default Navigation
