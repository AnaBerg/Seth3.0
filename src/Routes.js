import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LandingPage from './Pages/LandingPage';
import NewCall from './Pages/NewCall';
import Call from './Pages/Call';
import Test from './Pages/LandingPage/Components/PortalCall';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/novo-chamado" component={NewCall} />
        <Route path="/chamado" component={Call} />
        <Route path="/test" component={Test} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
