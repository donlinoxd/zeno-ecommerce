// TODO: Delete this schema validation?
import * as yup from "yup";

export const createUserSchema = yup.object({
  body: yup.object({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last name is required"),
    username: yup.string().required("Username is required"),
    email: yup
      .string()
      .email("Enter valid email address")
      .required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password should be atleast 8 characters long")
      .matches(/^[a-zA-Z0-9_.-]*$/, "Password can only contain alpha numeric"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password must match"),
  }),
});

export const userLoginSchema = yup.object({
  body: yup.object({
    username: yup.string().required("Username is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password should be atleast 8 characters long")
      .matches(/^[a-zA-Z0-9_.-]*$/, "Password can only contain alpha numeric"),
  }),
});
