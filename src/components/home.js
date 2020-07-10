import React from 'react';
import './home.css';
import { MyContext } from '../context';
import Icon from './icon';

import LinkedInImg from '../img/LI2.png';
import GithubImg from '../img/GH2.png';

import * as EN from '../translations/en.json';
import * as FR from '../translations/fr.json';
import * as DE from '../translations/de.json';

class Home extends React.Component {
  render() {
    return (<MyContext.Consumer>
      {(context) => (
    <div className="webpage_body"><div className="home_background"><div className="page">
      <div className="title_heading">Seaghán Elliott Walter Collins</div>
      <div className="subtitle">{(() => {
        if (context.state.language === 'en') return EN.home.subheading;
        if (context.state.language === 'fr') return FR.home.subheading;
        if (context.state.language === 'de') return DE.home.subheading;
      })()}</div>
      <div className="subtitle">{EN.home.contact}</div>
      <div className="soc_med_bar">
        <Icon className="soc_med_icon" link="https://www.linkedin.com/in/seagh%C3%A1n-collins-0b595a160/" image={LinkedInImg}/>
        <Icon className="soc_med_icon" link="https://www.github.com/IssaShane" image={GithubImg}/>
      </div>
    </div></div></div>
      )}
    </MyContext.Consumer>);
  }
};

export default Home;