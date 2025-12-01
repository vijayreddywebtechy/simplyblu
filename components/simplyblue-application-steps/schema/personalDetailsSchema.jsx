import * as yup from "yup";

export const personalDetailsSchema = yup.object().shape({
  // --- Personal Details ---
  fname: yup
    .string()
    .trim()
    .required("First name is required")
    .matches(/^[A-Za-z\s]+$/, "Only letters are allowed"),

  lname: yup
    .string()
    .trim()
    .required("Surname is required")
    .matches(/^[A-Za-z\s]+$/, "Only letters are allowed"),

  idNo: yup
    .string()
    .required("ID number is required")
    .matches(/^[0-9]{6,13}$/, "Enter a valid ID number"),

  phoneNumber: yup
    .string()
    .required("Phone number is required")
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits"),

  email: yup
    .string()
    .email("Enter a valid email address")
    .required("Email is required"),

  nationality: yup.string().required("Please select your nationality"),

  citizenship: yup
    .string()
    .required("Please select your country of citizenship"),

  isPublicOfficial: yup
    .string()
    .oneOf(["yes", "no"], "Please select an option")
    .required("Please select whether you are a public official"),

  isSouthAfricaResident: yup
    .string()
    .oneOf(["yes", "no"], "Please select an option")
    .required("Please select whether you are a tax resident outside SA"),

  // --- Residential Details ---
  street: yup.string().trim().required("Street number and name are required"),

  unit: yup.string().trim().nullable(), // Optional field

  buildingName: yup.string().trim().nullable(), // Optional field

  suburbName: yup.string().trim().required("Suburb name is required"),

  city: yup.string().required("Please select a city/town"),

  province: yup.string().required("Please select a province"),

  postalCode: yup
    .string()
    .required("Postal code is required")
    .matches(/^[0-9]{4,6}$/, "Enter a valid postal code"),
});
