import React from "react";
import { Form, InputGroup, Col } from "react-bootstrap";
import { useField } from "formik";

export const MyUsernameField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  console.log(meta.error);
  return (
    <Form.Group controlId="validationFormikUsername">
      <Form.Label>{label}</Form.Label>
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
        </InputGroup.Prepend>
        <Form.Control
          aria-describedby="inputGroupPrepend"
          {...field} {...props}
          isInvalid={meta.error && meta.touched}
          isValid={!meta.error && meta.touched}
        />
        <Form.Control.Feedback type="invalid">
          {meta.error}
        </Form.Control.Feedback>
        <Form.Control.Feedback>
          "Looks good!"
        </Form.Control.Feedback>
      </InputGroup>
    </Form.Group>
  );
};

export const DescriptionField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <Form.Group controlId="validationFormikDescription">
      <Form.Label>{label}</Form.Label>
      <Form.Control
          {...field} {...props}
          isInvalid={meta.error && meta.touched}
          isValid={!meta.error && meta.touched}
          >
      </Form.Control>
    </Form.Group>
  );
};