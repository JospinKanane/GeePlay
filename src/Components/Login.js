import React, {useState} from 'react'
import {GoogleLogin, GoogleLogout} from 'react-google-login'

function Login() {
    const [showLoginButton, setShowLoginButton] =useState(true)
    const [showLogoutButton, setShowLogoutButton] = useState(false);
  const clientId = ""
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
    <div id='login'>
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
            buttonText="Logout" 
            onLogoutSuccess={logout} 
          /> : null 
        }
    </div>
  )
}

export default Login