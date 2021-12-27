import React from 'react';
import {render} from 'react-dom';
import "./Global.css"
import App from './App';
import AuthProvider from './Apis/AuthContent';
import AudioContextProvider from './Apis/AudioContext';


render(
  <AudioContextProvider>
    <AuthProvider>
      <App />
    </AuthProvider>
  </AudioContextProvider>,
  document.getElementById("root")
);