import { createRoutesFromElements, Navigate, Route } from "react-router";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import ProtectedRoute from "../components/ProtectedRoute";
import AdminDashboard from "../components/AdminDashboard";
import UserDashboard from "../components/UserDashboard";
import Unauthorized from "../Pages/Unauthorized";
import MainLayout from "../Layout/MainLayout";
import AdminUserBlogs from "../Pages/AdminUserBlogs";

const Routes = createRoutesFromElements(
  <>
    <Route path="/" element={<Navigate to="/login" replace />} />

    <Route path="register" element={<Register />} />
    <Route path="login" element={<Login />} />

    <Route element={<MainLayout />}>
      <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
        <Route path="adminDashboard" element={<AdminDashboard />} />
        <Route path="admin/userBlogs/:userId" element={<AdminUserBlogs />} />
      </Route>

      <Route element={<ProtectedRoute allowedRoles={["user"]} />}>
        <Route path="userDashboard" element={<UserDashboard />} />
      </Route>
    </Route>

    <Route path="unauthorized" element={<Unauthorized />} />
  </>
);

export default Routes;
