import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import store from '../../../store'

const LoginLayout = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      !store.getState().data.auth.authorize ? (
        <div className="LoginLayout">
          <Component {...matchProps} />
        </div>
      ) : (
        <Redirect to="/"/>
      )
    )} />
  )
};

export default LoginLayout;