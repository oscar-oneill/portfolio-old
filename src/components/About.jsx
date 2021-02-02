import React from 'react';
import '../components/About.css';
import oscar from '../media/images/oscar.jpg';
import linkedIn from '../media/images/linkedIn.png';
import github from '../media/images/github.png';

const About = () => {
    return (
        <div className="about__container">
            <div className="about__header">
                About Me
            </div>

            <div className="about__data">
                <div id="about__image">
                    <img src={oscar} alt="icon"/>
                </div>
                <div id="about__bio">
                    I'm a self-taught developer who loves coding, music, sports, and finding new ways express myself creatively.
                </div>
                <div id="about__links">
                    <ul>
                        <li>
                            <a target="_blank" href="https://www.linkedin.com/in/oscarone/" rel="noreferrer noopener">
                                <img src={linkedIn} alt="linkedIn logo" />
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="https://github.com/oscar-oneill" rel="noreferrer noopener">
                                <img src={github} alt="github logo" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default About
