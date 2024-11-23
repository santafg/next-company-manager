"use client";

import UpdateCompanyForm from "@/components/forms/UpdateCompanyForm";
import { useAppSelector } from "@/redux/hooks";
import { useParams } from "next/navigation";
import React from "react";

const UpdateCompany = () => {
  const { id } = useParams();
  const { companies } = useAppSelector((s) => s.company);
  const company = companies?.filter((u) => u.id == id)[0];
  return (
    <div>
      {company ? (
        <>
          <UpdateCompanyForm company={company} />
        </>
      ) : (
        <>
          <p>User not found!</p>
        </>
      )}
    </div>
  );
};

export default UpdateCompany;
