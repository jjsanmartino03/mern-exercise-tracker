import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker'; // I don't know what is this but I let it here
// TODO: learn about serviceWorker
import "bootstrap/dist/css/bootstrap.min.css";

import Router from './Router'; // The Router where all my app is located
import './css/index.css'; // The css file that has all the styling of the project

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
