"use client";
import DeleteModal from "@/components/modals/DeleteModal";
import CompanyTable from "@/components/tables/CompanyTable";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { deleteCompany } from "@/redux/slices/company.slice";
import { ICompany } from "@/ts/interfaces/company.interfaces";
import { toastSucess } from "@/utils/functions/helper";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Companies = () => {
  const { companies } = useAppSelector((s) => s.company);
  console.log("companies", companies);

  const [selectedCompany, setSelectedCompany] = useState<ICompany | null>();
  console.log("selectedCompany", selectedCompany);

  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleDeleteCompany = () => {
    if (selectedCompany) {
      dispatch(deleteCompany(selectedCompany.id));
      toastSucess(`${selectedCompany.companyName} Deleted`);
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
        <h1 className="mb-4 text-xl">Companies</h1>
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
