import logo from './logo.svg';
import './App.css';
import { React, useState } from 'react';


function App() {

  const [apiResponse, setApiResponse] = useState('');

  const callAPI = () => {
    //console.log("yo");
    fetch("http://localhost:9000/users/getUsers")
        .then(res => res.text())
        .then(res => setApiResponse(res));
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={callAPI}> hi </button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {apiResponse}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
