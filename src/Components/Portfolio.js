import React from 'react'
import '../styles/Portfolio.css';
import Navigation from './Navigation';
import Projects from './Projects';

import yesterday from '../media/images/yesterday.png';
import telepath from '../media/images/telepath.png';
import splashgram from '../media/images/splashgram.png';
import firechat from '../media/images/firechat.png';
import southside from '../media/images/southside.png';
import blackjack from '../media/images/blackjack.png';
import blog from '../media/images/blog.png'
import tetris from '../media/images/tetris.png'

const Portfolio = () => {
    return (
        <div className="portfolio__container">
            <Navigation/>
            <Projects
                title='yesterday'
                memo='A place to stream music from the album yesterday'
                project={yesterday}
                tech='React'
                code='https://github.com/oscar-oneill/yesterday-redesign'
                website='https://yesterday.netlify.app/'
            />

            <Projects
                title='Splashgram'
                memo='Splashgram is an Instagram styled Unsplash web application'
                project={splashgram}
                tech='React, Node, Express, Docker'
                code='https://github.com/oscar-oneill/splashgram'
                website='http://splashgram.xyz/'
            />

            <Projects
                title="Oscar's Blog"
                memo='My Web Development Blog'
                project={blog}
                tech='React, Node, Express, MongoDB'
                code='https://github.com/oscar-oneill/portfolio'
                website='https://oscaroneill.xyz/blog'
            />

            <Projects
                title='Retro Tetris'
                memo='Mintbean Hackathon Project for August 2021'
                project={tetris}
                tech='React, Styled Components'
                code='https://github.com/oscar-oneill/tetris'
                website='https://retrotetris.vercel.app'
            />

            <Projects
                title='Blackjack'
                memo='Mintbean Hackathon Project for July 2021'
                project={blackjack}
                tech='HTML, CSS, JavaScript'
                code='https://github.com/oscar-oneill/blackjack'
                website='https://blackjack21.vercel.app'
            />

            <Projects
                title='Southside Football'
                memo='Tracking the health and gameday status of football players.'
                project={southside}
                tech='React, Node, Express, PostgreSQL, JSON Web Token, Docker'
                code='https://github.com/oscar-oneill/southsiderebels'
                website='https://southsiderebels.herokuapp.com/'
            />

            <Projects
                title='Telepath'
                memo='Telepath filters videos & gifs posted to reddit then displays them on screen for redditors to view'
                project={telepath}
                tech='HTML, CSS, JavaScript, Node, Express, Snoowrap.js'
                code='https://github.com/oscar-oneill/telepath'
                website='https://telepath.website/'
            />

            <Projects
                title='Firechat'
                memo='Firechat is a single group super chat room where all it takes to participate is a Google account and a desire to speak'
                project={firechat}
                tech='React, Firebase, Firebase Firestore'
                code='https://github.com/oscar-oneill/splashgram'
                website='https://superfirechat.netlify.app/'
            />
        </div>
    )
}

export default Portfolio
