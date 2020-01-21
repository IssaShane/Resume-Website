import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Icon from './components/icon';
import * as serviceWorker from './serviceWorker';

import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

import Nav from './navigator';

import Projects from './components/Projects';
import { MyProvider } from './context';

const router = (
  <MyProvider>
    
    <Nav/>
    
  </MyProvider>
)

ReactDOM.render(router, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
