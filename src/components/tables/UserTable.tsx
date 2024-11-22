import { IUser } from "@/ts/interfaces/user.interface";
import Image from "next/image";
import React from "react";
// import { FallbackImage } from "../image/FallbackImage";

interface IUserTableProps {
  users: IUser[] | null;
  handleUpdate: (employee: IUser) => void;
  openDelete: (emp: IUser) => void;
}

const UserTable = ({ users, handleUpdate, openDelete }: IUserTableProps) => {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="border border-gray-300 px-4 py-2">Avatar</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">
                Mobile Number
              </th>
              <th className="border border-gray-300 px-4 py-2">Currency</th>
              <th className="border border-gray-300 px-4 py-2">Active</th>
              <th className="border border-gray-300 px-4 py-2">
                Total Unpaid Booking
              </th>
              <th className="border border-gray-300 px-4 py-2">
                Available Limit
              </th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => (
              <tr key={user.id} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">
                  <Image
                    width={1000}
                    height={1000}
                    src={user.avatar}
                    alt="/images/worker.png"
                    className="w-10 h-10 rounded-full object-contain"
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.email}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.mobileNumber}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.currency}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.isActive ? (
                    <span className="text-green-600">Active</span>
                  ) : (
                    <span className="text-red-600">Inactive</span>
                  )}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.totalUnpaidBooking}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.availableLimit.toLocaleString()}
                </td>
                <td className="border border-gray-300 px-4 py-2 space-x-2">
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
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserTable;
