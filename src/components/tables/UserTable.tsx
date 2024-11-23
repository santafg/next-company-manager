import { IUser } from "@/ts/interfaces/user.interface";
import Image from "next/image";
import React from "react";

interface IUserTableProps {
  users: IUser[] | null | undefined;
  handleUpdate: (employee: IUser) => void;
  openDelete: (emp: IUser) => void;
}

const UserTable = ({ users, handleUpdate, openDelete }: IUserTableProps) => {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-center">
              <th className="">Avatar</th>
              <th className="">Name</th>
              <th className="">Email</th>
              <th className="">Mobile Number</th>
              <th className="">Currency</th>
              <th className="">Active</th>
              <th className="">Total Unpaid Booking</th>
              <th className="">Available Limit</th>
              <th className="">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users && users.length > 0 ? (
              users?.map((user) => (
                <tr key={user.id} className="hover:bg-gray-100 text-center">
                  <td className="">
                    <Image
                      width={1000}
                      height={1000}
                      src={user.avatar || "/images/worker.png"}
                      alt="/images/worker.png"
                      className="w-10 h-10 rounded-full object-contain"
                    />
                  </td>
                  <td className="">{user.name}</td>
                  <td className="">{user.email}</td>
                  <td className="">{user.mobileNumber}</td>
                  <td className="">{user.currency}</td>
                  <td className="">
                    {user.isActive ? (
                      <span className="text-green-600">Active</span>
                    ) : (
                      <span className="text-red-600">Inactive</span>
                    )}
                  </td>
                  <td className="">{user.totalUnpaidBooking}</td>
                  <td className="">{user.availableLimit.toLocaleString()}</td>
                  <td className=" space-x-2">
                    <button
                      onClick={() => handleUpdate(user)}
                      className="px-3 py-1 text-white bg-blue-500 rounded hover:bg-blue-600"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => openDelete(user)}
                      className="px-3 py-1 text-white bg-red-500 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <>
                <tr>
                  <td className="text-center" colSpan={9}>No user found</td>
                </tr>
              </>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserTable;
