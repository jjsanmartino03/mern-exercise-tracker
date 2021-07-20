import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker"; // I don't know what is this but I let it here
// TODO: learn about serviceWorker
import "bootstrap/dist/css/bootstrap.min.css";
import dotenv from "dotenv";

import Router from "./Router"; // The Router where all my app is located
import "./css/index.css"; // The css file that has all the styling of the project
import store from "./store";
import { Provider } from "react-redux";

dotenv.config();
export const ApiUrl = process.env.REACT_APP_API_URL;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
