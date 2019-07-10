import React from 'react';
import './Experience.css';
import { MyContext } from '../context';

import * as EN from '../translations/en.json';
import * as FR from '../translations/fr.json';
import * as DE from '../translations/de.json';

class Experience extends React.Component {
  render()  {
    return(
      <MyContext.Consumer>
        {(context) => (
      <div className="ExpBG">
      <div className="page">
        <div className="subtitle_heading">{(() => {
          if (context.state.language === 'en') return EN.experience.heading;
          else if (context.state.language === 'fr') return FR.experience.heading;
          else if (context.state.language === 'de') return DE.experience.heading;
        })()}
        </div>
        
        <ul>
          <li><div className="company">{(() => {
            if (context.state.language === 'en') return EN.experience.Taco_Hell.company;
            else if (context.state.language === 'fr') return FR.experience.Taco_Hell.company;
            else if (context.state.language === 'de') return DE.experience.Taco_Hell.company;
          })()}</div>
              <div className="job_title">{(() => {
            if (context.state.language === 'en') return EN.experience.Taco_Hell.title;
            else if (context.state.language === 'fr') return FR.experience.Taco_Hell.title;
            else if (context.state.language === 'de') return DE.experience.Taco_Hell.title;
              })()}
              </div>
            <ul className="sub_elem">
              <li className="bullet">{(() => {
                if (context.state.language === 'en') return EN.experience.Taco_Hell.description["1"];
                else if (context.state.language === 'fr') return FR.experience.Taco_Hell.description["1"];
                else if (context.state.language === 'de') return DE.experience.Taco_Hell.description["1"];
              })()}
              </li>
              <li className="bullet">{(() => {
                if (context.state.language === 'en') return EN.experience.Taco_Hell.description["2"];
                else if (context.state.language === 'fr') return FR.experience.Taco_Hell.description["2"];
                else if (context.state.language === 'de') return DE.experience.Taco_Hell.description["2"];
              })()}</li>
              <li className="bullet">{(() => {
                if (context.state.language === 'en') return EN.experience.Taco_Hell.description["3"];
                else if (context.state.language === 'fr') return FR.experience.Taco_Hell.description["3"];
                else if (context.state.language === 'de') return DE.experience.Taco_Hell.description["3"];
              })()}</li>
              <li className="bullet">{(() => {
                if (context.state.language === 'en') return EN.experience.Taco_Hell.description["4"];
                else if (context.state.language === 'fr') return FR.experience.Taco_Hell.description["4"];
                else if (context.state.language === 'de') return DE.experience.Taco_Hell.description["4"];
              })()}</li>
            </ul>
          </li>
          <li>
            <div className="company">{(() => {
              if (context.state.language === 'en') return EN.experience.Portillos.company;
              else if (context.state.language === 'fr') return FR.experience.Portillos.company;
              else if (context.state.language === 'de') return DE.experience.Portillos.company;
            })()}</div>
            <div className="job_title">{(() => {
              if (context.state.language === 'en') return EN.experience.Portillos.title;
              else if (context.state.language === 'fr') return FR.experience.Portillos.title;
              else if (context.state.language === 'de') return DE.experience.Portillos.title;
            })()}</div>
            <ul className="sub_elem">
              <li className="bullet">{(() => {
                if (context.state.language === 'en') return EN.experience.Portillos.description["1"];
                else if (context.state.language === 'fr') return FR.experience.Portillos.description["1"];
                else if (context.state.language === 'de') return DE.experience.Portillos.description["1"];
              })()}</li>
              <li className="bullet">{(() => {
                if (context.state.language === 'en') return EN.experience.Portillos.description["2"];
                else if (context.state.language === 'fr') return FR.experience.Portillos.description["2"];
                else if (context.state.language === 'de') return DE.experience.Portillos.description["2"];
              })()}</li>
              <li className="bullet">{(() => {
                if (context.state.language === 'en') return EN.experience.Portillos.description["3"];
                else if (context.state.language === 'fr') return FR.experience.Portillos.description["3"];
                else if (context.state.language === 'de') return DE.experience.Portillos.description["3"];
              })()}</li>
            </ul>
          </li>

          <li>Verwalter von Betrieb und Marketing bei HHD Imports Inc - Waterloo, ON</li>
        </ul>
      </div>
      </div>

      )}
      </MyContext.Consumer>
    );
  }
};

export default Experience;