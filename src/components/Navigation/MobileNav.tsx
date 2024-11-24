"use client";

import React, { useState } from "react";
import HamIcon from "../icons/HamIcon";
import Sidebar from "./Sidebar";
import useOutsideClick from "@/hooks/useOutsideClick";
import Link from "next/link";

const MobileNav = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navRef = useOutsideClick(() => {
    if (isSidebarOpen) setIsSidebarOpen(false);
  });
  return (
    <>
      <div ref={navRef}>
        <header className="fixed top-0 left-0 h-16 w-full bg-slate-600 text-white px-4 py-3 md:hidden flex justify-between items-center">
          <Link href="/home" className="text-xl font-bold">
            Dashboard
          </Link>
          <button
            className="text-white focus:outline-none"
            onClick={() => {
              setIsSidebarOpen((pre) => !pre);
            }}
          >
            <HamIcon />
          </button>
        </header>

        <Sidebar
          isMobile
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      </div>
    </>
  );
};

export default MobileNav;
