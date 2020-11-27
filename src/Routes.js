import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LandingPage from './Pages/LandingPage';
import NewCall from './Pages/NewCall';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/novo-chamado" component={NewCall} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
