import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from '../containers/Home.jsx';
import Roster from '../containers/Roster.jsx';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/roster' component={Roster}/>
    </Switch>
  </main>
)
export default Main;
