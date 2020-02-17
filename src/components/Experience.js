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
        
        <div className="header_background"><div className="page">
           
        <div className="section_header">{(() => {
          if (context.state.language === 'en') return EN.experience.heading;
          else if (context.state.language === 'fr') return FR.experience.heading;
          else if (context.state.language === 'de') return DE.experience.heading;
        })()}</div>
        </div></div>


        <div className="HHD_background"><div className="page">
            <div className="company">{(() => {
              if (context.state.language === 'en') return (EN.experience.HHD.company + " : " + EN.experience.HHD.timeframe);
              else if (context.state.language === 'fr') return (FR.experience.HHD.company + " : " + FR.experience.HHD.timeframe);
              else if (context.state.language === 'de') return (DE.experience.HHD.company + " : " + DE.experience.HHD.timeframe);
            })()}</div>
            <div className="job_title">{(() => {
              if (context.state.language === 'en') return EN.experience.HHD.title;
              else if (context.state.language === 'fr') return FR.experience.HHD.title;
              else if (context.state.language === 'de') return DE.experience.HHD.title;
            })()}</div>
            <div className="bullet">{(() => {
              if (context.state.language === 'en') return <ul className="sub_elem">
              <li className="bullet">{EN.experience.HHD.description["1"]}</li>
              <li className="bullet">{EN.experience.HHD.description["2"]}</li>
              <li className="bullet">{EN.experience.HHD.description["3"]}</li>
              <li className="bullet">{EN.experience.HHD.description["4"]}</li>
            </ul>
              else if (context.state.language === 'de') return <div className="sub_elem">
                <div className="bullet">{DE.experience.HHD.description}</div></div>
              else if (context.state.language === 'fr') return <ul className="sub_elem">
                <li className="bullet">{FR.experience.HHD.description["1"]}</li>
                <li className="bullet">{FR.experience.HHD.description["2"]}</li>
                <li className="bullet">{FR.experience.HHD.description["3"]}</li>
                <li className="bullet">{FR.experience.HHD.description["4"]}</li>
                </ul>
            })()}
            
            </div>
          </div></div>
        
          

          <div className="Math_ambassador_background"><div className="page">
            <div className="company">{(() => {
              if (context.state.language === 'en') return (EN.experience["Math Ambassador"].company + " : " +
                                                           EN.experience["Math Ambassador"].timeframe);
              else if (context.state.language === 'de') return (DE.experience["Math Ambassador"].company + " : " + 
                                                                DE.experience["Math Ambassador"].timeframe);
              else if (context.state.language === 'fr') return (FR.experience["Math Ambassador"].company + " : " +
                                                                FR.experience["Math Ambassador"].timeframe);
            })()}</div>
            <div className="job_title">{(() => {
              if (context.state.language === 'en') return EN.experience["Math Ambassador"].title;
              else if (context.state.language === 'fr') return FR.experience["Math Ambassador"].title;
              else if (context.state.language === 'de') return FR.experience["Math Ambassador"].title;
            })()}</div>
            <div className="description">{(() => {
              if (context.state.language === 'en') return <ul className="sub_elem">
                <li className="bullet">{EN.experience["Math Ambassador"].description["1"]}</li>
                <li className="bullet">{EN.experience["Math Ambassador"].description["2"]}</li>
              </ul>
              else if (context.state.language === 'fr') return <ul className="sub_elem">
                <li className="bullet">{FR.experience["Math Ambassador"].description["1"]}</li>
                <li className="bullet">{FR.experience["Math Ambassador"].description["2"]}</li>
              </ul>
              else if (context.state.language === 'de') return <div className="sub_elem">
                <div className="bullet">{DE.experience["Math Ambassador"].description}</div>
              </div>
            })()}</div>
          </div></div>

          <div className="Portillos_background"><div className="page">
            <div className="company">{(() => {
              if (context.state.language === 'en') return (EN.experience.Portillos.company + " : " + EN.experience.Portillos.timeframe);
              else if (context.state.language === 'fr') return (FR.experience.Portillos.company + " : " + FR.experience.Portillos.timeframe);
              else if (context.state.language === 'de') return (DE.experience.Portillos.company + " : " + DE.experience.Portillos.timeframe);
            })()}</div>
            <div className="job_title">{(() => {
              if (context.state.language === 'en') return EN.experience.Portillos.title;
              else if (context.state.language === 'fr') return FR.experience.Portillos.title;
              else if (context.state.language === 'de') return DE.experience.Portillos.title;
            })()}</div>


            <div>{(() => {
              if (context.state.language === 'en') return <ul className="sub_elem">
                <li className="bullet">{EN.experience.Portillos.description["1"]}</li>
                <li className="bullet">{EN.experience.Portillos.description["2"]}</li>
                <li className="bullet">{EN.experience.Portillos.description["3"]}</li>
              </ul>
              else if (context.state.language === 'de') return <div className="sub_elem">
                <div className="bullet">{DE.experience.Portillos.description}</div></div>
              else if (context.state.language === 'fr') return <ul className="sub_elem">
                  <li className="bullet">{FR.experience.Portillos.description["1"]}</li>
                  <li className="bullet">{FR.experience.Portillos.description["2"]}</li>
                  <li className="bullet">{FR.experience.Portillos.description["3"]}</li>
                </ul>
            })()}</div>
          </div></div>
        
      </div>

      )}
      </MyContext.Consumer>
    );
  }
};

export default Experience;