import { Scene, Router } from 'react-native-router-flux';
import Login from './login';



export default () => {
  <Router>
    <Scene key="root">
      <Scene key="login" component={Login} hideNavBar/>
    </Scene>
  </Router>

};
