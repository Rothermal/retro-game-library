/**
 * Created by Mark on 6/20/17.
 */
import React from 'react';
import {Router, Route, hashHistory,IndexRoute} from 'react-router';
import {AddGameContainer, GamesContainer } from './containers';
import {Home, Welcome, About, Contact, Archive} from './components';

// use hash history for easier deployment
const routes = (
  <Router history={hashHistory}>
      <Route path="/" component={Home}>
          <IndexRoute component={Welcome}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
      </Route>
      <Route path="/games" component={Archive}>
          <IndexRoute component={AddGameContainer} />
          <Route path="add" component={GamesContainer}/>
      </Route>
  </Router>
);

export default routes;