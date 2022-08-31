import React from 'react';
import Header from './Components/Header';
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
      <div id='container'>
        <Header />
        <Main />
      </div>
    </div>
  )
}

export default App