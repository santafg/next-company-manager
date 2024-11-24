"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { userValidationSchema } from "@/form/validations/user.validations";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addUser } from "@/redux/slices/user.slice";
import { toastSucess } from "@/utils/functions/helper";
import { useRouter } from "next/navigation";
import ErrorMessage from "../errors/ErrorMessage";

type FormData = yup.InferType<typeof userValidationSchema>;

const CreateUserForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(userValidationSchema),
  });

  const router = useRouter();
  const dispatch = useAppDispatch();

  const { companies } = useAppSelector((s) => s.company);

  const onSubmit = (data: FormData) => {
    dispatch(
      addUser({
        ...data,
        id: new Date().getTime().toString(),
      })
    );
    reset();
    toastSucess("User added");
    router.push("/users");
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Create User</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="form-label">Name</label>
          <input
            {...register("name")}
            type="text"
            className="form-input"
          />
          <ErrorMessage message={errors.name?.message} />
        </div>

        <div>
          <label className="form-label">Avatar URL</label>
          <input
            {...register("avatar")}
            type="text"
            className="form-input"
          />
          <ErrorMessage message={errors.avatar?.message} />
        </div>

        <div>
          <label className="form-label">Email</label>
          <input
            {...register("email")}
            type="email"
            className="form-input"
          />
          <ErrorMessage message={errors.email?.message} />
        </div>

        <div>
          <label className="form-label">
            Mobile Number
          </label>
          <input
            {...register("mobileNumber")}
            type="text"
            className="form-input"
          />
          <ErrorMessage message={errors.mobileNumber?.message} />
        </div>

        <div>
          <label className="form-label">Currency</label>
          <input
            {...register("currency")}
            type="text"
            className="form-input"
          />
          <ErrorMessage message={errors.currency?.message} />
        </div>

        <div>
          <label className="form-label">Is Active</label>
          <input
            type="checkbox"
            {...register("isActive")}
            className="w-4 h-4 border rounded"
          />
          <ErrorMessage message={errors.isActive?.message} />
        </div>

        <div>
          <label className="form-label">Company</label>
          <select
            {...register("companyId")}
            className="form-input"
          >
            <option value="">Select Company</option>
            {companies?.map((com) => (
              <option key={com.id} value={com.id}>
                {com.companyName}
              </option>
            ))}
          </select>
          <ErrorMessage message={errors.companyId?.message} />
        </div>

        <div>
          <label className="form-label">
            Total Unpaid Booking
          </label>
          <input
            {...register("totalUnpaidBooking")}
            type="text"
            className="form-input"
          />
          <ErrorMessage message={errors.totalUnpaidBooking?.message} />
        </div>

        <div>
          <label className="form-label">
            Available Limit
          </label>
          <input
            {...register("availableLimit")}
            type="number"
            min={0}
            className="form-input"
          />
          <ErrorMessage message={errors.availableLimit?.message} />
        </div>

        <button
          type="submit"
          className="w-full bg-slate-500 text-white p-2 rounded hover:bg-slate-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateUserForm;
