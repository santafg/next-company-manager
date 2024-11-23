"use client";
import { ReactNode, useEffect, useState } from "react";
import HamIcon from "../icons/HamIcon";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "@/api/functions/user.functions";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setUsers } from "@/redux/slices/user.slice";
import { setCompanies } from "@/redux/slices/company.slice";
import { getCompanies } from "@/api/functions/company.functions";
import Sidebar from "../Navigation/Sidebar";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const { users } = useAppSelector((s) => s.user);
  const { companies } = useAppSelector((s) => s.company);
  const dispatch = useAppDispatch();

  const { data: usersData, isFetching: usersLoading } = useQuery({
    queryKey: ["get_users"],
    queryFn: getUsers,
    enabled: users === null,
  });
  const { data: companyData, isFetching: companyLoading } = useQuery({
    queryKey: ["get_company"],
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
      <header className="fixed top-0 left-0 h-16 w-full bg-slate-600 text-white px-4 py-3 md:hidden flex justify-between items-center">
        <h1 className="text-xl font-bold">Dashboard</h1>
        <button
          className="text-white focus:outline-none"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <HamIcon />
        </button>
      </header>

      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <main className="dashboard_layout p-2 mt-16 md:mt-0 md:p-10 md:ml-48">
        <div className="bg-white rounded shadow p-2 md:p-6">{children}</div>
      </main>
    </div>
  );
};

export default DashboardLayout;
