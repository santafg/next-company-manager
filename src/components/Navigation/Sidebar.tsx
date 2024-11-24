import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { Dispatch, SetStateAction } from "react";

const navItems = [
  { name: "Home", route: "/home" },
  { name: "Users", route: "/users" },
  { name: "Companies", route: "/companies" },
  { name: "Reset", route: "/reset" },
];

const Sidebar = ({
  isMobile,
  setIsSidebarOpen,
  isSidebarOpen,
}: {
  isMobile?: boolean;
  isSidebarOpen?: boolean;
  setIsSidebarOpen?: Dispatch<SetStateAction<boolean>>;
}) => {
  const pathname = usePathname();

  return (
    <>
      <nav
        className={`fixed top-0 w-48 max-h-screen h-full transition-all bg-slate-600 text-white p-5 col-span-2 ${
          isMobile && isSidebarOpen ? "left-0" : "-left-48 md:left-0"
        }`}
      >
        <h1 className="text-2xl font-bold mb-8">Dashboard</h1>
        <ul className="space-y-4">
          {navItems.map((item) => (
            <li
              key={item.route}
              onClick={() => {
                if (setIsSidebarOpen) {
                  setIsSidebarOpen((pre) => !pre);
                }
              }}
            >
              <Link
                href={item.route}
                className={`block px-4 py-2 rounded ${
                  pathname.startsWith(item.route)
                    ? "bg-slate-800"
                    : "hover:bg-slate-700"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
