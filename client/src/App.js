import React, { Component } from 'react'
import 'antd/dist/antd.css'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import { AuthProvider } from './components/helpers/AuthProvider'
import { PrivateRoute } from './components/helpers/PrivateRoute'
import { AuthRoute } from './components/helpers/AuthRoute'

import LandingPage from './pages/Landing'
import ResumePage from './pages/Resume'
import MyWork from './pages/MyWork'
import Admin from './pages/Admin'
import AdminSignin from './pages/AdminLogin'

class App extends Component {
  render() {
  const history = createBrowserHistory();
    return (
        <AuthProvider>
          <Router history={ history }>
            <div>
              <Switch>
                <Route exact path='/' component={ LandingPage }/>
                <Route exact path='/resume' component={ ResumePage }/>
                <Route exact path='/mywork' component={ MyWork }/>
                <PrivateRoute exact path='/admin' component={ Admin }/>
                <AuthRoute exact path='/admin-signin' component={ AdminSignin }/>
              </Switch>
            </div>
          </Router>
        </AuthProvider>
    );
  };
};

export default App;
