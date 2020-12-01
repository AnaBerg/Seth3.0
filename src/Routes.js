import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LandingPage from './Pages/LandingPage';
import NewCall from './Pages/NewCall';
import LoginInfo from './Components/LoginInfo';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/novo-chamado" component={NewCall} />
        <Route path="/test" component={LoginInfo} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
