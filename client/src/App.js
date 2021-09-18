import logo from './logo.svg';
import './App.css';
import {useEffect, useState, React} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App(props) {

  // session handling
  const [authUser, setAuthUser] = React.useState(null);
  
  const [apiResponse, setApiResponse] = useState('');

  const callAPI = () => {
    //console.log("yo");
    fetch("http://localhost:9000/users/getUsers")
        .then(res => res.text())
        .then(res => setApiResponse(res));
  }

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={ROUTES.SIGNIN}>
            <LoginPage/>
          </Route>
          <Route path={ROUTES.SIGNUP}>
            <RegisterPage/>
          </Route>
          <Route path={ROUTES.LANDING}>
            <LandingPage/>
          </Route>
          <Route>
            <
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
