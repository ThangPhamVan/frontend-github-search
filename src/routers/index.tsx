import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import PubicRoute from './PublicRoute';
import NotFoundPage from 'src/pages/notFound';
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from './config';
const RouterComponent: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        {PUBLIC_ROUTES.map((route) => (
          <PubicRoute key={route.path} {...route} />
        ))}
        {PRIVATE_ROUTES.map((route) => (
          <PrivateRoute key={route.path} {...route} />
        ))}
        <Route path="*" render={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default RouterComponent;
