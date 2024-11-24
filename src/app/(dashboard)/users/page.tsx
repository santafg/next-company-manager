"use client";
import DeleteModal from "@/components/modals/DeleteModal";
import UserTable from "@/components/tables/UserTable";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { deleteUser } from "@/redux/slices/user.slice";
import { IUser } from "@/ts/interfaces/user.interface";
import { toastSucess } from "@/utils/functions/helper";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Users = () => {
  const { users } = useAppSelector((s) => s.user);
  const [selectedUser, setSelectedUser] = useState<IUser | null>();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const handleDeleteUser = () => {
    if (selectedUser) {
      dispatch(deleteUser(selectedUser.id));
      toastSucess(`User ${selectedUser.name} Deleted`);
      setSelectedUser(null);
    }
  };

  return (
    <>
      <DeleteModal
        selectedUser={selectedUser}
        deleteFun={handleDeleteUser}
        onClose={() => setSelectedUser(null)}
      />
      <div>
        <h1 className="mb-4 text-xl font-semibold">Users</h1>
        <UserTable
          users={users}
          handleUpdate={(user: IUser) => {
            router.push(`/users/update/${user.id}`);
          }}
          openDelete={(user: IUser) => {
            setSelectedUser(user);
          }}
        />
      </div>
    </>
  );
};

export default Users;
