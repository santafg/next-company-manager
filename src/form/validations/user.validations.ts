import * as yup from "yup";

export const userValidationSchema = yup.object({
  name: yup.string().required("Name is required"),
  avatar: yup.string().url("Avatar must be a valid URL"),
  email: yup
    .string()
    .email("Email must be a valid email")
    .required("Email is required"),
  mobileNumber: yup.string().required("Mobile number is required"),
  currency: yup.string().required("Currency is required"),
  isActive: yup.string().required("Active must be specified"),
  totalUnpaidBooking: yup.string().required("Total unpaid booking is required"),
  availableLimit: yup
    .number()
    .min(0, "Available limit must be at least 0")
    .required("Available limit is required"),
  companyId: yup.string().required("Company is Required"),
});
