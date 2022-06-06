import React from "react";
import { ErrorMessage, Field, useFormik } from "formik";
import { Form, Button } from "react-bootstrap";

export const StepTwoValidation = {};

const StepTwo = () => {
  return (
    <>
      {/* <Form.Group className="mb-3">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          autoComplete="given-name"
          component="input"
          id="firstName"
          name="firstName"
          placeholder="First Name"
          type="text"
          //type="email"
          //placeholder="Enter email"
          onChange={useFormik.handleChange}
        />
        <Form.Text className="text-muted">
          <ErrorMessage className="error" component="div" name="firstName" />
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          autoComplete="family-name"
          component="input"
          id="lastName"
          name="lastName"
          placeholder="Last Name"
          type="text"
          onChange={useFormik.handleChange}
        />
        <Form.Text className="text-muted">
          <ErrorMessage className="error" component="div" name="lastName" />
        </Form.Text>
      </Form.Group> */}

      <div>
        <label htmlFor="firstName">First Name</label>
        <Field
          autoComplete="given-name"
          component={Form.Control}
          id="firstName"
          name="firstName"
          placeholder="First Name"
          type="text"
        />
        <ErrorMessage className="error" component="div" name="firstName" />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <Field
          autoComplete="family-name"
          component={Form.Control}
          id="lastName"
          name="lastName"
          placeholder="Last Name"
          type="text"
        />
        <ErrorMessage className="error" component="div" name="lastName" />
      </div>
    </>
  );
};

export default StepTwo;
