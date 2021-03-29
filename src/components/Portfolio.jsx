import React from 'react'
import '../styles/Portfolio.css';
import Navigation from '../components/Navigation';
import Projects from '../components/Projects';

import yesterday from '../media/images/yesterday.png';
import telepath from '../media/images/telepath.png';
import three from '../media/images/three.png';
import splashgram from '../media/images/splashgram.png';
import firechat from '../media/images/firechat.png';
import southside from '../media/images/southside.png';

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
                title='Telepath'
                memo='Telepath filters videos & gifs posted to reddit then displays them on screen for redditors to view'
                project={telepath}
                tech='HTML, CSS, JavaScript, Node, Express, Snoowrap.js'
                code='https://github.com/oscar-oneill/telepath'
                website='http://telepath.herokuapp.com/'
            />

            <Projects
                title='Splashgram'
                memo='Splashgram is an Instagram styled Unsplash viewer'
                project={splashgram}
                tech='HTML, CSS, JavaScript, Node, Express, Unsplash.js'
                code='https://github.com/oscar-oneill/splashgram'
                website='http://splashgram.xyz/'
            />

            <Projects
                title='Firechat'
                memo='Firechat is a single group super chat room where all it takes to participate is a Google account and a desire to speak'
                project={firechat}
                tech='React, Firebase, Firebase Firestore'
                code='https://github.com/oscar-oneill/splashgram'
                website='https://superfirechat.netlify.app/'
            />

            <Projects
                title='Three Sportsmen Podcast*'
                memo='Single page application where fans can stream podcast episodes and view scores from major professional sports leagues'
                project={three}
                tech='React'
                code='https://github.com/oscar-oneill/threesportsmen'
                website='https://threesportsmen.netlify.app'
            />

            <Projects
                title='Southside Football'
                memo='Tracking the health and gameday status of football players.'
                project={southside}
                tech='HTML, SASS, JavaScript, Node, Express, PostgreSQL'
                code='https://github.com/oscar-oneill/southside-footlball'
                website='https://southsidefootball.herokuapp.com/'
            />

        </div>
    )
}

export default Portfolio
