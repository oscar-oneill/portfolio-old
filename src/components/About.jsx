import React from 'react';
import '../styles/About.css';
import Navigation from '../components/Navigation';

import html from '../media/images/html.png';
import css from '../media/images/css.png';
import sass from '../media/images/sass.png';
import javascript from '../media/images/javascript.png';
import reactjs from '../media/images/react.png';
import node from '../media/images/node.png';
import express from '../media/images/express.png';
import git from '../media/images/git.png';
import gulp from '../media/images/gulp.png';
import postgres from '../media/images/postgreSQL.png';
import firebase from '../media/images/firebase.png';
import oscar from '../media/images/oscar.jpg';
import instagram from '../media/images/instagram.png';
import twitter from '../media/images/twitter.png';
import github from '../media/images/github.png';
import linkedin from '../media/images/linkedin.svg';

console.log(Navigation)
const About = () => {
    return (
        <div className="about__container">
            <Navigation/>

            <section>
                <div className="about__data">
                    <div className="dataBox__1">
                        <div className="box about">
                            <img id="oscar" src={oscar} alt="oscar"/>
                            <span id="about__heading" >About Me</span>
                        </div>

                        <div className="box text">
                            <p>I'm a self-taught Front End Developer who loves coding, music, sports, and finding new ways express myself creatively. Constantly learning and evolving to be the best I can be.</p>
                        </div>
                    </div>

                    <div className="dataBox__2">
                        <div className="box__header">
                            <p>Skills</p>
                        </div>
                        <ul>
                            <li><img src={html} alt="html logo"/>&nbsp;HTML</li>
                            <li><img src={css} alt="css logo"/>&nbsp;CSS</li>
                            <li><img src={sass} alt="sass logo"/>&nbsp;SASS</li>
                            <li><img src={javascript} alt="js logo"/>&nbsp;JavaScript</li>
                            <li><img src={reactjs} alt="react logo"/>&nbsp;React.js</li>
                            <li><img src={node} alt="node logo"/>&nbsp;Node.js</li>
                            <li><img src={express} alt="express logo"/>&nbsp;Express.js</li>
                            <li><img src={postgres} alt="postgres logo"/>&nbsp;PostgreSQL</li>
                            <li><img src={firebase} alt="firebase logo"/>&nbsp;Firebase</li>
                            <li><img src={gulp} alt="gulp logo"/>&nbsp;Gulp</li>
                            <li><img src={git} alt="git logo"/>&nbsp;Git</li>
                        </ul>
                    </div>

                    <div className="dataBox__3">
                        <div className="box__header">
                            <p>Connect With Me</p>
                        </div>

                        <ul>
                            <li><a href="https://www.linkedin.com/in/oscarone/" a target="_blank" rel="noreferrer noopener"><img src={linkedin} alt="linkedin logo"/>&nbsp;LinkedIn</a></li>
                            <li><a href="https://github.com/oscar-oneill" a target="_blank" rel="noreferrer noopener"><img src={github} alt="github logo"/>&nbsp;Github</a></li>
                            <li><a href="https://twitter.com/oscaroneilljs" a target="_blank" rel="noreferrer noopener"><img src={twitter} alt="twitter logo"/>&nbsp;Twitter</a></li>
                            <li><a href="https://www.instagram.com/oscaroneill.js/" a target="_blank" rel="noreferrer noopener"><img src={instagram} alt="instagram logo"/>&nbsp;Instagram</a></li>
                        </ul>
                    </div>
                </div>
            </section>
            
        </div>
    )
}

export default About
