import { Scene, Router } from 'react-native-router-flux';
import Login from './login';



export default () => {
  <Router>
    <Scene>
      <Scene key="login" component={Login} hideNaveBar />
    </Scene>
  </Router>

};
