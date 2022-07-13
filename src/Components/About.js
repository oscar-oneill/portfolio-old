import React, { useRef, useContext, useEffect } from 'react'
import { AppContext } from '../Context/AppContext'
import '../styles/About.css'
import { image } from '../Hooks/Images'

const About = () => {
    const aboutInnerRef = useRef()
    const { setAboutData } = useContext(AppContext)

    useEffect(() => {
        const { scrollTop, scrollHeight, clientHeight, offsetTop } = aboutInnerRef.current;

        setAboutData({
            clientHeight: clientHeight,
            scrollTop: scrollTop,
            scrollHeight: scrollHeight,
            offsetTop: offsetTop
        })

    }, [aboutInnerRef])

    return (
        <div ref={aboutInnerRef} className="about__container" id="about">
            <section>
                <div className="about__data">
                    <div className="dataBox__1">
                        <div className="box about">
                            <img id="oscar" src={image.oscar} alt="oscar"/>
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
                            <li><img src={image.html} alt="html logo"/>&nbsp;HTML</li>
                            <li><img src={image.css} alt="css logo"/>&nbsp;CSS</li>
                            <li><img src={image.javascript} alt="js logo"/>&nbsp;JavaScript</li>
                            <li><img src={image.typescript} alt="ts logo"/>&nbsp;TypeScript</li>
                            <li><img src={image.python} alt="python logo"/>&nbsp;Python</li>
                            <li><img src={image.react} alt="react logo"/>&nbsp;React</li>
                            <li><img src={image.node} alt="node logo"/>&nbsp;Node</li>
                            <li><img src={image.express} alt="express logo"/>&nbsp;Express</li>
                            <li><img src={image.mongo} alt="redux logo"/>&nbsp;MongoDB</li>
                            <li><img src={image.postgres} alt="postgres logo"/>&nbsp;PostgreSQL</li>
                            <li><img src={image.docker} alt="docker logo"/>&nbsp;Docker</li>
                            <li><img src={image.gulp} alt="gulp logo"/>&nbsp;Gulp</li>
                            <li><img src={image.git} alt="git logo"/>&nbsp;Git</li>
                        </ul>
                    </div>

                    <div className="dataBox__3">
                        <div className="box__header">
                            <p>Connect With Me</p>
                        </div>

                        <ul>
                            <li><a href="https://www.linkedin.com/in/oscarone/" target="_blank" rel="noreferrer noopener"><img src={image.linkedin} alt="linkedin logo"/>&nbsp;LinkedIn</a></li>
                            <li><a href="https://github.com/oscar-oneill" target="_blank" rel="noreferrer noopener"><img src={image.github} alt="github logo"/>&nbsp;Github</a></li>
                            <li><a href="https://twitter.com/itsoscarlavista" target="_blank" rel="noreferrer noopener"><img src={image.twitter} alt="twitter logo"/>&nbsp;Twitter</a></li>
                            {/* <li><a href="https://www.instagram.com/oscaroneill.js/" target="_blank" rel="noreferrer noopener"><img src={image.instagram} alt="instagram logo"/>&nbsp;Instagram</a></li> */}
                        </ul>
                    </div>
                </div>
            </section>
            
        </div>
    )
}

export default About
