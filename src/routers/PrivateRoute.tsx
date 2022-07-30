import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { isLogin } from 'src/helper';
import { ROUTING_CONFIG } from './constants';
interface PrivateRouteProps extends RouteProps {
  component: React.FC<RouteProps>;
}

export default function PrivateRoute({
  component: Component,
  ...rest
}: PrivateRouteProps) {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: ROUTING_CONFIG.LOGIN,
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
}
