import React from "react";
<<<<<<< HEAD:src/components/FormOne/StepOne.js
import { ErrorMessage, Field, useFormik } from "formik";
import { Form, Button, FormText } from "react-bootstrap";
=======
import { ErrorMessage, Field, Form, Formik } from "formik";
>>>>>>> parent of 6a4a1fa (Experimenting with react bootstrap):src/components/StepOne.js

export const StepOneValidation = {};

const StepOne = () => {
  return (
    <>
<<<<<<< HEAD:src/components/FormOne/StepOne.js
      {/* <Form.Group className="mb-3">
        <Form.Label>First Name</Form.Label>
        <Form.Control
=======
      <div>
        <label htmlFor="firstName">First Name</label>
        <Field
>>>>>>> parent of 6a4a1fa (Experimenting with react bootstrap):src/components/StepOne.js
          autoComplete="given-name"
          component="input"
          id="firstName"
          name="firstName"
          placeholder="First Name"
          type="text"
<<<<<<< HEAD:src/components/FormOne/StepOne.js
          //type="email"
          //placeholder="Enter email"
          onChange={useFormik.handleChange}
=======
>>>>>>> parent of 6a4a1fa (Experimenting with react bootstrap):src/components/StepOne.js
        />
        <ErrorMessage className="error" component="div" name="firstName" />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <Field
          autoComplete="family-name"
          component="input"
          id="lastName"
          name="lastName"
          placeholder="Last Name"
          type="text"
          onChange={useFormik.handleChange}
        />
<<<<<<< HEAD:src/components/FormOne/StepOne.js
        <Form.Text className="text-muted">
          <ErrorMessage className="error" component="div" name="lastName" />
        </Form.Text>
      </Form.Group> */}

      <div>
        <label htmlFor="firstName">First Name</label>
        <Field
          autoComplete="given-name"
          // component={Form.Control}
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

      <Button type="submit">Submit form</Button>
=======
        <ErrorMessage className="error" component="div" name="lastName" />
      </div>
>>>>>>> parent of 6a4a1fa (Experimenting with react bootstrap):src/components/StepOne.js
    </>
  );
};

export default StepOne;
