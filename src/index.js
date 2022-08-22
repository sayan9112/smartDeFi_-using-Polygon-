import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { APP_ID, SERVER_URL } from './services/MoralisConfig';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

