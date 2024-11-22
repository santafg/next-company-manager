"use client";
import CompanyTable from "@/components/tables/CompanyTable";
import { useAppSelector } from "@/redux/hooks";
import { ICompany } from "@/ts/interfaces/company.interfaces";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Companies = () => {
  const { companies } = useAppSelector((s) => s.company);
  console.log("companies", companies);

  const [selectedCompany, setSelectedCompany] = useState<ICompany | null>();
  console.log("selectedCompany", selectedCompany);

  const router = useRouter();

  const handleUpdate = (company: ICompany) => {
    router.push(`/companies/update/${company.id}`);
  };

  const openDelete = (company: ICompany) => {
    setSelectedCompany(company);
  };
  return (
    <div>
      <h1>Companies</h1>
      <CompanyTable
        companies={companies}
        handleUpdate={handleUpdate}
        openDelete={openDelete}
      />
    </div>
  );
};

export default Companies;
