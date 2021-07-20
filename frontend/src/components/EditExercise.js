import React from "react";
import { connect } from "react-redux";
import { Container, } from "react-bootstrap";
import { Redirect } from "react-router-dom";

import {
  changeCurrentLocation,
  fetchUsers,
  fetchExerciseById,
  setEditViewToDefault,
  updateExerciseById
} from "../store/actions";
import PreviewExercise from "./ExerciseListItem";
import CreateExerciseForm from "./CreateExerciseForm";

class EditExercise extends React.Component {
  constructor(props) {
    super(props);
    this.location = "/edit";
  }

  componentDidMount = () => {
    this.props.dispatch(changeCurrentLocation(this.location)); // Navbar styling

    this.props.dispatch(fetchExerciseById(this.props.match.params.id));// Fetch an exercise from API with the id passed in the URL

    this.props.dispatch(fetchUsers()); // This is done to update the list of usernames showed when creating or editing an exercise
  }

  componentWillUnmount = () => {
    this.props.dispatch(setEditViewToDefault()); // This is done so the next time the user tries to edit an exercise, the edit view state is set to default
  }

  handleSubmit = (exercise) => {
    this.props.dispatch(updateExerciseById(this.props.editExerciseView.exercise._id, exercise));
  }

  render() {
    const exercise = this.props.editExerciseView.exercise;
    const loaded = this.props.editExerciseView.loaded;
    return (
      <Container className="responsive-container">
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
          "Connection not working" // This is displayed until the exercise is fetched
        }
        {
        this.props.editExerciseView.edited ? <Redirect to="/" /> : ""
        }

      </Container>

    )
  }
}

const mapStateToProps = ({ global, editExerciseView }) => ({
  global,
  editExerciseView,
})

export default connect(mapStateToProps)(EditExercise);    
