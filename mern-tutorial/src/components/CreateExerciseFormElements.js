import React from "react";
import { Form, InputGroup, Col } from "react-bootstrap";
import { useField, useFormikContext } from "formik";
import DatePicker from "react-datepicker";

export const MyUsernameField = ({ label, options, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <Form.Group as={Col} md={6}controlId="validationFormikUsername">
      <Form.Label>{label}</Form.Label>
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
        </InputGroup.Prepend>
        <Form.Control as="select"
        className="rounded-right"
          aria-describedby="inputGroupPrepend"
          {...field} {...props}
          isInvalid={meta.error && meta.touched}
          isValid={!meta.error && meta.touched}
        >
          <option value="" disabled >Select your username</option>
          {
            props.users.map((optionValue, index) => (
              <option key={index}>{optionValue}</option>
            ))
          }
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
};

export const DescriptionField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <Form.Group as={Col} md={6} controlId="validationFormikDescription">
      <Form.Label>{label}</Form.Label>
      <Form.Control
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
    </Form.Group>
  );
};

export const DurationField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <Form.Group as={Col} md={6}  controlId="validationFormikDuration">
      <Form.Label>{label}</Form.Label>
      <InputGroup>
        <Form.Control
          aria-describedby="inputGroupAppend"
          {...field} {...props}
          isInvalid={meta.error && meta.touched}
          isValid={!meta.error && meta.touched}
        />
        <InputGroup.Append >
          <InputGroup.Text id="inputGroupAppend" className="rounded-right">minutes</InputGroup.Text>
        </InputGroup.Append>
        <Form.Control.Feedback type="invalid">
          {meta.error}
        </Form.Control.Feedback>
        <Form.Control.Feedback>
          Looks good!
        </Form.Control.Feedback>
      </InputGroup>
    </Form.Group>
  );
}

export const DatePickerField = ({ label, ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(props);
  return (
    <Form.Group as={Col} md={6} controlId="validationFormikDate" >
      <Form.Label>{label}</Form.Label>
      <br />
      <Form.Control
        as={DatePicker}
        {...field}
        {...props}
        selected={(field.value && new Date(field.value)) || null}
        onChange={val => {
          setFieldValue(field.name, val);
        }}
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

    </Form.Group>

  )
}