import React from 'react';
import '../styles/About.css';
import Navigation from './Navigation.js';

import html from '../media/images/html.png';
import css from '../media/images/css.png';
import javascript from '../media/images/javascript.png';
import reactjs from '../media/images/react.png';
import node from '../media/images/node.png';
import express from '../media/images/express.png';
import git from '../media/images/git.png';
import gulp from '../media/images/gulp.png';
import postgres from '../media/images/postgreSQL.png';
import oscar from '../media/images/oscar.jpg';
import instagram from '../media/images/instagram.png';
import twitter from '../media/images/twitter.png';
import github from '../media/images/github.png';
import linkedin from '../media/images/linkedin.svg';
import docker from '../media/images/docker.png';
import mongo from '../media/images/mongoDB.png';
import typescript from '../media/images/typescript.png'
import python from '../media/images/python.png'

const About = () => {
    return (
        <div className="about__container">
            <Navigation/>

            <section>
                <div className="about__data">
                    <div className="dataBox__1">
                        <div className="box about">
                            <img id="oscar" src={oscar} alt="oscar"/>
                            <span id="about__heading">About Me</span>
                        </div>

                        <div className="box text">
                            <p>I'm a Software Engineer finding new & creative ways to express myself. Constantly learning and evolving to be the best I can be.</p>
                        </div>
                    </div>

                    <div className="dataBox__2">
                        <div className="box__header">
                            <p>Skills</p>
                        </div>
                        <ul>
                            <li><img src={html} alt="html logo"/>&nbsp;HTML</li>
                            <li><img src={css} alt="css logo"/>&nbsp;CSS</li>
                            <li><img src={javascript} alt="js logo"/>&nbsp;JavaScript</li>
                            <li><img src={typescript} alt="ts logo"/>&nbsp;TypeScript</li>
                            <li><img src={python} alt="python logo"/>&nbsp;Python</li>
                            <li><img src={reactjs} alt="react logo"/>&nbsp;React</li>
                            <li><img src={node} alt="node logo"/>&nbsp;Node</li>
                            <li><img src={express} alt="express logo"/>&nbsp;Express</li>
                            <li><img src={mongo} alt="redux logo"/>&nbsp;MongoDB</li>
                            <li><img src={postgres} alt="postgres logo"/>&nbsp;PostgreSQL</li>
                            <li><img src={docker} alt="docker logo"/>&nbsp;Docker</li>
                            <li><img src={gulp} alt="gulp logo"/>&nbsp;Gulp</li>
                            <li><img src={git} alt="git logo"/>&nbsp;Git</li>
                        </ul>
                    </div>

                    <div className="dataBox__3">
                        <div className="box__header">
                            <p>Connect With Me</p>
                        </div>

                        <ul>
                            <li><a href="https://www.linkedin.com/in/oscarone/" target="_blank" rel="noreferrer noopener"><img src={linkedin} alt="linkedin logo"/>&nbsp;LinkedIn</a></li>
                            <li><a href="https://github.com/oscar-oneill" target="_blank" rel="noreferrer noopener"><img src={github} alt="github logo"/>&nbsp;Github</a></li>
                            <li><a href="https://twitter.com/itsoscarlavista" target="_blank" rel="noreferrer noopener"><img src={twitter} alt="twitter logo"/>&nbsp;Twitter</a></li>
                            <li><a href="https://www.instagram.com/oscaroneill.js/" target="_blank" rel="noreferrer noopener"><img src={instagram} alt="instagram logo"/>&nbsp;Instagram</a></li>
                        </ul>
                    </div>
                </div>
            </section>
            
        </div>
    )
}

export default About
