import React, { useEffect, useContext, useRef } from 'react'
import '../styles/Portfolio.css'
import Projects from './Projects'
import { projects } from '../utils/helpers'
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

    }, [portfolioInnerRef, setPortfolioData])

    return (
        <div className="portfolio__container" ref={portfolioInnerRef} id="portfolio">
            {projects && projects.map((project, i) => {
                return (
                    <Projects
                        key={i}
                        title={project.title}
                        memo={project.memo}
                        project={project.project}
                        tech={project.tech}
                        code={project.code}
                        website={project.website}
                    />
                )
            })}
        </div>
    )
}

export default Portfolio
