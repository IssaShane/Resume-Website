import React from 'react';
import './skills.css';
import { MyContext } from '../context';

import * as EN from '../translations/en.json';
import * as FR from '../translations/fr.json';
import * as DE from '../translations/de.json';

class Skills extends React.Component {
  render() {
    return(<MyContext.Consumer>
      {(context) => (
        <div className="webpage_body">


        <div className="programming"><div className="title-page">
          <div className="skill-section-header">{(() => {
            if (context.state.language === 'en') return EN.skills.programming.heading;
            else if (context.state.language === 'fr') return FR.skills.programming.heading;
            else if (context.state.language === 'de') return DE.skills.programming.heading;
          })()}</div></div></div>

        <div className="page">
          <div className="body">
            <div className="skills-tags">
              <div className="skills-bullet">
                <div className="skills-tag">C/C++:</div><div className="skills-descr">{(() => {
                if (context.state.language === 'en') return EN.skills.programming["C/C++"];
                else if (context.state.language === 'de') return DE.skills.programming["C/C++"];
                else if (context.state.language === 'fr') return FR.skills.programming["C/C++"];
              })()}</div>
              </div>
              <div className="skills-bullet">
                <div className="skills-tag">Java:</div><div className="skills-descr">{(() => {
                if (context.state.language === 'en') return EN.skills.programming.Java;
                else if (context.state.language === 'de') return DE.skills.programming.Java;
                else if (context.state.language === 'fr') return FR.skills.programming.Java;
              })()}</div>
              </div>
              <div className="skills-bullet">
                <div className="skills-tag">C#:</div><div className="skills-descr">{(() => {
                if (context.state.language === 'en') return EN.skills.programming["C#"];
                else if (context.state.language === 'de') return DE.skills.programming["C#"];
                else if (context.state.language === 'fr') return FR.skills.programming["C#"];
              })()}</div>
              </div>
              <div className="skills-bullet">
                <div className="skills-tag">Racket:</div><div className="skills-descr">{(() => {
                if (context.state.language === 'en') return EN.skills.programming.Racket;
                else if (context.state.language === 'de') return DE.skills.programming.Racket;
                else if (context.state.language === 'fr') return FR.skills.programming.Racket;
                })()}</div>
                </div>
              <div className="skills-bullet">
                <div className="skills-tag">JSX/HTML/CSS/ReactJS:</div><div className="skills-descr">{(() => {
                if (context.state.language === 'en') return EN.skills.programming["JSX/HTML/CSS/React"];
                else if (context.state.language === 'de') return DE.skills.programming["JSX/HTML/CSS/React"];
                else if (context.state.language === 'fr') return FR.skills.programming["JSX/HTML/CSS/React"];
                })()}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="language"><div className="title-page">
          <div className="skill-section-header">{(() => {
            if (context.state.language === 'en') return EN.skills.language.heading;
            else if (context.state.language === 'fr') return FR.skills.language.heading;
            else if (context.state.language === 'de') return DE.skills.language.heading;
          })()}</div></div></div>

        <div className="page"><div className="body">
          <div className="bullet">{(() => {
            if (context.state.language === 'en') return "English: " + EN.skills.language.English;
            else if (context.state.language === 'fr') return "Anglais: " + FR.skills.language.English;
            else if (context.state.language === 'de') return "Englisch: " + DE.skills.language.English;
          })()}</div>
          <div className="bullet">{(() => {
            if (context.state.language === 'en') return "French: " + EN.skills.language.French;
            else if (context.state.language === 'fr') return "Français: " + FR.skills.language.French;
            else if (context.state.language === 'de') return "Französisch: " + DE.skills.language.French;
          })()}</div>
          <div className="bullet">{(() => {
            if (context.state.language === 'en') return "German: " + EN.skills.language.German;
            else if (context.state.language === 'de') return "Deutsch: " + DE.skills.language.German;
            else if (context.state.language === 'fr') return "Allemand: " + FR.skills.language.German;
          })()}</div>
          </div></div>
        </div>
      )}

    </MyContext.Consumer>);
  }
};

export default Skills;