import React from 'react'
import '../styles/Portfolio.css';
import Navigation from '../components/Navigation';

import html from '../media/images/html.png';
import css from '../media/images/css.png';
import javascript from '../media/images/javascript.png';
import reactjs from '../media/images/react.png';
import node from '../media/images/node.png';
import express from '../media/images/express.png';
// import postgres from '../media/images/postgreSQL.png';

import yesterday from '../media/images/yesterday.png';
import telepath from '../media/images/telepath.png';
import three from '../media/images/three.png';
import splashgram from '../media/images/splashgram.png';
// import southside from '../media/images/southside.png';

const Portfolio = () => {
    return (
        <div className="portfolio__container">
            <Navigation/>

            <div className="portfolio__box">
                <div className="project__container">
                    <div className="project__title">yesterday</div>
                    <p className="project__memo">A place to stream music from the album yesterday by Oscar</p>
                    <p className="project__stack">Technologies Used:  
                        <img className="react" src={reactjs} alt="react logo"/>
                    </p>
                </div>

                <div className="project__display">
                    <div className="image__box">
                        <img className="project__img" src={yesterday} alt="yesterday"/>
                    </div>
                    <div className="project__links">
                        <div className="project__btn"><a target="_blank" href="https://github.com/oscar-oneill/yesterday-redesign" rel="noreferrer noopener">Source Code</a></div>
                        <div className="project__btn"><a target="_blank" href="https://yesterday.netlify.app/" rel="noreferrer noopener">Website</a></div>
                    </div>
                </div>
            </div>

            <div className="portfolio__box">
                <div className="project__container">
                    <div className="project__title">Telepath</div>
                    <p className="project__memo">Telepath filters videos & gifs posted to reddit then displays them on screen for redditors to view</p>
                    <p className="project__stack">Technologies Used:  
                        <img src={html} alt="html logo"/>
                        <img src={css} alt="css logo"/>
                        <img src={javascript} alt="javascript logo"/>
                        <img src={node} alt="node logo"/>
                        <img src={express} alt="express logo"/>
                    </p>
                </div>

                <div className="project__display">
                    <div className="image__box">
                        <img className="project__img" src={telepath} alt="telepath"/>
                    </div>
                    <div className="project__links">
                        <div className="project__btn"><a target="_blank" href="https://github.com/oscar-oneill/telepath" rel="noreferrer noopener">Source Code</a></div>
                        <div className="project__btn"><a target="_blank" href="https://telepath.herokuapp.com/" rel="noreferrer noopener">Website</a></div>
                    </div>
                </div>
            </div>

            <div className="portfolio__box">
                <div className="project__container">
                    <div className="project__title">Splashgram</div>
                    <p className="project__memo">Splashgram is an Instagram styled Unsplash viewer</p>
                    <p className="project__stack">Technologies Used:  
                        <img src={html} alt="html logo"/>
                        <img src={css} alt="css logo"/>
                        <img src={javascript} alt="javascript logo"/>
                        <img src={node} alt="node logo"/>
                        <img src={express} alt="express logo"/>
                    </p>
                </div>

                <div className="project__display">
                    <div className="image__box">
                        <img className="project__img" src={splashgram} alt="splashgram"/>
                    </div>
                    <div className="project__links">
                        <div className="project__btn"><a target="_blank" href="https://github.com/oscar-oneill/splashgram" rel="noreferrer noopener">Source Code</a></div>
                        <div className="project__btn"><a target="_blank" href="https://splashgram.herokuapp.com/" rel="noreferrer noopener">Website</a></div>
                    </div>
                </div>
            </div>

            {/* <div className="portfolio__box">
                <div className="project__container">
                    <div className="project__title">Southside Football</div>
                    <p className="project__memo">Tracking the health and gameday status of football players, then storing the data in PostgreSQL</p>
                    <p className="project__stack">Technologies Used:  
                        <img src={html} alt="html logo"/>
                        <img src={css} alt="css logo"/>
                        <img src={javascript} alt="javascript logo"/>
                        <img src={postgres} alt="postgres logo"/>
                        <img src={node} alt="node logo"/>
                        <img src={express} alt="express logo"/>
                    </p>
                </div>

                <div className="project__display">
                    <div className="image__box">
                        <img className="project__img" src={southside} alt="southside"/>
                    </div>
                    <div className="project__links">
                        <div className="project__btn"><a target="_blank" href="https://github.com/oscar-oneill/southside-football" rel="noreferrer noopener">Source Code</a></div>
                        <div className="project__btn"><a target="_blank" href="http://southsidefootball.herokuapp.com/" rel="noreferrer noopener">Website</a></div>
                    </div>
                </div>
            </div> */}

            <div className="portfolio__box">
                <div className="project__container">
                    <div className="project__title">Three Sportsmen Podcast*</div>
                    <p className="project__memo">Single page application where fans can stream podcast episodes and view scores from major professional sports leagues</p>
                    <p className="project__stack">Technologies Used:  
                        <img className="react" src={reactjs} alt="react logo"/>
                    </p>
                </div>

                <div className="project__display">
                    <div className="image__box">
                        <img className="project__img" src={three} alt="three"/>
                    </div>
                    <div className="project__links">
                        <div className="project__btn"><a target="_blank" href="https://github.com/oscar-oneill/threesportsmen" rel="noreferrer noopener">Source Code</a></div>
                        <div className="project__btn"><a target="_blank" href="https://threesportsmen.netlify.app/" rel="noreferrer noopener">Website</a></div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Portfolio
