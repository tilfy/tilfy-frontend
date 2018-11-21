import React, { Component } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store'

// LAYOUTS
import LoginLayout from './pages/components/layouts/LoginLayout';
import SiteLayout from './pages/components/layouts/SiteLayout';

// PAGES
import SignIn from './pages/containers/users/SignIn';
import Posts from './pages/containers/users/Posts';
import Error404 from './pages/containers/Error404';

class App extends Component {
  render(){
    return(
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <LoginLayout exact path='/sign_in' component={SignIn} />
            <SiteLayout exact path='/' component={Posts} />
            <Route component={Error404} />
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;