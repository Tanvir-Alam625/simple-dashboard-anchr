import React from "react";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "../components/auth/RequireAuth/RequireAuth";
import Signin from "../components/auth/Signin";
import Signup from "../components/auth/Signup";
import Dashboard from "../components/Dashboard/Dashboard";

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
      />
      <Route path="/signIn" element={<Signin />} />
      <Route path="/signUp" element={<Signup />} />
    </Routes>
  );
}

export default routes;
