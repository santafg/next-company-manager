"use client";
import queryClient from "@/react-query/client";
import { useAppDispatch } from "@/redux/hooks";
import { setCompanies } from "@/redux/slices/company.slice";
import { setUsers } from "@/redux/slices/user.slice";
import { toastSucess } from "@/utils/functions/helper";
import React from "react";

const Reset = () => {
  const dispatch = useAppDispatch();

  const handleResetAll = () => {
    dispatch(setUsers(null));
    dispatch(setCompanies(null));
    queryClient.invalidateQueries({ queryKey: ["get_users"] });
    queryClient.invalidateQueries({ queryKey: ["get_companies"] });
    toastSucess("Reset Done!");
  };

  return (
    <div>
      <h1 className="text-xl font-semibold">Reset</h1>
      <p className="my-2 text-sm">
        Click the button bellow to make all the users and companies to default.
      </p>
      <button
        onClick={handleResetAll}
        className="bg-red-500 p-4 py-2 text-sm text-white rounded"
      >
        Reset All
      </button>
    </div>
  );
};

export default Reset;
