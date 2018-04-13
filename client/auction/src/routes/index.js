import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Login from './login';
import Signup from './signup'

export default () => {
  <Router>
    <Scene key="root">
      <Scene key="login" component={Login} hideNavBar/>
      <Scene key="signup" component={Signup} hideNavBar/>
    </Scene>
  </Router>

};
