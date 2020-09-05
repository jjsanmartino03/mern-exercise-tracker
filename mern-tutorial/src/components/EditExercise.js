import React from "react";
import { connect } from "react-redux";
import { Container, } from "react-bootstrap";
import {Redirect} from "react-router-dom";

import { changeCurrentLocation, fetchUsers, fetchExerciseById, setEditViewToDefault, updateExerciseById } from "../store/actions";
import PreviewExercise from "./ExerciseListItem";
import CreateExerciseForm from "./CreateExerciseForm";

class EditExercise extends React.Component {
  constructor(props) {
    super(props);
    this.location = "/edit";
  }
  componentDidMount = () => {
    this.props.dispatch(changeCurrentLocation(this.location));
    this.props.dispatch(fetchExerciseById(this.props.match.params.id));
    this.props.dispatch(fetchUsers());
  }
  componentWillUnmount = () => {
    this.props.dispatch(setEditViewToDefault());
  }
  handleSubmit = (exercise) => {
    this.props.dispatch(updateExerciseById(this.props.editView.exercise._id, exercise));
  }
  render() {
    const exercise = this.props.editView.exercise;
    const loaded = this.props.editView.loaded;
    return (
      <Container className="w-75">
        <h1 className="text-center my-5">Edit this exercise</h1>
        {loaded ?
          <Container>
            <PreviewExercise disabledButtons={true} exercise={exercise} />
            <CreateExerciseForm formInitialValues={
              {
                username: exercise.username,
                description: exercise.description,
                duration: exercise.duration,
                date: new Date(exercise.date),
              }}
              onSubmit={this.handleSubmit} users={this.props.global.users} />
          </Container>



          :
          "Connection not working"}
          {this.props.editView.edited ? <Redirect to="/" /> : ""}

      </Container>

    )
  }
}

const mapStateToProps = ({ global, editView }) => ({
  global,
  editView
})

export default connect(mapStateToProps)(EditExercise);    
