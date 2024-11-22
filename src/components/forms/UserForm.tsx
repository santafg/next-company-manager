"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { userValidationSchema } from "@/form/validations/user.validations";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addUser } from "@/redux/slices/user.slice";

type FormData = yup.InferType<typeof userValidationSchema>;

const UserForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(userValidationSchema),
  });

  const { companies } = useAppSelector((s) => s.company);
  const dispatch = useAppDispatch();

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
    dispatch(
      addUser({
        ...data,
        id: new Date().getTime().toString(),
        isActive: data.isActive === "Active" ? true : false,
      })
    );
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Form</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            {...register("name")}
            type="text"
            className="w-full p-2 border rounded"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
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
            <p className="text-red-500 text-sm">{errors.avatar.message}</p>
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
            <p className="text-red-500 text-sm">{errors.email.message}</p>
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
            <p className="text-red-500 text-sm">
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
            <p className="text-red-500 text-sm">{errors.currency.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Is Active</label>
          <Controller
            name="isActive"
            control={control}
            render={({ field }) => (
              <select {...field} className="w-full p-2 border rounded">
                <option value="">Select Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            )}
          />
          {errors.isActive && (
            <p className="text-red-500 text-sm">{errors.isActive.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Company</label>
          <Controller
            name="companyId"
            control={control}
            render={({ field }) => (
              <select {...field} className="w-full p-2 border rounded">
                <option value="">Select Company</option>
                {companies?.map((com) => (
                  <option key={com.id} value={com.id}>
                    {com.companyName}
                  </option>
                ))}
              </select>
            )}
          />
          {errors.companyId && (
            <p className="text-red-500 text-sm">{errors.companyId.message}</p>
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
            <p className="text-red-500 text-sm">
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
            <p className="text-red-500 text-sm">
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

export default UserForm;
