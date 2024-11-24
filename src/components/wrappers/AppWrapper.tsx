"use client";
import { ReactNode, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "@/api/functions/user.functions";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setUsers } from "@/redux/slices/user.slice";
import { setCompanies } from "@/redux/slices/company.slice";
import { getCompanies } from "@/api/functions/company.functions";
import Sidebar from "../Navigation/Sidebar";
import MobileNav from "../Navigation/MobileNav";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const { users } = useAppSelector((s) => s.user);
  const { companies } = useAppSelector((s) => s.company);
  const dispatch = useAppDispatch();

  const { data: usersData, isFetching: usersLoading } = useQuery({
    queryKey: ["get_users"],
    queryFn: getUsers,
    enabled: users === null,
  });
  const { data: companyData, isFetching: companyLoading } = useQuery({
    queryKey: ["get_companies"],
    queryFn: getCompanies,
    enabled: companies === null,
  });

  useEffect(() => {
    if (users === null && usersData && !usersLoading) {
      dispatch(setUsers(usersData));
    }
  }, [usersData, usersLoading, users, dispatch]);
  useEffect(() => {
    if (companies === null && companyData && !companyLoading) {
      dispatch(setCompanies(companyData));
    }
  }, [companyData, companyLoading, companies, dispatch]);

  return (
    <div className="min-h-screen bg-gray-100">
      <MobileNav />
      <Sidebar />
      <main className="dashboard_layout p-2 mt-16 md:mt-0 md:p-10 md:ml-48">
        <div className="bg-white rounded shadow p-2 md:p-6">{children}</div>
      </main>
    </div>
  );
};

export default DashboardLayout;
