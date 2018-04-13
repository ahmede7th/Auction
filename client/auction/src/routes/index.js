import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Login from './Login';
import Signup from './Signup'
import ViewAuctions from './ViewAuctions';


export default () => (
  <Router>
    <Scene key="root">
      <Scene key="login" component={Login} hideNavBar/>
      <Scene key="signup" component={Signup} hideNavBar initial/>
      <Scene key="ViewAuctions" component={ViewAuctions} hideNaveBar/>
    </Scene>
  </Router>
);
