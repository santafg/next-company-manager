import * as yup from "yup";

export const companyValidationSchema = yup.object({
  companyName: yup.string().required("Company name is required"),
  logo: yup
    .string()
    .url("Logo must be a valid URL")
    .required("Logo is required"),
  email: yup
    .string()
    .email("Email must be a valid email")
    .required("Email is required"),
  mobileNumber: yup.string().required("Mobile number is required"),
  address: yup.string().required("Address is required"),
  gst_num: yup
    .number()
    .typeError("GST number must be a valid number")
    .integer("GST number must be an integer")
    .required("GST number is required"),
  totalUnpaidBooking: yup.string().required("Total unpaid booking is required"),
  availableCreditLimit: yup
    .number()
    .min(0, "Available credit limit must be at least 0")
    .required("Available credit limit is required"),
});
