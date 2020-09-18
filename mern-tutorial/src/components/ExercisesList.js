import React from "react";
import { Container} from "react-bootstrap";
import { connect } from "react-redux";

import {
  changeCurrentLocation,
  fetchExercises,
  deleteExerciseFromApi
} from "../store/actions"
import ExerciseListItem from "./ExerciseListItem";

class ExercisesList extends React.Component {
  constructor(props) {
    super(props);
    this.location = "/"; // This is used to specify the current location inside the SPA, so the Navbar is styled properly
  }

  componentDidMount = () => {
    this.props.dispatch(changeCurrentLocation(this.location));
    this.props.dispatch(fetchExercises()); // Fetch from api and save them in the store
  }

  handleDelete = (id) => {
    console.log(id)
    this.props.dispatch(deleteExerciseFromApi(id));
  }

  render() {
    return (
      <Container fluid={"sm"} className="responsive-container pb-5 d-flex flex-column align-items-center" variant="dark">
        <h1 className="text-center my-5">Exercise Tracker</h1>
        {
          this.props.exercises.map(
            (exercise, ind) =>
              (
                <ExerciseListItem 
                onDelete={this.handleDelete} 
                key={exercise._id} 
                exercise={exercise} 
                />
              ))
        }

      </Container>
    );
  }
}

const mapStateToProps = ({ global }) => global;

export default connect(mapStateToProps)(ExercisesList);