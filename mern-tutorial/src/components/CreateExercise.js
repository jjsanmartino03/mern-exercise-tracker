import React from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom"

import CreateExerciseForm from "./CreateExerciseForm";
import { changeCurrentLocation, createExercise, fetchUsers, toggleExerciseSent } from "../store/actions";

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
    this.props.dispatch(toggleExerciseSent(false));
  }
  handleSubmit = (exercise) => {
    alert(JSON.stringify(exercise, null, 2));
    this.props.dispatch(createExercise(exercise));
  }
  render() {
    return (
      <Container className="w-75 pb-5">
        <h1 className="text-center my-5">Create an Exercise!</h1>
        <CreateExerciseForm formInitialValues={
          {
            username: "",
            description: '',
            duration: "",
            date: new Date(),
          }}
           onSubmit={this.handleSubmit} users={this.props.global.users} />
        {this.props.exercisesView.sent ? <Redirect to="/" /> : ""}
      </Container>

    )
  }
}

const mapStateToProps = ({ global, exercisesView }) => ({ global, exercisesView });

export default connect(mapStateToProps)(CreateExercise);