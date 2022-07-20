import * as yup from "yup";

export const registerUserSchema = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  username: yup.string().required("Username is required"),
  email: yup
    .string()
    .required("Email is required")
    .email("Enter a valid email address"),
  password: yup
    .string()
    .min(8, "Min. of 8 characters")
    .max(20, "Max of 16 characters")
    .matches(/^[a-zA-Z0-9_.-]*$/, "Password can only contain alpha numeric"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Password should match"),
});

export const loginUserSchema = yup.object({
  username: yup.string().required("Username is required"),
  password: yup
    .string()
    .min(8, "Min. of 8 characters")
    .max(20, "Max of 16 characters")
    .matches(/^[a-zA-Z0-9_.-]*$/, "Password can only contain alpha numeric"),
});
