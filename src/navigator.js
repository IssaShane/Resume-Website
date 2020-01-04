import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Index from './components/index';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

import Projects from './components/Projects';
import { MyProvider } from './context';

const routing = (
  <MyProvider>
    <Index />
  </MyProvider>
)

export default routing;