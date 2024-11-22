import * as yup from "yup";

export const companyValidationSchema = yup.object({
  createdAt: yup
    .string()
    .required("Creation date is required")
    .matches(
      /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/,
      "Invalid ISO 8601 date format"
    ),
  companyName: yup.string().required("Company name is required"),
  logo: yup.string().url("Logo must be a valid URL"),
  email: yup.string().email("Email must be a valid email").required("Email is required"),
  mobileNumber: yup
    .string()
    .matches(/^\+?[1-9]\d{1,14}$/, "Mobile number must be a valid international number")
    .required("Mobile number is required"),
  address: yup.string().required("Address is required"),
  gst_num: yup
    .number()
    .typeError("GST number must be a valid number")
    .integer("GST number must be an integer")
    .required("GST number is required"),
  totalUnpaidBooking: yup
    .string()
    .matches(/^\d+(\.\d{1,2})?$/, "Total unpaid booking must be a valid number in string format")
    .required("Total unpaid booking is required"),
  availableCreditLimit: yup
    .number()
    .min(0, "Available credit limit must be at least 0")
    .required("Available credit limit is required"),
});

