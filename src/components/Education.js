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
      <div className="page">
        <div className="subtitle_heading">Ausbildung</div>
        <ul>
          <li>
            <div className="institution">{(() => {
              if (context.state.language === 'en') return EN.education.highschool.institution;
              else if (context.state.language === 'fr') return FR.education.highschool.institution;
              else if (context.state.language === 'de') return DE.education.highschool.institution;
            })()}</div>
            <div className="timeframe">{(() => {
              if (context.state.language === 'en') return EN.education.highschool.timeframe;
              else if (context.state.language === 'fr') return FR.education.highschool.timeframe;
              else if (context.state.language === 'de') return DE.education.highschool.timeframe;
            })()}
            </div>
          </li>
          <li><div className="institution">{(() => {
              if (context.state.language === 'en') return EN.education.highschool.institution;
              else if (context.state.language === 'fr') return FR.education.highschool.institution;
              else if (context.state.language === 'de') return DE.education.highschool.institution;
            })()}
            </div>
            <ul className="sub_elem">
              <li className="bullet">{(() => {
                if (context.state.language === 'en') return EN.education.highschool.description["1"];
                else if (context.state.language === 'fr') return FR.education.highschool.description["1"];
                else if (context.state.language === 'de') return DE.education.highschool.description["1"];
              })()}</li>
              <li className="bullet">{(() => {
                if (context.state.language === 'en') return EN.education.highschool.description["2"];
                else if (context.state.language === 'fr') return FR.education.highschool.description["2"];
                else if (context.state.language === 'de') return DE.education.highschool.description["2"];
              })()}</li>
              <li className="bullet">{(() => {
                if (context.state.language === 'en') return EN.education.highschool.description["3"];
                else if (context.state.language === 'fr') return FR.education.highschool.description["3"];
                else if (context.state.language === 'de') return DE.education.highschool.description["3"];
              })()}</li>
            </ul>
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