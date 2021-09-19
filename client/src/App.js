import './App.css';
import {useState, React} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import LandingPage from './Components/LandingPage';
import LoginPage from './Components/LoginPage';
import RegisterPage from './Components/RegisterPage';
import HomePage from './Components/HomePage';

import * as ROUTES from './constants/routes';

function App() {

  // session handling
  // const [authUser, setAuthUser] = useState(null);
  
  // const [apiResponse, setApiResponse] = useState('');
  // used to toggle between home page views - volunteer || organization
  const [userType, setUserType] = useState('volunteer');

  // const callAPI = () => {
  //   //console.log("yo");
  //   fetch("http://localhost:9000/users/getUsers")
  //       .then(res => res.text())
  //       .then(res => setApiResponse(res));
  // }

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={ROUTES.VOLUNTEERSIGNIN}>
            <LoginPage userType='Volunteer'/>
          </Route>
          <Route path={ROUTES.VOLUNTEERSIGNUP}>
            <RegisterPage userType='Volunteer'/>
          </Route>
          <Route path={ROUTES.ORGSIGNIN}>
            <LoginPage userType='Organization'/>
          </Route>
          <Route path={ROUTES.ORGSIGNUP}>
            <RegisterPage userType='Organization'/>
          </Route>
          <Route path={ROUTES.HOME}>
            <HomePage userType={userType} />
          </Route>
          <Route path={ROUTES.LANDING}>
            <LandingPage/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
