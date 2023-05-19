import { Navigate, Outlet } from "react-router";
import { useAuthStatus } from "../hooks/useAuthStatus";
// import { useState, useEffect } from "react";
import Spinner from "./Spinner";

export default function PrivateRoute() {
  const { loggedIn, checkingStatus } = useAuthStatus();
  // const [showSpinner, setShowSpinner] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => setShowSpinner(true), 9000);
  // });

  if (checkingStatus) {
    return <Spinner />;
  }
  return loggedIn ? <Outlet /> : <Navigate to="/signIn" />;
}
