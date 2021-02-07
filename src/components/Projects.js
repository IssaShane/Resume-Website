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
          <div className="webpage_body">

          <div className="ProjectBG"><div className="title-page">
            <div className="project-section-header">{(() => {
              if (context.state.language === 'en') return EN.projects.heading;
              else if (context.state.language === 'fr') return FR.projects.heading;
              else if (context.state.language === 'de') return DE.projects.heading;
            })()}</div>
          </div></div>

         
            <div className="page"><div className="pagebox">
            <div className="text_block_left"><div className="project-text">
              <div className="project_title">{(() => {
                if (context.state.language === 'en') return EN.projects['Graph GUI Tool'].title;
                else if (context.state.language === 'fr') return FR.projects['Graph GUI Tool'].title;
                else if (context.state.language === 'de') return DE.projects['Graph GUI Tool'].title;
              })()}</div>
              <div className="programming_lang">{(() => {
                if (context.state.language === 'en') return 'Language: ' + EN.projects['Graph GUI Tool'].language;
                else if (context.state.language === 'fr') return "Langue: " + FR.projects['Graph GUI Tool'].language;
                else if (context.state.language === 'de') return "Sprache: " + DE.projects['Graph GUI Tool'].language;
              })()}</div>
              <div className="project-description">{(() => {
                if (context.state.language === 'en') return EN.projects['Graph GUI Tool'].description;
                else if (context.state.language === 'fr') return FR.projects['Graph GUI Tool'].description;
                else if (context.state.language === 'de') return DE.projects['Graph GUI Tool'].description;
              })()}</div>
              <div className="project-goal-section">{(() => {
                if (context.state.language === 'en') return EN.projects['Graph GUI Tool'].goal;
                else if (context.state.language === 'fr') return FR.projects['Graph GUI Tool'].goal;
                else if (context.state.language === 'de') return DE.projects['Graph GUI Tool'].goal;
              })()}</div>
              <Icon className="github_divnk" divnk="https://www.github.com/IssaShane/CO250" image={GithubImg}/>
              {/*<a className="docLink" href="https://drive.google.com/file/d/1wYSNR5pv_w44Y7Q1_ERav8zEFJgLpiyZ/view?usp=sharing" target="blank">{(() => {
                if (context.state.language === 'en') return "view the design documents";
                else if (context.state.language === 'fr') return "divre les documents de conception";
                else if (context.state.language === 'de') return "Gestaltungsdokumenten lesen";
              })()}</a>*/}
            </div></div>
            <div className="bg-CO250"></div>
            </div></div>
            <div className="page"><div className="pagebox">
              <div className="bg-Seaghans-Fractions"></div>
              <div className="text_box_right"><div className="project-text">
              <div className="project_title">{(() => {
                if (context.state.language === 'en') return EN.projects["Seaghán's Fractions"].title;
                else if (context.state.language === 'de') return DE.projects["Seaghán's Fractions"].title;
                else if (context.state.language === 'fr') return FR.projects["Seaghán's Fractions"].title;
              })()}</div>
              <div className="programming_lang">{(() => {
                if (context.state.language === 'en')  return "Language: " + EN.projects["Seaghán's Fractions"].language;
                else if (context.state.language === 'de') return "Sprache: " + DE.projects["Seaghán's Fractions"].language;
                else if (context.state.language === 'fr') return "Langue: " + FR.projects["Seaghán's Fractions"].language;
              })()}</div>
              <div className="project-description">{(() => {
                if (context.state.language === 'en') return EN.projects["Seaghán's Fractions"].description;
                else if (context.state.language === 'de') return DE.projects["Seaghán's Fractions"].description;
                else if (context.state.language === 'fr') return FR.projects["Seaghán's Fractions"].description;
              })()}</div>
              <div className="project-goal-section">{(() => {
                if (context.state.language === 'en') return EN.projects["Seaghán's Fractions"].goal;
                else if (context.state.language === 'de') return DE.projects["Seaghán's Fractions"].goal;
                else if (context.state.language === 'fr') return FR.projects["Seaghán's Fractions"].goal;
              })()}</div>
              <Icon className="github_divnk" divnk="https://www.github.com/IssaShane/Seaghan-s-Fractions" image={GithubImg}/>
              </div></div>
            </div></div>
            <div className="page"><div className="pagebox">
              <div className="text_box_left"><div className="project-text">
                <div className="project_title">{(() => {
                  if (context.state.language === 'en') return EN.projects["Seaghán's Matrices"].title;
                  else if (context.state.language === 'de') return DE.projects["Seaghán's Matrices"].title;
                  else if (context.state.language === 'fr') return FR.projects["Seaghán's Matrices"].title;
                })()}</div>
                <div className="programming_lang">{(() => {
                  if (context.state.language === 'en')  return "Language: " + EN.projects["Seaghán's Matrices"].language;
                  else if (context.state.language === 'de') return "Sprache: " + DE.projects["Seaghán's Matrices"].language;
                  else if (context.state.language === 'fr') return "Langue: " + FR.projects["Seaghán's Matrices"].language;
                })()}</div>
                <div className="project-description">{(() => {
                  if (context.state.language === 'en') return EN.projects["Seaghán's Matrices"].description;
                  else if (context.state.language === 'de') return DE.projects["Seaghán's Matrices"].description;
                  else if (context.state.language === 'fr') return FR.projects["Seaghán's Matrices"].description;
                })()}</div>
                <div className="project-goal-section">{(() => {
                  if (context.state.language === 'en') return EN.projects["Seaghán's Matrices"].goal;
                  else if (context.state.language === 'de') return DE.projects["Seaghán's Matrices"].goal;
                  else if (context.state.language === 'fr') return FR.projects["Seaghán's Matrices"].goal;
                })()}</div>
                <Icon className="github_divnk" divnk="https://www.github.com/IssaShane/Seaghans-Matrices" image={GithubImg}/>
              </div></div>
              <div className="bg-Seaghans-Matrices"></div>
            </div></div>
          
          
          
          </div>
        )}
      </MyContext.Consumer>
    );
  }
};

export default Projects;