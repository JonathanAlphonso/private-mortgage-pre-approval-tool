import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";

export const StepOneValidation = {};

const StepOne = () => {
  return (
    <>
      <div>
        <label htmlFor="firstName">First Name</label>
        <Field
          autoComplete="given-name"
          component="input"
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
          component="input"
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

export default StepOne;
