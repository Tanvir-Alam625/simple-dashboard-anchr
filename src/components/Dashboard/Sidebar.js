import React from "react";
import { FiGrid, FiTrello, FiUser } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../images/paper.png";
function Sidebar() {
  const location = useLocation();
  const pathName = location?.pathname;
  return (
    <div className="max-w-sm h-full flex flex-col gap-1 p-2 md:p-4 border-r border-slate-100 shadow overflow-auto">
      <Link to="/" className="flex items-center gap-2 p-2 lg:p-8 ">
        <img
          src={Logo}
          className="md:h-[44px] w-[25px] h-[25px] md:w-[50px] "
          alt="logo-img"
        />
        <h2 className="text-slate-800 font-bold text-3xl hidden lg:block">
          Stack
        </h2>
      </Link>
      <p className="uppercase text-slate-500 text-xs font-medium my-3">PAGES</p>
      <Link
        to="/"
        className={`text-slate-400 duration-300 transition-all ease-in-out hover:bg-slate-100 rounded-xl flex gap-4 p-3 ${
          pathName === "/" ? "bg-slate-100" : "bg-white"
        }`}
      >
        <FiGrid className="h-6" />
        <span className="hidden md:block">Dashboard</span>
      </Link>
      <Link
        to="/users"
        className={`text-slate-400 duration-300 transition-all ease-in-out hover:bg-slate-100 rounded-xl flex gap-4 p-3 ${
          pathName === "/users" ? "bg-slate-100" : "bg-white"
        }`}
      >
        <FiUser className="h-6" />
        <span className="hidden md:block">Users</span>
      </Link>
      <Link
        to="/sales"
        className={`text-slate-400 duration-300 transition-all ease-in-out hover:bg-slate-100 rounded-xl flex gap-4 p-3 ${
          pathName === "/sales" ? "bg-slate-100" : "bg-white"
        }`}
      >
        <FiTrello className="h-6" />
        <span className="hidden md:block">Sales</span>
      </Link>
    </div>
  );
}

export default Sidebar;
