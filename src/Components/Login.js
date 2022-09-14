import React, {useState} from 'react';
import {GoogleLogin} from 'react-google-login';
import Spotify from './Spotify';

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
      {showLoginButton ?
        < GoogleLogin 
          clientId={clientId} 
          buttonText="Login with Google" 
          onSuccess={onLoginSuccess} 
          onFailure={onFailure} 
          cookiePolicy={'single_host_origin'} 
          /> : null 
      }
      <div className="alternative">OR</div>
      <Spotify/>
    </div>
  )
}

export default Login