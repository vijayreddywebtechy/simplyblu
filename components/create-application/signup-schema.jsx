import * as yup from "yup";

const schema = yup.object().shape({
  preferredName: yup
    .string()
    .required("Preferred name is required")
    .min(3, "Must be at least 3 characters"),
  email: yup
    .string()
    .required("Email is required")
    .email("Enter a valid email address"),
  username: yup.string().required("Username is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Must be at least 8 characters"),
  confirmPassword: yup
    .string()
    .required("Confirm your password")
    .oneOf([yup.ref("password")], "Passwords must match"),
});

export default schema;


