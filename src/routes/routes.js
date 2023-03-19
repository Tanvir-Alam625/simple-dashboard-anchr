import React from "react";
import { Route, Routes } from "react-router-dom";
import Signin from "../components/auth/Signin";
import Dashboard from "../components/Dashboard/Dashboard";

function routes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
}

export default routes;
