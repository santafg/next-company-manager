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
      <h1 className="text-2xl font-bold mb-4">Ceate User</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            {...register("name")}
            type="text"
            className="w-full p-2 border rounded"
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Avatar URL</label>
          <input
            {...register("avatar")}
            type="text"
            className="w-full p-2 border rounded"
          />
          {errors.avatar && (
            <p className="text-red-500 text-xs mt-1">{errors.avatar.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            {...register("email")}
            type="email"
            className="w-full p-2 border rounded"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Mobile Number
          </label>
          <input
            {...register("mobileNumber")}
            type="text"
            className="w-full p-2 border rounded"
          />
          {errors.mobileNumber && (
            <p className="text-red-500 text-xs mt-1">
              {errors.mobileNumber.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Currency</label>
          <input
            {...register("currency")}
            type="text"
            className="w-full p-2 border rounded"
          />
          {errors.currency && (
            <p className="text-red-500 text-xs mt-1">{errors.currency.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Is Active</label>
          <input
            type="checkbox"
            {...register("isActive")}
            className="w-4 h-4 border rounded"
          />
          {errors.isActive && (
            <p className="text-red-500 text-xs mt-1">{errors.isActive.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Company</label>

          <select
            {...register("companyId")}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Company</option>
            {companies?.map((com) => (
              <option key={com.id} value={com.id}>
                {com.companyName}
              </option>
            ))}
          </select>
          {errors.companyId && (
            <p className="text-red-500 text-xs mt-1">{errors.companyId.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Total Unpaid Booking
          </label>
          <input
            {...register("totalUnpaidBooking")}
            type="text"
            className="w-full p-2 border rounded"
          />
          {errors.totalUnpaidBooking && (
            <p className="text-red-500 text-xs mt-1">
              {errors.totalUnpaidBooking.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Available Limit
          </label>
          <input
            {...register("availableLimit")}
            type="number"
            className="w-full p-2 border rounded"
          />
          {errors.availableLimit && (
            <p className="text-red-500 text-xs mt-1">
              {errors.availableLimit.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateUserForm;
