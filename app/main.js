import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router'
import MainLayout from './containers/MainLayout'
import Films from "./components/Films"

ReactDOM.render((
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={Films} />
    </Route>
  </Router>
), document.getElementById('root'));
