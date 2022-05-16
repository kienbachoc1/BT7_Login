import React from "react";
import { Outlet, Navigate } from "react-router-dom";

export default function PrivateRoute({ isLogged }) {
  return isLogged ? <Outlet /> : <Navigate to="/" />;
}
