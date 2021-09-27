import React from 'react';
import '../styles/Home.css';
import resume from '../media/documents/oscaroneillResume.pdf';

const Home = () => {
    return (
        <div className="home__container">
            <div className="home__data">
                <p id="home__text">I'm Oscar O'Neill. <br/> Software Engineer <br/> based in New York.</p>
                <ul>
                    <li><a href="/about">About Me</a></li>
                    <li><a href="/portfolio">Portfolio</a></li>
                    <li><a href={resume}>Resume</a></li>
                    <li><a href="/blog">Blog</a></li>
                    <li><a href="mailto:oscar.oneill@aol.com">Contact</a></li>
                </ul>    
            </div>
        </div>
    )
}

export default Home
