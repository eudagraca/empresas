import React from "react";

import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const user = localStorage.getItem("userSession");
  if (user) {
    return true;
  } else {
    return false;
  }
};

const PublicRoute = (props) => {
  const auth = useAuth();

  return auth ? <Navigate to="/profile" /> : <Outlet />;
};

export  default PublicRoute;
