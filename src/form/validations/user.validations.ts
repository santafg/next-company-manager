import * as yup from "yup";

export const userValidationSchema = yup.object({
  name: yup.string().required("Name is required"),
  avatar: yup.string().url("Avatar must be a valid URL"),
  email: yup.string().email("Email must be a valid email").required("Email is required"),
  mobileNumber: yup
    .string()
    .matches(/^\+?[1-9]\d{1,14}$/, "Mobile number must be a valid international number")
    .required("Mobile number is required"),
  currency: yup.string().required("Currency is required"),
  isActive: yup.boolean().required("isActive must be specified"),
  totalUnpaidBooking: yup
    .string()
    .matches(/^\d+(\.\d{1,2})?$/, "Total unpaid booking must be a valid number in string format")
    .required("Total unpaid booking is required"),
  availableLimit: yup
    .number()
    .min(0, "Available limit must be at least 0")
    .required("Available limit is required"),
});

