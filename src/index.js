import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

import Projects from './components/Projects';
import { MyProvider } from './context';

const router = (
  <MyProvider>
    <Router>
      <div className="linkBar">
        <Link to="/" className="pageNav">___</Link>
        <Link to="Projects" className="pageNav">___</Link>
      </div>

      <Route exact path="/" component={App} />
      <Route path="/Projects" component={Projects} />
    </Router>
  </MyProvider>
)

ReactDOM.render(router, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
