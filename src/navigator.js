import React from 'react';
import ReactDOM from 'react-dom';
import './navigator.css';
import Index from './components/index';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { Redirect } from 'react-router';

import Projects from './components/Projects';
import { MyContext, MyProvider } from './context';
import { returnStatement } from '@babel/types';

import Experience from './components/Experience';
import Education from './components/Education';
import About from './components/about';
import Home from './components/home';

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
        <Link to="Home" className="pageNav">{(() => {
          if (context.state.language === 'en') return "Home";
          else if (context.state.language === 'fr') return "Acceuil";
          else if (context.state.language === 'de') return "Start";
        })()}</Link>
        <Link to="Experience" className="pageNav">{(() => {
          if (context.state.language === 'en') return "Experience";
          else if (context.state.language === 'fr') return "Expérience";
          else if (context.state.language === 'de') return "Erfahrung";
        })()}</Link>
        <Link to="Education" className="pageNav">{(() => {
          if (context.state.language === 'en') return "Education";
          else if (context.state.language === 'fr') return "Education";
          else if (context.state.language === 'de') return "Ausbildung";
        })()}
        </Link>
        <Link to="About" className="pageNav">{(() => {
          if (context.state.language === 'en') return "About Me";
          else if (context.state.language === 'fr') return "Biographie";
          else if (context.state.language === 'de') return "Über Mich";
        })()}
        </Link>
        <Link to="Projects" className="pageNav">{(() => {
          if (context.state.language === 'en') return "Projects";
          else if (context.state.language === 'fr') return "Projects";
          else if (context.state.language === 'de') return "Projekten";
        })()}</Link>
      </div>

      <Redirect from="/" exact to="/Home" />
      <Route path="/Home" component={Home} />
      <Route path="/Experience" component={Experience} />
      <Route path="/Projects" component={Projects} />
      <Route path="/Education" component={Education} />
      <Route path="/About" component={About} />
      
    </Router>
    </div>
    )}
    </MyContext.Consumer>
    );
  }
};

export default navigator;