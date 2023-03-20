import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Dashboard() {
  return (
    <div className="flex w-screen h-screen">
      <Sidebar />
      <div className=" flex flex-col flex-1 h-full">
        <Header />
        <div className=" flex-1 overflow-auto p-1 lg:p-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
