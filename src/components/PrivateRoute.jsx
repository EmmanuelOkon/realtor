import { Navigate, Outlet } from "react-router";
import { useAuthStatus } from "../hooks/useAuthStatus";

export default function PrivateRoute() {
  const { loggedIn, checkingStatus } = useAuthStatus();
  if (checkingStatus) {
    return (
        <h2>Loading...</h2>
    )
    // return <Spinner />;
  }
  return loggedIn ? <Outlet /> : <Navigate to="/signIn" />;
}
