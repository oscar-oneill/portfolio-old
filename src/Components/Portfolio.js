import React, { useEffect, useContext, useRef } from 'react'
import '../styles/Portfolio.css'
import Projects from './Projects'
import { image } from '../Hooks/Images'
import { AppContext } from '../Context/AppContext'

const Portfolio = () => {
    const portfolioInnerRef = useRef()
    const { setPortfolioData } = useContext(AppContext)

    useEffect(() => {
        const { scrollTop, scrollHeight, clientHeight, offsetTop } = portfolioInnerRef.current;

        setPortfolioData({
            clientHeight: clientHeight,
            scrollTop: scrollTop,
            scrollHeight: scrollHeight,
            offsetTop: offsetTop
        })

    }, [portfolioInnerRef])

    return (
        <div className="portfolio__container" ref={portfolioInnerRef} id="portfolio">

            <Projects
                title='yesterday'
                memo='A place to stream music from the album yesterday'
                project={image.yesterday}
                tech='React'
                code='https://github.com/oscar-oneill/yesterday-redesign'
                website='https://yesterday.netlify.app/'
            />

            <Projects
                title='Splashgram'
                memo='Splashgram is an Instagram styled Unsplash web application'
                project={image.splashgram}
                tech='React, Node, Express, Docker'
                code='https://github.com/oscar-oneill/splashgram'
                website='http://splashgram.xyz/'
            />

            <Projects
                title="Oscar's Blog"
                memo='My Web Development Blog'
                project={image.blog}
                tech='React, Node, Express, MongoDB'
                code='https://github.com/oscar-oneill/portfolio'
                website='https://oscaroneill.xyz/blog'
            />

            <Projects
                title='Retro Tetris'
                memo='Mintbean Hackathon Project for August 2021'
                project={image.tetris}
                tech='React, Styled Components'
                code='https://github.com/oscar-oneill/tetris'
                website='https://retrotetris.vercel.app'
            />

            <Projects
                title='Blackjack'
                memo='Mintbean Hackathon Project for July 2021'
                project={image.blackjack}
                tech='HTML, CSS, JavaScript'
                code='https://github.com/oscar-oneill/blackjack'
                website='https://blackjack21.vercel.app'
            />

            <Projects
                title='Southside Football'
                memo='Tracking the health and gameday status of football players.'
                project={image.southside}
                tech='React, Node, Express, PostgreSQL, JSON Web Token, Docker'
                code='https://github.com/oscar-oneill/southsiderebels'
                website='https://southsiderebels.herokuapp.com/'
            />

            <Projects
                title='Telepath'
                memo='Telepath filters videos & gifs posted to reddit then displays them on screen for redditors to view'
                project={image.telepath}
                tech='HTML, CSS, JavaScript, Node, Express, Snoowrap.js'
                code='https://github.com/oscar-oneill/telepath'
                website='https://telepath.website/'
            />
        </div>
    )
}

export default Portfolio
