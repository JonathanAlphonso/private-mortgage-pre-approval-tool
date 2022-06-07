import { object, string, number } from "yup";

const ValidationSteps = {
  stepOneValidation: object().shape({
    firstName: string().required("First Name is required"),
    lastName: string().required("Last Name is required"),
  }),
};

export default ValidationSteps;
