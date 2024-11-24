"use client";
import DeleteModal from "@/components/modals/DeleteModal";
import CompanyTable from "@/components/tables/CompanyTable";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { deleteCompany } from "@/redux/slices/company.slice";
import { updateUsersCompanyId } from "@/redux/slices/user.slice";
import { ICompany } from "@/ts/interfaces/company.interfaces";
import { toastSucess } from "@/utils/functions/helper";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Companies = () => {
  const { companies } = useAppSelector((s) => s.company);

  const [selectedCompany, setSelectedCompany] = useState<ICompany | null>();

  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleDeleteCompany = () => {
    if (selectedCompany) {
      dispatch(deleteCompany(selectedCompany.id));
      dispatch(updateUsersCompanyId(selectedCompany.id));
      toastSucess(`Company ${selectedCompany.companyName} Deleted`);
      setSelectedCompany(null);
    }
  };
  return (
    <>
      <DeleteModal
        selectedCompany={selectedCompany}
        deleteFun={handleDeleteCompany}
        onClose={() => setSelectedCompany(null)}
      />
      <div>
        <h1 className="mb-4 text-xl font-semibold">Companies</h1>
        <CompanyTable
          companies={companies}
          handleUpdate={(company: ICompany) => {
            router.push(`/companies/update/${company.id}`);
          }}
          openDelete={(company: ICompany) => {
            setSelectedCompany(company);
          }}
        />
      </div>
    </>
  );
};

export default Companies;
