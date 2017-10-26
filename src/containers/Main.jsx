import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from '../containers/Home.jsx';
import Movie from '../containers/Movie.jsx';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/movies' component={Movie}/>
    </Switch>
  </main>
)
export default Main;
