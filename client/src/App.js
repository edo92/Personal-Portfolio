import React, { Component } from 'react';
import 'antd/dist/antd.css'; 

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LandingPage from './pages/Landing'
import ResumePage from './pages/Resume'
import MyWork from './pages/MyWork'

class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Switch>
              <Route exact path='/' component={ LandingPage }/>
              <Route exact path='/resume' component={ ResumePage }/>
              <Route exact path='/mywork' component={ MyWork }/>
            </Switch>
          </div>
        </Router>
    );
  };
};

export default App;
