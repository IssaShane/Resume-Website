import React from 'react';
import Icon from './icon';
import './Projects.css';
import { MyContext } from '../context';

import GithubImg from '../img/GH2.png';

import * as EN from '../translations/en.json';
import * as FR from '../translations/fr.json';
import * as DE from '../translations/de.json';

import { Document } from 'react-pdf';

class Projects extends React.Component {

  render () {
    return(
      <MyContext.Consumer>
        {(context) => (
          <div className="ProjectBG">
          <div className="page">
            <div className="subtitle_heading">
              {(() => {
                if (context.state.language === 'en') return EN.projects.heading;
                else if (context.state.language === "fr") return FR.projects.heading;
                else if (context.state.language === "de") return DE.projects.heading;
              })()}
            </div>
            <ul>
              <li>
                <div className="project_title">{(() => {
                  if (context.state.language === 'en') return EN.projects['Graph GUI Tool'].title;
                  else if (context.state.language === 'fr') return FR.projects['Graph GUI Tool'].title;
                  else if (context.state.language === 'de') return DE.projects['Graph GUI Tool'].title;
                })()}</div>
                <div className="language">{(() => {
                  if (context.state.language === 'en') return 'Language: ' + EN.projects['Graph GUI Tool'].language;
                  else if (context.state.language === 'fr') return "Langue: " + FR.projects['Graph GUI Tool'].language;
                  else if (context.state.language === 'de') return "Sprache: " + DE.projects['Graph GUI Tool'].language;
                })()}</div>
                <div className="bullet">{(() => {
                  if (context.state.language === 'en') return EN.projects['Graph GUI Tool'].description;
                  else if (context.state.language === 'fr') return FR.projects['Graph GUI Tool'].description;
                  else if (context.state.language === 'de') return DE.projects['Graph GUI Tool'].description;
                })()}</div>
                <Icon className="github_link" link="https://www.github.com/IssaShane/CO250" image={GithubImg}/>
                <a className="docLink" href="https://drive.google.com/file/d/1EwYf1ZrQrcXi2FqVolGMFywGhSAzCXFr/view?usp=sharing" target="blank">
                  view the design documents
                </a>
              </li>
            </ul>
          </div>
          </div>
        )}
      </MyContext.Consumer>
    );
  }
};

export default Projects;