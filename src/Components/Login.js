import React, {useState} from 'react';
import {GoogleLogin} from 'react-google-login';
// import Spotify from './Spotify';
import Logo from '../assets/Logo.png'

function Login() {
  const [showLoginButton, setShowLoginButton] =useState(true);
  const clientId = process.env.REACT_APP_GOOGLE_SECRET_CODE;

  const onLoginSuccess = (res) =>{
    console.log("Login successfully", res.profileObj);
    setShowLoginButton(false);
  }

  const onFailure = (res) =>{
    console.log("Login failed", res);
  }

  return (
    <div id='loginChildren'>
      <img src={Logo} alt='Logo' id='logoPageConnexion'/>
      <h2>Get your favorite songs here</h2>
      {showLoginButton ?
        < GoogleLogin 
          clientId={clientId} 
          buttonText="Login with Google" 
          onSuccess={onLoginSuccess} 
          onFailure={onFailure} 
          cookiePolicy={'single_host_origin'} 
          id='googleButton'
          /> : null 
      }
      {/* <div className="alternative">OR</div>
      <Spotify/> */}
    </div>
  )
}

export default Login