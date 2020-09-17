import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import {Link} from "react-router-dom";

const uCFirst = (string) => {
  const pat = /^([a-zA-Z])/;
  return string.replace(pat, value => value.toUpperCase());
}

const ExerciseItem = (props) => {
  const date = new Date(props.exercise.date);
  return (
    <Card className="exercise-item w-100 mb-3 text-white">
      <Card.Header as="h3">{uCFirst(props.exercise.description)}</Card.Header>
      <Card.Body className="d-flex align-items-center pb-0 flex-column flex-md-row">
        <Card.Text className="mb-3 w-100 text-center text-md-left">
          Username: <span className="h5 text-yellow">{props.exercise.username}</span>
          <br/>
        Duration: {props.exercise.duration} min
        <br />
        Date: {date.toLocaleString("default", { month: "short", year: "numeric", day: "2-digit" })}
        </Card.Text >
        {props.disabledButtons ?
        "" : 
      <div className="d-flex align-items-center pb-3 pb-md-0">
        <Button className="ml-3 shadow-lg" variant="danger" onClick={() => props.onDelete(props.exercise._id)}>Delete</Button>
        <Button as={Link} to={`/edit/${props.exercise._id}`} className=" ml-3" variant="outline-primary"
        >Edit</Button>
      </div> 
      }
        
      </Card.Body>

    </Card>

  )
}

export default ExerciseItem;