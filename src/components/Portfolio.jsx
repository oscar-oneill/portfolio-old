import React from 'react'
import '../styles/Portfolio.css';
import Navigation from '../components/Navigation';
import Projects from '../components/Projects';

import yesterday from '../media/images/yesterday.png';
import telepath from '../media/images/telepath.png';
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
                title='Splashgram'
                memo='Splashgram is an Instagram styled Unsplash web application'
                project={splashgram}
                tech='React, Node, Express'
                code='https://github.com/oscar-oneill/splashgram'
                website='https://splashgram.xyz/'
            />

            <Projects
                title='Southside Football'
                memo='Tracking the health and gameday status of football players.'
                project={southside}
                tech='React, Node, Express, PostgreSQL, JSON Web Token'
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
