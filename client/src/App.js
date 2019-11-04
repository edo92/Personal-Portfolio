import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './assets/css/index.css';

import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { AuthProvider } from './components/helpers/AuthProvider';
import { PrivateRoute } from './components/helpers/PrivateRoute';
import { AuthRoute } from './components/helpers/AuthRoute';

import LandingPage from './pages/Landing';
import DashboardPage from './pages/Dashboard';
import LoginPage from './pages/Auth/Login';
import RegisterPage from './pages/Auth/Register';

class App extends Component {
  render() {
  const history = createBrowserHistory();
    return (
        <AuthProvider>
          <Router history={ history }>
            <div>
              <Switch>
                <Route exact path='/' component={ LandingPage }/>
                <Route exact path='/login' component={ LoginPage }/>
                <Route exact path='/register' component={ RegisterPage }/>
                <Route exact path='/dashboard/:id' component={ DashboardPage }/>
              </Switch>
            </div>
          </Router>
        </AuthProvider>
    );
  };
};

export default App;
