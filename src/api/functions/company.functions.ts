import { ICompany } from "@/ts/interfaces/company.interfaces";
import axiosInstace from "../axiosInstance";
import endpoints from "../endpoints";

export const getCompanies = async (): Promise<ICompany[]> => {
  const { data } = await axiosInstace.get(endpoints.company);
  return data;
};
