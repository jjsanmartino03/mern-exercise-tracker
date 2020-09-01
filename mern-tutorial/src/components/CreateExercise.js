import React from "react";
import { Container } from "react-bootstrap";
import {connect} from "react-redux";

import CreateExerciseForm from "./CreateExerciseForm";
import {changeCurrentLocation} from "../store/actions";

class CreateExercise extends React.Component {
  constructor(props){
    super(props);
    this.location = "/create";
  }
  componentDidMount = () => {
    this.props.dispatch(changeCurrentLocation(this.location));
  }
  render() {
    return (
      <Container className="pb-5">
        <h1 className="text-center my-5">Create an Exercise!</h1>
        <CreateExerciseForm users={this.props.users}/>
      </Container>

    )
  }
}

const mapStateToProps = ({global}) => global;

export default connect(mapStateToProps)(CreateExercise);