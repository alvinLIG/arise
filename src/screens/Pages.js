import React from 'react';
import { Switch, Route } from 'react-router';

import Dashboard from 'screens/Dashboard';

import * as routes from 'utils/routes';

const Pages = () => {
  return (
    <main>
      <Switch>
        <Route
          exact
          path={routes.INDEX}
          component={Dashboard}
        />
      </Switch>
    </main>
  );
};

export default Pages;
