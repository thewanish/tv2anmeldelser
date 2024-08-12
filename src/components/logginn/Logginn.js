import './Logginn.css';

import React from 'react'
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";


// google logg inn
const Logginn = () => {
  return (
    
    <div className="form">
        <h1>Login</h1>
        <input type="text" placeholder="brukernavn" />
        <input type="password" placeholder="passord" />

        <div className="login-knapp">Logg inn</div>

        <p className="text">Google</p>

        

        <div className="google-login">
        
        <GoogleLogin
        onSuccess={credentialResponse => {
          const credentialResponseDecoded = jwtDecode(
            credentialResponse.credential
          );
            console.log(credentialResponseDecoded);
          
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />
      </div>
        
        
        
    </div>
)
}

export default Logginn



