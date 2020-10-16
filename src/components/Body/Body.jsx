import React from 'react';
import '../Body/Body.css';
import internet from '../Media/images/internet.png';
import github from '../Media/images/github.png';

const Body = () => {
    return (
      <div className="body__container">
        <div className="body__wrapper">
          <div className="body__content one">
            <span className="content__text">Yesterday</span>
            <p className="content__info">Music website</p>
            <div className="content__links">
              <a href="https://yesterday.netlify.app/">
                <img src={internet} alt="internet logo" />
                &nbsp; Website
              </a>

              <a href="https://github.com/oscar-oneill/yesterday">
                <img src={github} alt="github logo" />
                &nbsp; Github
              </a>
            </div>
          </div>

          <div className="body__content two">
            <span className="content__text">Telepath</span>
            <p className="content__info">Reddit video & gif viewer</p>
            <div className="content__links">
              <a href="https://telepath.netlify.app/">
                <img src={internet} alt="internet logo" />
                &nbsp; Website
              </a>

              <a href="https://github.com/oscar-oneill/telepath">
                <img src={github} alt="github logo" />
                &nbsp; Github
              </a>
            </div>
          </div>

          <div className="body__content three">
            <span className="content__text">Three Sports Men Podcast*</span>
            <p className="content__info">Podcast website</p>
            <div className="content__links">
              <a href="https://threesportsmen.netlify.app/">
                <img src={internet} alt="internet logo" />
                &nbsp; Website
              </a>

              <a href="https://github.com/oscar-oneill/threesportsmen">
                <img src={github} alt="github logo" />
                &nbsp; Github
              </a>
            </div>
          </div>

          <div className="body__content four">
            <span className="content__text">Splashgram</span>
            <p className="content__info">Instagram-styled Unsplash viewer</p>
            <div className="content__links">
              <a href="https://splashgram.herokuapp.com/">
                <img src={internet} alt="internet logo" />
                &nbsp; Website
              </a>

              <a href="https://github.com/oscar-oneill/splashgram">
                <img src={github} alt="github logo" />
                &nbsp; Github
              </a>
            </div>
          </div>

          <div className="body__content five">
            <span className="content__text">ExerTracker</span>
            <p className="content__info">Exercise tracker</p>
            <div className="content__links">
              <a href="http://exercise-tracker-react.herokuapp.com/">
                <img src={internet} alt="internet logo" />
                &nbsp; Website
              </a>

              <a href="https://github.com/oscar-oneill/exertracker">
                <img src={github} alt="github logo" />
                &nbsp; Github
              </a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Body
