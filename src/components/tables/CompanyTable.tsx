import { ICompany } from "@/ts/interfaces/company.interfaces";
import Image from "next/image";
import React from "react";

interface ICompanyTableProps {
  companies: ICompany[] | null;
  handleUpdate: (employee: ICompany) => void;
  openDelete: (emp: ICompany) => void;
}

const CompanyTable = ({
  companies,
  handleUpdate,
  openDelete,
}: ICompanyTableProps) => {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-center">
              <th className="">Logo</th>
              <th className="">Name</th>
              <th className="">Email</th>
              <th className="">Mobile Number</th>
              <th className="">Address</th>
              <th className="">Total Unpaid Booking</th>
              <th className="">Actions</th>
            </tr>
          </thead>
          <tbody>
            {companies?.map((user) => (
              <tr key={user.id} className="hover:bg-gray-100 text-center">
                <td className="">
                  <Image
                    width={1000}
                    height={1000}
                    src={user.logo}
                    alt="/images/worker.png"
                    className="w-10 h-10 rounded-full object-contain"
                  />
                </td>
                <td className="">{user.companyName}</td>
                <td className="">{user.email}</td>
                <td className="">{user.mobileNumber}</td>
                <td className="">{user.address}</td>

                <td className="">{user.totalUnpaidBooking}</td>
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
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CompanyTable;
