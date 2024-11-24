"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { companyValidationSchema } from "@/form/validations/company.validations";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { addCompany } from "@/redux/slices/company.slice";
import { toastSucess } from "@/utils/functions/helper";
import ErrorMessage from "../errors/ErrorMessage";

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
            className="form-label"
          >
            Company Name
          </label>
          <input
            {...register("companyName")}
            type="text"
            id="companyName"
            className="form-input"
          />
          <ErrorMessage message={errors.companyName?.message} />
        </div>

        <div>
          <label
            htmlFor="logo"
            className="form-label"
          >
            Logo URL
          </label>
          <input
            {...register("logo")}
            type="text"
            id="logo"
            className="form-input"
          />
          <ErrorMessage message={errors.logo?.message} />
        </div>

        <div>
          <label
            htmlFor="email"
            className="form-label"
          >
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            id="email"
            className="form-input"
          />
          <ErrorMessage message={errors.email?.message} />
        </div>

        <div>
          <label
            htmlFor="mobileNumber"
            className="form-label"
          >
            Mobile Number
          </label>
          <input
            {...register("mobileNumber")}
            type="text"
            id="mobileNumber"
            className="form-input"
          />
          <ErrorMessage message={errors.mobileNumber?.message} />
        </div>

        <div>
          <label
            htmlFor="address"
            className="form-label"
          >
            Address
          </label>
          <input
            {...register("address")}
            type="text"
            id="address"
            className="form-input"
          />
          <ErrorMessage message={errors.address?.message} />
        </div>

        <div>
          <label
            htmlFor="gst_num"
            className="form-label"
          >
            GST Number
          </label>
          <input
            {...register("gst_num")}
            type="number"
            id="gst_num"
            min={0}
            className="form-input"
          />
          <ErrorMessage message={errors.gst_num?.message} />
        </div>

        <div>
          <label
            htmlFor="totalUnpaidBooking"
            className="form-label"
          >
            Total Unpaid Booking
          </label>
          <input
            {...register("totalUnpaidBooking")}
            type="text"
            id="totalUnpaidBooking"
            className="form-input"
          />
          <ErrorMessage message={errors.totalUnpaidBooking?.message} />
        </div>

        <div>
          <label
            htmlFor="availableCreditLimit"
            className="form-label"
          >
            Available Credit Limit
          </label>
          <input
            {...register("availableCreditLimit")}
            type="number"
            min={0}
            id="availableCreditLimit"
            className="form-input"
          />
          <ErrorMessage message={errors.availableCreditLimit?.message} />
        </div>

        <div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-slate-600 text-white rounded-md hover:bg-slate-700"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateCompanyForm;
