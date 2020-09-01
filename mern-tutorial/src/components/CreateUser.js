import React from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import { Formik, useField } from "formik";
import {Form, Button, InputGroup, Col} from "react-bootstrap";
import * as yup from "yup";

import { changeCurrentLocation, createUser } from "../store/actions";


const UsernameField = ({label, ...props}) => {
  const [field, meta] = useField(props);

  return (
    <Form.Group as={Col} md={6}controlId="validationFormikUsername">
      <Form.Label>{label}</Form.Label>
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
        </InputGroup.Prepend>
        <Form.Control
        className="rounded-right"
          aria-describedby="inputGroupPrepend"
          {...field} {...props}
          isInvalid={meta.error && meta.touched}
          isValid={!meta.error && meta.touched}
        >
        </Form.Control>

        <Form.Control.Feedback type="invalid">
          {meta.error}
        </Form.Control.Feedback>
        <Form.Control.Feedback>
          Looks good!
        </Form.Control.Feedback>
      </InputGroup>
    </Form.Group >
  );
}

const schema = yup.object({
  username: yup.string().required("Input Required").min(3, "It has to be longer than 3 characters"),
})

class CreateUsername extends React.Component {
  constructor(props) {
    super(props);
    this.location = "/signup"
  }
  componentDidMount = () => {
    this.props.dispatch(changeCurrentLocation(this.location));
  }
  handleSubmit = (user) => {
    alert(JSON.stringify(user, null,2));
    this.props.dispatch(createUser(user));
  }
  render() {
    return (
      <Container className="pb-5">
        <h1 className="my-5 text-center">Sign Up!</h1>
        <Formik
        onSubmit={this.handleSubmit}
        validationSchema={schema}
        initialValues={{username:""}}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            touched,
            isValid,
            errors,
          }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Form.Row className="justify-content-center">
                  <UsernameField
                    type="text"
                    name="username"
                    placeholder="Username"
                    label="Input your username" />
                </Form.Row>
                <Form.Row className="justify-content-center">
                <Col md={3}>
                  <Button type="submit" className="w-100">Submit form</Button>
                </Col>

              </Form.Row>


              </Form>
            )}
        </Formik>
      </Container>
    );
  }
}

const mapStateToProps = ({ global }) => global;

export default connect(mapStateToProps)(CreateUsername);