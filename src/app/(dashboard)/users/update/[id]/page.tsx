"use client";

import UpdateUserForm from "@/components/forms/UpdateUserForm";
import { useAppSelector } from "@/redux/hooks";
import { useParams } from "next/navigation";
import React from "react";

const UpdateUser = () => {
  const { id } = useParams();
  const { users } = useAppSelector((s) => s.user);
  const user = users?.filter((u) => u.id == id)[0];
  return (
    <div>
      {user ? (
        <>
          <UpdateUserForm user={user} />
        </>
      ) : (
        <>
          <p>User not found!</p>
        </>
      )}
    </div>
  );
};

export default UpdateUser;
