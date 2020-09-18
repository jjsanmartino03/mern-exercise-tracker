import React from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom"

import CreateExerciseForm from "./CreateExerciseForm";
import {
  changeCurrentLocation,
  createExercise,
  fetchUsers,
  toggleExerciseSent
} from "../store/actions";

class CreateExercise extends React.Component {
  constructor(props) {
    super(props);
    this.location = "/create";
  }
  componentDidMount = () => {
    this.props.dispatch(changeCurrentLocation(this.location));
    this.props.dispatch(fetchUsers());
  }
  componentWillUnmount = () => {
    this.props.dispatch(toggleExerciseSent(false)); // Restores the initial state of CreateExerciseView on the store
  }
  handleSubmit = (exercise) => {
    this.props.dispatch(createExercise(exercise)); //Post the exercise to the API
  }
  render() {
    return (
      <Container className="responsive-container pb-5">
        <h1 className="text-center my-5">Create an Exercise!</h1>
        <CreateExerciseForm formInitialValues={
          {
            username: "",
            description: '',
            duration: "",
            date: new Date(),
          }}
          onSubmit={this.handleSubmit} users={this.props.global.users} />
        {
        this.props.createExerciseView.sent ? <Redirect to="/" /> : ""
        }
      </Container>

    )
  }
}

const mapStateToProps = ({ global, createExerciseView }) => ({ global, createExerciseView });

export default connect(mapStateToProps)(CreateExercise);