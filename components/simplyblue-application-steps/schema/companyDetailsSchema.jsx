import * as yup from "yup";

export const companyDetailsSchema = yup.object().shape({
  // --- Business Details ---
  businessType: yup.string().required("Please select a business type"),
  businessName: yup
    .string()
    .trim()
    .required("Registered business name is required"),
  annualTurnOver: yup
    .number()
    .typeError("Gross annual turnover must be a valid number")
    .positive("Turnover must be positive")
    .required("Gross annual turnover is required"),
  regNo: yup
    .string()
    .trim()
    .required("Registration number is required")
    .matches(/^[A-Za-z0-9-]+$/, "Enter a valid registration number"),
  businessProvince: yup.string().required("Please select a province"),
  businessCity: yup.string().required("Please select a city"),
  businessNature: yup.string().required("Please select nature of business"),
  businessIndustry: yup.string().required("Please select business industry"),
  businessCountry: yup
    .string()
    .required("Please select country of registration"),

  // --- Contact Details ---
  businessContact: yup
    .string()
    .trim()
    .required("Cellphone number is required")
    .matches(/^[0-9]{10}$/, "Enter a valid 10-digit cellphone number"),
  businessEmail: yup
    .string()
    .email("Enter a valid email address")
    .required("Email address is required"),
  businessTel: yup
    .string()
    .nullable()
    .matches(/^[0-9]{10}$/, "Enter a valid 10-digit telephone number")
    .notRequired(),

  // --- Trading Address ---
  addressType: yup.string().required("Please select an address type"),
  businessStreet: yup
    .string()
    .trim()
    .required("Street number and name are required"),
  businessUnit: yup.string().nullable().notRequired(),
  businessBuildingName: yup.string().nullable().notRequired(),
  businessSubUrb: yup.string().trim().required("Suburb is required"),
  businessCity: yup.string().required("Please select a city/town"),
  businessProvince: yup.string().required("Please select a province"),
  businessPostalCode: yup
    .string()
    .trim()
    .required("Postal code is required")
    .matches(/^[0-9]{4,6}$/, "Enter a valid postal code"),
});
