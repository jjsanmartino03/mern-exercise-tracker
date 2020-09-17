import React from "react";
import { Container, Row } from "react-bootstrap";
import { connect } from "react-redux";

import { changeCurrentLocation, fetchExercises, deleteExerciseFromApi } from "../store/actions"
import ExerciseItem from "./ExerciseListItem";

class ExercisesList extends React.Component {
  constructor(props) {
    super(props);
    this.location = "/";
  }
  componentDidMount = () => {
    this.props.dispatch(changeCurrentLocation(this.location));
    this.props.dispatch(fetchExercises());
  }
  handleDelete = (id) => {
    console.log(id)
    this.props.dispatch(deleteExerciseFromApi(id));
  }
  render() {
    return (
      <Container fluid className="index-container w-100 p-0">
      <Container fluid={"sm"} className="exercises-container pb-5 d-flex flex-column align-items-center" variant="dark">
        <h1 className="text-center my-5">Exercise Tracker</h1>
          {this.props.exercises.map((exercise, ind) => (
            <ExerciseItem onDelete={this.handleDelete} key={exercise._id || ind } exercise={exercise} />
          ))}

      </Container>
      </Container>
    );
  }
}

const mapStateToProps = ({ global }) => global;

export default connect(mapStateToProps)(ExercisesList);