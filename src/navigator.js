import React from 'react';
import ReactDOM from 'react-dom';
import './navigator.css';
import Index from './components/index';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

import Projects from './components/Projects';
import { MyContext, MyProvider } from './context';
import { returnStatement } from '@babel/types';

class navigator extends React.Component {
  render () {
    return (
      <MyContext.Consumer>
      {(context) => (
        <div className="topNavBar">
        <button className="langTab" onClick={context.changeLang} data-language={'en'}>EN</button>
        <button className="langTab" onClick={context.changeLang} data-language={'fr'}>FR</button>
        <button className="langTab" onClick={context.changeLang} data-language={'de'}>DE</button>
      <Router>
      <div className="linkBar">
        <Link to="/" className="pageNav">{(() => {
          if (context.state.language === 'en') return "Resume";
          else if (context.state.language === 'fr') return "CV";
          else if (context.state.language === 'de') return "Lebenslauf";
        })()}</Link>
        <Link to="Projects" className="pageNav">{(() => {
          if (context.state.language === 'en') return "Projects";
          else if (context.state.language === 'fr') return "Projects";
          else if (context.state.language === 'de') return "Projekten";
        })()}</Link>
      </div>

      <Route exact path="/" component={App} />
      <Route path="/Projects" component={Projects} />
      
    </Router>
    </div>
    )}
    </MyContext.Consumer>
    );
  }
};

export default navigator;