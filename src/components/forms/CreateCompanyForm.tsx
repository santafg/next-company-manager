"use client"
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { companyValidationSchema } from "@/form/validations/company.validations";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { addCompany } from "@/redux/slices/company.slice";
import { toastSucess } from "@/utils/functions/helper";

type CompanyFormData = yup.InferType<typeof companyValidationSchema>;

const CreateCompanyForm = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<CompanyFormData>({
    resolver: yupResolver(companyValidationSchema),
  });
  const router = useRouter();
  const dispatch = useAppDispatch();

  const onSubmit = (data: CompanyFormData) => {
    console.log("Form data submitted:", data);

    dispatch(
      addCompany({
        ...data,
        id: new Date().getTime().toString(),
      })
    );
    reset();
    toastSucess("Company added");
    router.push("/companies");
  };

  return (
    <div className="p-4 ">
      <h1 className="text-2xl font-bold mb-4">Create Company</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label
            htmlFor="companyName"
            className="block text-sm font-medium text-gray-700"
          >
            Company Name
          </label>
          <input
            {...register("companyName")}
            type="text"
            id="companyName"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
          {errors.companyName && (
            <p className="text-red-500 text-xs mt-1">
              {errors.companyName.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="logo"
            className="block text-sm font-medium text-gray-700"
          >
            Logo URL
          </label>
          <input
            {...register("logo")}
            type="text"
            id="logo"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
          {errors.logo && (
            <p className="text-red-500 text-xs mt-1">{errors.logo.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            id="email"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="mobileNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Mobile Number
          </label>
          <input
            {...register("mobileNumber")}
            type="text"
            id="mobileNumber"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
          {errors.mobileNumber && (
            <p className="text-red-500 text-xs mt-1">
              {errors.mobileNumber.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700"
          >
            Address
          </label>
          <input
            {...register("address")}
            type="text"
            id="address"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
          {errors.address && (
            <p className="text-red-500 text-xs mt-1">
              {errors.address.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="gst_num"
            className="block text-sm font-medium text-gray-700"
          >
            GST Number
          </label>
          <input
            {...register("gst_num")}
            type="number"
            id="gst_num"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
          {errors.gst_num && (
            <p className="text-red-500 text-xs mt-1">
              {errors.gst_num.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="totalUnpaidBooking"
            className="block text-sm font-medium text-gray-700"
          >
            Total Unpaid Booking
          </label>
          <input
            {...register("totalUnpaidBooking")}
            type="text"
            id="totalUnpaidBooking"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
          {errors.totalUnpaidBooking && (
            <p className="text-red-500 text-xs mt-1">
              {errors.totalUnpaidBooking.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="availableCreditLimit"
            className="block text-sm font-medium text-gray-700"
          >
            Available Credit Limit
          </label>
          <input
            {...register("availableCreditLimit")}
            type="number"
            id="availableCreditLimit"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
          {errors.availableCreditLimit && (
            <p className="text-red-500 text-xs mt-1">
              {errors.availableCreditLimit.message}
            </p>
          )}
        </div>

        <div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateCompanyForm;
