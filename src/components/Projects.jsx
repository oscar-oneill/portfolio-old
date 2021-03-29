import React from 'react'

const Projects = ({title, memo, tech, project, code, website}) => {
    return (
            <div className="portfolio__box">
                <div className="project__container">
                    <div className="project__title">{title}</div>
                    <p className="project__memo">{memo}</p>
                    <p className="project__stack">Technologies Used: <br/> {tech}</p>
                </div>

                <div className="project__display">
                    <div className="image__box">
                        <img className="project__img" src={project} alt={`${title} screenshot`}/>
                    </div>
                    <div className="project__links">
                        <div className="project__btn"><a target="_blank" href={code} rel="noreferrer noopener">Source Code</a></div>
                        <div className="project__btn"><a target="_blank" href={website} rel="noreferrer noopener">Website</a></div>
                    </div>
                </div>
            </div>
    )
}

export default Projects
