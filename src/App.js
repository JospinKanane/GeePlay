import React from 'react'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Main from './Components/Main'
import './App.css'
import Login from './Components/Login'

function App() {
  return (
    <div id='app'>
      <Login />
      <div id='container'>
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  )
}

export default App