import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
// import { Debug } from "./Debug";
import Wizard from "./Wizard";
//import ValidationSteps from "./components/FormOne/ValidationSteps";
//import StepOne from "./components/FormOne/StepOne";
import Button from "react-bootstrap/Button";
import FormOne from "./components/FormOne/FormOne";
import FormTwo from "./components/FormTwo/FormTwo";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Wizard is a single Formik instance whose children are each page of the
// multi-step form. The form is submitted on each forward transition (can only
// progress with valid input), whereas a backwards step is allowed with
// incomplete data. A snapshot of form state is used as initialValues after each
// transition. Each page has an optional submit handler, and the top-level
// submit is called when the final page is submitted.

export const WizardStep = ({ children }) => children;

//console.log(ValidationSteps);

function App() {
  const [form, setForm] = useState(null);

  return (
    <div>
      <h1>Automatic Private Mortgage Pre-Approval</h1>
      <p>
        Get a real private mortgage pre-approval 100% online
        <br /> Approval documents e-mailed to you directly
      </p>
      {form === null && (
        <>
          <Button onClick={() => setForm(1)}>Buy a House</Button>
          <Button onClick={() => setForm(2)}>Refinance a Mortgage</Button>
        </>
      )}

      {form === 1 && <FormOne />}
      {form === 2 && <FormTwo />}
    </div>
  );
}

export default App;
