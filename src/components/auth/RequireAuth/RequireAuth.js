import React from "react";
import { Navigate, useLocation } from "react-router-dom";

function RequireAuth({ children }) {
  const location = useLocation();
  const userToken = localStorage.getItem("sd-token");
  if (userToken === null) {
    return <Navigate to="/signIn" state={{ from: location }} replace />;
  }

  return children;
}

export default RequireAuth;
