import React from 'react';
import './css/index.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";

import store from "./store/index";
import CreateExercise from './components/CreateExercise';
import CreateUser from "./components/CreateUser";
import ExercisesList from "./components/ExercisesList";
import EditExercise from "./components/EditExercise";

function MyRouter() {
  return (
    <Provider store={store}>
      <Router>
        <Route path="">
          <Navbar />
        </Route>
        <Route exact path="/">
          <ExercisesList />
        </Route>
        <Route exact path="/create">
          <CreateExercise />
        </Route>
        <Route exact path="/signup">
          <CreateUser />
        </Route>
        <Route exact path="/edit/:id" component={EditExercise} />
      </Router>
    </Provider>
  )
}

export default MyRouter;
