import React, { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import { Navigate, Outlet } from "react-router";

const ProtectedRoute = ({ allowedRoles }) => {
  const { user, loading, isAuthenticated } = useContext(AuthContext);
  // const navigate = useNavigate();

  if (loading) {
    return <div className="text-center p-4">Checking Session...</div>;
  }
  if (!isAuthenticated) {
    // return navigate("/login");
    return <Navigate to="/login" replace />;
  }
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return (
    <>
      <Outlet />
    </>
  );
};

export default ProtectedRoute;
