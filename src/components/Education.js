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
      <div className="EduBG">
        <button className="headerTab" onClick={this.props.scrollToTop}>{(() => {
          if (context.state.language === 'en') return EN.nav.top;
          else if (context.state.language === 'fr') return FR.nav.top;
          else if (context.state.language === 'de') return DE.nav.top;
        })()}</button>
      <div className="page">
        
        <div className="subtitle_heading">{(() => {
          if (context.state.language === 'en') return EN.nav.education;
          else if (context.state.language === 'fr') return FR.nav.education;
          else if (context.state.language === 'de') return DE.nav.education;
        })()}</div>
        <ul>
          <li>
            <div className="institution">{(() => {
              if (context.state.language === 'en') return (EN.education.highschool.institution + " : " + EN.education.highschool.timeframe);
              else if (context.state.language === 'fr') return (FR.education.highschool.institution + " : " + FR.education.highschool.institution);
              else if (context.state.language === 'de') return (DE.education.highschool.institution + " : " + FR.education.highschool.institution);
            })()}</div>
          </li>
          <li><div className="institution">{(() => {
              if (context.state.language === 'en') return EN.education.university.institution;
              else if (context.state.language === 'fr') return FR.education.university.institution;
              else if (context.state.language === 'de') return DE.education.university.institution;
            })()}
            </div>
            <div className="description">{(() => {
              if (context.state.language === 'en') {
                return <ul className="sub_elem">
                  <li className="bullet">{EN.education.university.description["1"]}</li>
                  <li className="bullet">{EN.education.university.description["2"]}</li>
                  <li className="bullet">{EN.education.university.description["3"]}</li>
                </ul>}
              else if (context.state.language === 'fr') return <ul className="bullet">
                <li className="bullet">{FR.education.university.description["1"]}</li>
                <li className="bullet">{FR.education.university.description["2"]}</li>
                <li className="bullet">{FR.education.university.description["3"]}</li>
              </ul>
              else if (context.state.language === 'de') return <div className="bullet">{DE.education.university.description}</div>
            })()}</div>
          </li>

        </ul>
      </div>
      </div>
        )}
      </MyContext.Consumer>
    );
  }
};

export default Education;