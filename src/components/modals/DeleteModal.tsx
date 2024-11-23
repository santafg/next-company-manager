"use client";
import useOutsideClick from "@/hooks/useOutsideClick";
import { ICompany } from "@/ts/interfaces/company.interfaces";
import { IUser } from "@/ts/interfaces/user.interface";
import React from "react";

interface IDeleteModalProps {
  selectedUser?: IUser | null;
  selectedCompany?: ICompany | null;
  deleteFun: () => void;
  onClose: () => void;
}

const DeleteModal = ({
  selectedCompany,
  selectedUser,
  deleteFun,
  onClose,
}: IDeleteModalProps) => {
  const modalRef = useOutsideClick(onClose); // Get the ref from the hook

  if (selectedCompany == null && selectedUser == null) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-6 z-50">
      <div
        ref={modalRef}
        className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg"
        // onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-semibold text-center">
          Are you sure you want to delete{" "}
          {selectedUser && `User ${selectedUser.name}`}
          {selectedCompany && `Company ${selectedCompany.companyName}`}?
        </h2>
        <p className="mt-2 text-center text-gray-600">
          This action cannot be undone.
        </p>
        <div className="mt-4 flex justify-center gap-4">
          <>
            <button
              onClick={deleteFun}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none"
            >
              Yes
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none"
            >
              No
            </button>
          </>
        </div>
      </div>
    </div>
  );
};

export default React.memo(DeleteModal);
