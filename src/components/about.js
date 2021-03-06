import React from 'react';

import * as EN from '../translations/en.json';
import * as FR from '../translations/fr.json';
import * as DE from '../translations/de.json';

import './about.css';

import { MyContext } from '../context';

class About extends React.Component {
  render() {
    return (
      <MyContext.Consumer>{(context) => (
      <div className="webpage_body"><div className="about_bg"><div className="page"><div className="about-text">
        <div className="subtitle_heading">{(() => {
          if (context.state.language === 'en') {return EN.about.heading;}
          else if (context.state.language === 'fr') return FR.about.heading;
          else if (context.state.language === 'de') return DE.about.heading;
        })()}</div>
        <div className="bio_subtitle">{(() => {
          if (context.state.language === 'en') return EN.about.description["1"];
          else if (context.state.language === 'fr') return FR.about.description["1"];
          else if (context.state.language === 'de') return DE.about.description["1"];
        })()}</div>
        <div className="bio_subtitle">{(() => {
          if (context.state.language === 'en') return EN.about.description["2"];
          else if (context.state.language === 'fr') return FR.about.description["2"];
          else if (context.state.language === 'de') return DE.about.description["2"];
        })()}</div>
        <div className="bio_subtitle">{(() => {
          if (context.state.language === 'en') return EN.about.description["3"];
          else if (context.state.language === 'fr') return FR.about.description["3"];
          else if (context.state.language === 'de') return DE.about.description["3"];
        })()}</div>
      </div></div></div></div>
      )}
      </MyContext.Consumer>
    )
  }
}

export default About;