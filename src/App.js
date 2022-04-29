import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
// import { Debug } from "./Debug";
import Wizard from "./Wizard";
import ValidationSteps from "./ValidationSteps";
import StepOne from "./components/StepOne";
import Button from "react-bootstrap/Button";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Wizard is a single Formik instance whose children are each page of the
// multi-step form. The form is submitted on each forward transition (can only
// progress with valid input), whereas a backwards step is allowed with
// incomplete data. A snapshot of form state is used as initialValues after each
// transition. Each page has an optional submit handler, and the top-level
// submit is called when the final page is submitted.

export const WizardStep = ({ children }) => children;
//
console.log(ValidationSteps);

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

      {form === 1 && (
        <Wizard
          initialValues={{
            email: "",
            firstName: "",
            lastName: "",
          }}
          onSubmit={async (values) =>
            sleep(300).then(() => console.log("Wizard submit", values))
          }
        >
          <WizardStep
            onSubmit={() => console.log("Step1 onSubmit")}
            validationSchema={ValidationSteps.stepOneValidation}
          >
            <StepOne />
          </WizardStep>

          <WizardStep
            onSubmit={() => console.log("Step1 onSubmit")}
            validationSchema={Yup.object({
              firstName: Yup.string().required("required"),
              lastName: Yup.string().required("required"),
            })}
          >
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
              <ErrorMessage
                className="error"
                component="div"
                name="firstName"
              />
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
          </WizardStep>
          <WizardStep
            onSubmit={() => console.log("Step2 onSubmit")}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("Invalid email address")
                .required("required"),
            })}
          >
            <div>
              <label htmlFor="email">Email</label>
              <Field
                autoComplete="email"
                component="input"
                id="email"
                name="email"
                placeholder="Email"
                type="text"
              />
              <ErrorMessage className="error" component="div" name="email" />
            </div>
          </WizardStep>
        </Wizard>
      )}
    </div>
  );
}

export default App;
