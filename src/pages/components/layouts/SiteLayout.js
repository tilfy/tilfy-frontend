import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import store from '../../../store'

const SiteLayout = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      store.getState().data.auth.authorize ? (
        <div className="SiteLayout">
          <div className="Header">
            HEADER
          </div>
          <Component {...matchProps} />
          <div className="Footer">
            FOOTER
          </div>
        </div>
      ) : (
        <Redirect to="/sign_in"/>
      )
    )} />
  )
};

export default SiteLayout;