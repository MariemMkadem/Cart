/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isConnect, ...rest }) => (
  <Route
    {...rest}
    render={() => (
      isConnect
        ? <Component {...rest} />
        : <Redirect to="/" />
    )}
  />
);


export default PrivateRoute;