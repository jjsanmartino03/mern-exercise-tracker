import React from "react";
import { Formik, useField, Field } from "formik";
import { Form, Col, Row, InputGroup, Button } from "react-bootstrap";
import * as yup from "yup";
import { connect } from "react-redux";
import "react-datepicker/dist/react-datepicker.css";
import { MyUsernameField, DurationField, DescriptionField, DatePickerField } from "./CreateExerciseFormElements";

const schema = yup.object({
  username: yup.string().min(3, "Username to short").required("Required"),
  description: yup.string().required("Required"),
  duration: yup.number().min(1, "Input a real duration please").required("Required"),
  date: yup.date().required("Required"),
});

const formInitialValues = {
  username: "",
  description: '',
  duration: "",
  date: new Date(),
};


class CreateExerciseForm extends React.Component {
  handleSubmit = (values) => {
    alert(JSON.stringify(values, null, 2))
  }
  render() {
    return (
      <Formik
        validationSchema={schema}
        onSubmit={this.handleSubmit}
        initialValues={formInitialValues}
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
              <Form.Row>
                <MyUsernameField
                  type="select"
                  name="username"
                  placeholder="Username"
                  label="Username"
                  users={this.props.users} />

                <DescriptionField
                  type="text"
                  name="description"
                  placeholder="Description"
                  label="Exercise description" />
              </Form.Row>
              <Form.Row>
                <DurationField
                  type="number"
                  name="duration"
                  placeholder="Duration"
                  label="Duration of the exercise in minutes"
                />

                <DatePickerField
                  name="date"
                  label="Exercise Date"
                  type="date"
                />
              </Form.Row>
              <Form.Row className="justify-content-center">
                <Col md={3}>
                  <Button type="submit" className="w-100">Submit form</Button>
                </Col>

              </Form.Row>

            </Form>
          )}
      </Formik>
    );
  }
}


export default CreateExerciseForm;