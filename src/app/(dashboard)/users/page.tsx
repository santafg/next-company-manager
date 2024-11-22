"use client";
import UserTable from "@/components/tables/UserTable";
import { useAppSelector } from "@/redux/hooks";
import { IUser } from "@/ts/interfaces/user.interface";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Users = () => {
  const { users } = useAppSelector((s) => s.user);
  const [selectedUser, setSelectedUser] = useState<IUser | null>();
  console.log("users", users);
  console.log("selectedUser", selectedUser);

  const router = useRouter();

  const handleUpdate = (user: IUser) => {
    router.push(`/users/update/${user.id}`);
  };

  const openDelete = (user: IUser) => {
    setSelectedUser(user);
  };

  return (
    <div>
      <h1 className="mb-4 text-xl">Users</h1>
      <UserTable
        users={users}
        handleUpdate={handleUpdate}
        openDelete={openDelete}
      />
    </div>
  );
};

export default Users;
