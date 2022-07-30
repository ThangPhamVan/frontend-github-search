import React from 'react';
import { Route, RouteProps } from 'react-router-dom';
import { TConfigRouter } from 'src/types/RouterConfigModel';

interface PubicRouteRouteProps extends TConfigRouter {
  component: React.FC<RouteProps>;
}

export default function PubicRoute({
  component: Component,
  layout: Layout,
  ...rest
}: PubicRouteRouteProps) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}
