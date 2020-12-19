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
              <a target="_blank" href="https://yesterday.netlify.app/" rel="noreferrer noopener">
                <img src={internet} alt="internet logo" />
                &nbsp; Website
              </a>

              <a target="_blank" href="https://github.com/oscar-oneill/yesterday-redesign" rel="noreferrer noopener">
                <img src={github} alt="github logo" />
                &nbsp; Github
              </a>
            </div>
          </div>

          <div className="body__content two">
            <span className="content__text">Telepath</span>
            <p className="content__info">Reddit video & gif viewer</p>
            <div className="content__links">
              <a target="_blank" href="https://telepath.netlify.app/" rel="noreferrer noopener">
                <img src={internet} alt="internet logo" />
                &nbsp; Website
              </a>

              <a target="_blank" href="https://github.com/oscar-oneill/telepath" rel="noreferrer noopener">
                <img src={github} alt="github logo" />
                &nbsp; Github
              </a>
            </div>
          </div>

          <div className="body__content three">
            <span className="content__text">Three Sports Men Podcast*</span>
            <p className="content__info">Podcast website</p>
            <div className="content__links">
              <a target="_blank" href="https://threesportsmen.netlify.app/" rel="noreferrer noopener">
                <img src={internet} alt="internet logo" />
                &nbsp; Website
              </a>

              <a target="_blank" href="https://github.com/oscar-oneill/threesportsmen" rel="noreferrer noopener">
                <img src={github} alt="github logo" />
                &nbsp; Github
              </a>
            </div>
          </div>

          <div className="body__content four">
            <span className="content__text">Splashgram</span>
            <p className="content__info">Instagram-styled Unsplash viewer</p>
            <div className="content__links">
              <a target="_blank" href="https://splashgram.herokuapp.com/" rel="noreferrer noopener">
                <img src={internet} alt="internet logo" />
                &nbsp; Website
              </a>

              <a target="_blank" href="https://github.com/oscar-oneill/splashgram" rel="noreferrer noopener">
                <img src={github} alt="github logo" />
                &nbsp; Github
              </a>
            </div>
          </div>

          <div className="body__content five">
            <span className="content__text">ExerTracker</span>
            <p className="content__info">Exercise tracker</p>
            <div className="content__links">
              <a target="_blank" href="http://exercise-tracker-react.herokuapp.com/" rel="noreferrer noopener">
                <img src={internet} alt="internet logo" />
                &nbsp; Website
              </a>

              <a target="_blank" href="https://github.com/oscar-oneill/exertracker" rel="noreferrer noopener">
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
