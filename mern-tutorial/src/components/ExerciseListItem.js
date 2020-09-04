import React from "react";
import { Card, Col, Button } from "react-bootstrap";

const uCFirst = (string) => {
  const pat = /^([a-zA-Z])/;
  return string.replace(pat, value => value.toUpperCase());
}

const ExerciseItem = (props) => {
  const date = new Date(props.exercise.date);
  return (
    <Card className="exercise-container w-100 mb-3 bg-info text-white">
      <Card.Header as="h3">{uCFirst(props.exercise.description)}</Card.Header>
      <Card.Body className="d-flex align-items-center pb-0">
        <Card.Text className="w-100">
          Username: <span className="h5 text-dark">{props.exercise.username}</span>
          <br/>
        Duration: {props.exercise.duration} min
        <br />
        Date: {date.toLocaleString("default", { month: "short", year: "numeric", day: "2-digit" })}
        </Card.Text>
        <Button classname="ml-3 shadow-lg" variant="danger" onClick={() => props.onDelete(props.exercise._id)}>Delete</Button>
        <Button className="ml-3" variant="outline-dark">Edit</Button>
      </Card.Body>

    </Card>

  )
}

export default ExerciseItem;