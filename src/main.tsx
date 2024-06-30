import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {GoogleReCaptchaProvider} from "@google-recaptcha/react";
import React from 'react';
import "./i18n";
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GoogleReCaptchaProvider
        type="v2-checkbox"
        siteKey="6LfbILcpAAAAAG0cAl2moRd0gylX4PvQu1u7FY4y"
    >
      <App />
    </GoogleReCaptchaProvider>
  </React.StrictMode>,
)