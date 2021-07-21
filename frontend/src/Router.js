import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { Container, Spinner } from "react-bootstrap";

import Navbar from "./components/Navbar";
import CreateExercise from "./components/CreateExercise";
import CreateUser from "./components/CreateUser";
import ExercisesList from "./components/ExercisesList";
import EditExercise from "./components/EditExercise";

// Navbar component is present in al views
// The main-container wraps all the elements

function MyRouter({ global }) {
  const { openOperation } = global;

  return (
    <Router>
      <Route path="">
        <Navbar />
      </Route>
      <Container fluid className="main-container w-100 h-100 p-0">
        <Route exact path="">
          <ExercisesList />
        </Route>
        <Route exact path="/create">
          <CreateExercise />
        </Route>
        <Route exact path="/signup">
          <CreateUser />
        </Route>
        <Route exact path="/edit/:id" component={EditExercise} />
        {openOperation ? (
          <div className="loading-spinner-container">
            <Spinner animation="grow" variant="info" />
          </div>
        ) : null}
      </Container>
    </Router>
  );
}

const mapStateToProps = ({ global }) => ({ global });

export default connect(mapStateToProps)(MyRouter);
