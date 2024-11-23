"use client";

import UpdateCompanyForm from "@/components/forms/UpdateCompanyForm";
import DeleteModal from "@/components/modals/DeleteModal";
import UserTable from "@/components/tables/UserTable";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { deleteUser } from "@/redux/slices/user.slice";
import { IUser } from "@/ts/interfaces/user.interface";
import { toastSucess } from "@/utils/functions/helper";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";

const UpdateCompany = () => {
  const { id } = useParams();
  const { companies } = useAppSelector((s) => s.company);
  const { users } = useAppSelector((s) => s.user);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const company = companies?.filter((c) => c.id == id)[0];
  const companyUsers = users?.filter((u) => u.companyId === id);

  const [selectedUser, setSelectedUser] = useState<IUser | null>();
  const handleDeleteUser = () => {
    if (selectedUser) {
      dispatch(deleteUser(selectedUser.id));
      toastSucess(`${selectedUser.name} Deleted`);
      setSelectedUser(null);
    }
  };
  return (
    <div>
      {company ? (
        <>
          <UpdateCompanyForm company={company} />

          <DeleteModal
            selectedUser={selectedUser}
            deleteFun={handleDeleteUser}
            onClose={() => setSelectedUser(null)}
          />
          <div>
            <h1 className="mb-4 text-xl">Users</h1>
            <UserTable
              users={companyUsers}
              handleUpdate={(user: IUser) => {
                router.push(`/users/update/${user.id}`);
              }}
              openDelete={(user: IUser) => {
                setSelectedUser(user);
              }}
            />
          </div>
        </>
      ) : (
        <>
          <p>Company not found!</p>
        </>
      )}
    </div>
  );
};

export default UpdateCompany;
