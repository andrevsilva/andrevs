import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import App from './app';

ReactDOM.render(
  <React.StrictMode>
    <App style={{background: "#312045"}} />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
