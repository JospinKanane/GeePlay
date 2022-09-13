import React, {useState} from 'react';
import {GoogleLogin} from 'react-google-login';
import Spotify from './Spotify';

function Login() {
  const [showLoginButton, setShowLoginButton] =useState(true);
  const clientId = "192676927536-mu33jqt6qnqkshf7n7hkj4b55457eqic.apps.googleusercontent.com"

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