import React from "react";
import Icon from './icon';
import * as FR from '../translations/fr.json';
import * as DE from '../translations/de.json';
import * as EN from '../translations/en.json';

import { MyContext } from '../context';

class Index extends React.Component {
  render() {
      return (
        <MyContext.Consumer>
          {(context) => (
            <div>
              <button className="langTab" onClick={context.changeLang} data-language={'en'}>EN</button>
              <button className="langTab" onClick={context.changeLang} data-language={'fr'}>FR</button>
              <button className="langTab" onClick={context.changeLang} data-language={'de'}>DE</button>
              <button className="headerTab" onClick={this.props.scrollToEducation}>{(() => {
                if (context.state.language === 'en') return EN.nav.education;
                else if (context.state.language === 'fr') return FR.nav.education;
                else if (context.state.language === 'de') return DE.nav.education;
              })()}
              </button>
              <button className="headerTab" onClick={this.props.scrollToExperience}>{(() => {
                if (context.state.language === 'en') return EN.nav.experience;
                else if (context.state.language === 'fr') return FR.nav.experience;
                else if (context.state.language === 'de') return DE.nav.experience;
              })()}
              
              </button>
              <div className="title_heading">Seaghán Elliott Walter Collins</div>
              <div className="subtitle">{(() => {
                if (context.state.language === 'en') {
                  return EN.home.subheading;
                }
                if (context.state.language === 'fr') {
                  return FR.home.subheading;
                }
                if (context.state.language === 'de') {
                  return DE.home.subheading;
                }
              })()}
              </div>
            </div>
          )}
        </MyContext.Consumer>
      )
  }
}

export default Index;