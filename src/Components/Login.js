import React, {useState} from 'react'
import {GoogleLogin, GoogleLogout} from 'react-google-login'

function Login() {
    const [showLoginButton, setShowLoginButton] =useState(true)
    const [showLogoutButton, setShowLogoutButton] = useState(false);
  const clientId = "192676927536-mu33jqt6qnqkshf7n7hkj4b55457eqic.apps.googleusercontent.com"
  const onLoginSuccess = (res) =>{
    console.log("Login successfully", res.profilObject);
    setShowLoginButton(false);
    setShowLogoutButton(true);
  }
  const onFailure = (err) =>{
    console.log("Login failed", err);
  }
  const logout =()=>{
    alert("Logout successfully");
    setShowLogoutButton(false);
    setShowLoginButton(true);
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
        < GoogleLogout 
          clientId={clientId} 
          buttonText="Sign out" 
          onLogoutSuccess={logout} 
        /> : null 
      }
    </div>
  )
}

export default Login