import React from 'react';
import Main from './Components/Main';
import './App.css';
import Login from './Components/Login';
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <div id='app'>
      <div id='login'>
        <Login />
      </div>
      <div>
        <Main />
      </div>
    </div>
  )
}

export default App