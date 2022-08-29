import React, {useState} from 'react';
import {GoogleLogin} from 'react-google-login';
import {GoogleLogout} from 'react-google-login';

function Login() {
  const [showLoginButton, setShowLoginButton] =useState(true)
  const [showLogoutButton, setShowLogoutButton] = useState(false);

  const clientId = "192676927536-mu33jqt6qnqkshf7n7hkj4b55457eqic.apps.googleusercontent.com"

  const onLoginSuccess = (res) =>{
    console.log("Login successfully", res.profileObj);
    setShowLoginButton(false);
    setShowLogoutButton(true);
  }

  const onFailure = (res) =>{
    console.log("Login failed", res);
  }

  const onLogoutSuccess =()=>{
    alert("Logout successfully");
    setShowLoginButton(true);
    setShowLogoutButton(false);
  }

  return (
    <div id='login-children'>
      {showLoginButton ?
        < GoogleLogin 
          clientId={clientId} 
          buttonText="Login with Google" 
          onSuccess={onLoginSuccess} 
          onFailure={onFailure} 
          cookiePolicy={'single_host_origin'} 
          /> : null 
      }

      {showLogoutButton ?
        <GoogleLogout
        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
        buttonText="Logout"
        onLogoutSuccess={onLogoutSuccess}>
        </GoogleLogout> : null
      }
    </div>
  )
}

export default Login