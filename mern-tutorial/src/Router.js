import React from 'react';
import './css/index.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import {Provider} from "react-redux";

import store from "./store/index";
import CreateExercise from './components/CreateExercise';

function MyRouter() {
  return (
    <Provider store={store}>
    <Router>
      <Route path="">
        <Navbar/>
      </Route>
      <Route path="/create">
        <CreateExercise/>
      </Route>
    </Router>
    </Provider>
  )
}

export default MyRouter;
