import React from "react";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "../components/auth/RequireAuth/RequireAuth";
import Signin from "../components/auth/Signin";
import Signup from "../components/auth/Signup";
import Activity from "../components/Dashboard/Acitivity/Activity";
import Dashboard from "../components/Dashboard/Dashboard";
import Sales from "../components/Dashboard/Sales/Sales";
import Users from "../components/Dashboard/Users/Users";
import NotFound from "../components/NotFound/NotFound";

function routes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }
      >
        <Route index element={<Activity />} />
        <Route path="/users" element={<Users />} />
        <Route path="/sales" element={<Sales />} />
      </Route>
      <Route path="/signIn" element={<Signin />} />
      <Route path="/signUp" element={<Signup />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default routes;
