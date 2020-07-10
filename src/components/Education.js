import React from 'react';
import './Education.css';
import { MyContext } from '../context';

import * as EN from '../translations/en.json';
import * as FR from '../translations/fr.json';
import * as DE from '../translations/de.json';

class Education extends React.Component {
  render () {
    return (
      <MyContext.Consumer>
        {(context) => (
      <div className="EduPage">
        
        <div className="webpage_body">
        <div className="EduBG"><div className="page">
        <div className="edu-section-header">{(() => {
          if (context.state.language === 'en') return EN.nav.education;
          else if (context.state.language === 'fr') return FR.nav.education;
          else if (context.state.language === 'de') return DE.nav.education;
        })()}</div></div></div>

        <div className="page">
          <div className="pagebox">
          <div className="text_block_left">
          <div className="institution">{(() => {
            if (context.state.language === 'en') return (EN.education.highschool.institution + " : " + EN.education.highschool.timeframe);
            else if (context.state.language === 'fr') return (FR.education.highschool.institution + " : " + FR.education.highschool.timeframe);
            else if (context.state.language === 'de') return (DE.education.highschool.institution + " : " + DE.education.highschool.timeframe);
          })()}</div>
          </div>
          <div className="nchs_background"></div>
          </div>
        </div>

        <div className="page">
          <div className="pagebox">
            <div className="uw_background"></div>
            <div className="text_block_right">
        <div className="institution">{(() => {
            if (context.state.language === 'en') return EN.education.university.institution + " : " + EN.education.university.timeframe;
            else if (context.state.language === 'fr') return FR.education.university.institution + " : " + FR.education.university.timeframe;
            else if (context.state.language === 'de') return DE.education.university.institution + " : " + DE.education.university.timeframe;
          })()}
          </div>
          <div className="description">{(() => {
            if (context.state.language === 'en') {
              return <ul className="sub_elem">
                <li className="bullet">{EN.education.university.description["1"]}</li>
                <li className="bullet">{EN.education.university.description["2"]}</li>
                <li className="bullet">{EN.education.university.description["3"]}</li>
              </ul>}
            else if (context.state.language === 'fr') return <ul className="sub_elem">
              <li className="bullet">{FR.education.university.description["1"]}</li>
              <li className="bullet">{FR.education.university.description["2"]}</li>
              <li className="bullet">{FR.education.university.description["3"]}</li>
            </ul>
            else if (context.state.language === 'de') return <div className="sub_elem">
              <div className="bullet">{DE.education.university.description}</div>
            </div>
          })()}</div>
          </div>
          </div>
          </div>
          </div>
      </div>
        )}
      </MyContext.Consumer>
    );
  }
};

export default Education;