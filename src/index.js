import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { GoogleOAuthProvider } from '@react-oauth/google';


//routing løsning til react som gjør det enkelt å koble sammen og redirecte til hovedsiden 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="688948107871-vnbg54ek2r482kdhpv6on4k5s5udboed.apps.googleusercontent.com">
    <BrowserRouter>
      <Routes>
          <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
    </GoogleOAuthProvider>;
  </React.StrictMode>
);