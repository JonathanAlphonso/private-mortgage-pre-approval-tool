import React from "react";
import { ErrorMessage, Field } from "formik";
import { Form } from "react-bootstrap";

export const StepOneValidation = {};

const StepOne = () => {
  return (
    <>
      <Form.Group className="mb-3">
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
        />
        <Form.Text className="text-muted">
          <ErrorMessage className="error" component="div" name="lastName" />
        </Form.Text>
      </Form.Group>

      {/* <div>
        <label htmlFor="firstName">First Name</label>
        <Field />
        <ErrorMessage className="error" component="div" name="firstName" />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <Field

        />
        <ErrorMessage className="error" component="div" name="lastName" />
      </div> */}
    </>
  );
};

export default StepOne;
