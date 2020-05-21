import React from "react";
import Icon from './icon';
import * as FR from '../translations/fr.json';
import * as DE from '../translations/de.json';
import * as EN from '../translations/en.json';
import './home.css';

import App from '../App';
import Projects from './Projects';

import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

import LinkedInImg from '../img/LI2.png';
import GithubImg from '../img/GH2.png';

import { MyContext } from '../context';



class Index extends React.Component {
  render() {
      return (
        <MyContext.Consumer>
          {(context) => (
            <div>
                
              
                <button className="headerTab" onClick={this.props.scrollToExperience}>{(() => {
                if (context.state.language === 'en') return EN.nav.experience;
                else if (context.state.language === 'fr') return FR.nav.experience;
                else if (context.state.language === 'de') return DE.nav.experience;
                })()}
                </button>
                <button className="headerTab" onClick={this.props.scrollToEducation}>{(() => {
                if (context.state.language === 'en') return EN.nav.education;
                else if (context.state.language === 'fr') return FR.nav.education;
                else if (context.state.language === 'de') return DE.nav.education;
                })()}
                </button>
                <button className="headerTab" onClick={this.props.scrollToAbout}>{(() => {
                if (context.state.language === 'en') return EN.nav.about;
                else if (context.state.language === 'de') return DE.nav.about;
                else if (context.state.language === 'fr') return FR.nav.about;
                })()}
                </button>
              <div className="title_heading">Seaghán Elliott Walter Collins</div>
              <div className="subtitle">{(() => {
                if (context.state.language === 'en') return EN.home.subheading;
                if (context.state.language === 'fr') return FR.home.subheading;
                if (context.state.language === 'de') return DE.home.subheading;
              })()}
              </div>
              <div className="soc_med_bar">
              <Icon className="soc_med_icon" link="https://www.linkedin.com/in/seagh%C3%A1n-collins-0b595a160/" image={LinkedInImg}/>
              <Icon className="soc_med_icon" link="https://www.github.com/IssaShane" image={GithubImg}/>
              </div>
              <div className="bottomPadding"></div>
            </div>
          )}
        </MyContext.Consumer>
      )
  }
}

export default Index;