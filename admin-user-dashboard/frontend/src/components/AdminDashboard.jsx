import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../Context/AuthContext";
import { handleError } from "../utils";
import { ImUsers } from "react-icons/im";
import { FaPlus } from "react-icons/fa6";
import CreateUserModal from "../Modal/CreateUserModal";
import UpdateUserModal from "../Modal/UpdateUserModal";
import DeleteUserModal from "../Modal/DeleteUserModal";
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import { getAllUsers } from "../services/UserServices";

const AdminDashboard = () => {
  const { token, user } = useContext(AuthContext);

  // const { userRefreshKey } = useOutletContext() || {};
  const [showCreatedModal, setShowCreatedModal] = useState(false);
  const [showUpdatedModal, setShowUpdatedModal] = useState(false);
  const [showDeletedModal, setShowDeletedModal] = useState(false);

  const [userRefreshKey, setUserRefreshKey] = useState(0);

  const [users, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedUserToDelete, setSelectedUserToDelete] = useState(null);

  const navigate = useNavigate()

  const fetchUser = async () => {
    try {
      setLoading(true);

      const result = await getAllUsers(token);

      if (!result.success) {
        handleError(result.message || "Failed to fetch users.");
      }

      setUser(result.users || []);
    } catch (err) {
      handleError(err.message || "Failed to fetch users.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!token) return;
    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, userRefreshKey]);

  const handleOpenCreateUser = () => {
    if (user?.role === "admin") {
      setShowCreatedModal(true);
    }
  };

  const handleUserCreated = () => {
    setUserRefreshKey((prev) => prev + 1);
  };

  const handleOpenUpdateUser = (u) => {
    setSelectedUser(u);
    setShowUpdatedModal(true);
  };

  const handleUserUpdated = () => {
    setUserRefreshKey((prev) => prev + 1);
  };

  const handleOpenDeleteUser = (u) => {
    if (user?.role !== "admin") return;
    setSelectedUserToDelete(u);
    setShowDeletedModal(true);
  };

  const handleUserDeleted = () => {
    setUserRefreshKey((prev) => prev + 1);
  };

  const handleViewUserBlogs = (userId) => {
    console.log("user id:- ", userId);
    navigate(`/admin/userBlogs/${userId}`)
  }

  return (
    <>
      <div className="space-y-4">
        {/* Stats (optional, simple for now) */}
        <div className="flex justify-between">
          <div className="bg-white rounded-lg shadow p-6 outline-1 outline-gray-400/80 flex justify-between w-60">
            <div className=" w-12 h-12 bg-slate-200 items-center flex justify-center rounded-xl">
              <ImUsers className="text-[24px] fill-gray-900" />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase font-medium">
                Users Count
              </p>
              <p className="text-2xl font-bold text-gray-800 mt-1 items-center">
                {users.length}
              </p>
            </div>
          </div>
          <div>
            {user?.role === "admin" && (
              <div
                className="flex justify-end hover:cursor-pointer mb-4"
                onClick={handleOpenCreateUser}
              >
                <span className="bg-blue-700 flex items-center gap-2 text-white px-3 py-2 text-sm md:text-base rounded-lg justify-center hover:bg-blue-800 transition">
                  <FaPlus />
                  Create User
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Users table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          {loading ? (
            <div className="p-4 text-sm text-gray-500">Loading users...</div>
          ) : users.length === 0 ? (
            <div className="p-4 text-sm text-gray-500">No users found.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-gray-50 font-semibold text-[15px] text-gray-700">
                  <tr>
                    <th className="px-4 py-2 text-left font-semibold ">
                      Full Name
                    </th>
                    <th className="px-4 py-2 text-left font-semibold ">
                      Email
                    </th>
                    <th className="px-4 py-2 text-left font-semibold ">
                      Created At
                    </th>
                    <th className="px-4 py-2 text-left font-semibold justify-center flex items-center">
                      {" "}
                      Actions
                    </th>
                    {/* <th className="px-4 py-2 text-left font-semibold "></th> */}
                  </tr>
                </thead>
                <tbody>
                  {users.map((u) => (
                    <tr key={u._id} className="border-t border-gray-200 ">
                      <td className="px-4 py-2">{u.fullname}</td>
                      <td className="px-4 py-2">{u.email}</td>
                      <td className="px-4 py-2 text-xs text-gray-500">
                        {u.createdAt
                          ? new Date(u.createdAt).toLocaleDateString()
                          : "-"}
                      </td>
                      <td className="px-4 py-2">
                        <div className="flex justify-center items-center gap-7 text-xl">
                          <FaUserEdit
                            className="fill-blue-700 cursor-pointer"
                            onClick={() => handleOpenUpdateUser(u)}
                          />
                          <MdDelete
                            className="fill-red-500 cursor-pointer"
                            onClick={() => handleOpenDeleteUser(u)}
                          />
                          <FontAwesomeIcon
                            icon={faPenToSquare}
                            className="text-slate-600 cursor-pointer"
                            onClick={() => handleViewUserBlogs(u._id)}
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <CreateUserModal
                  open={showCreatedModal}
                  onClose={() => setShowCreatedModal(false)}
                  onUserCreated={handleUserCreated}
                />

                <UpdateUserModal
                  open={showUpdatedModal}
                  onClose={() => {
                    setShowUpdatedModal(false);
                    setSelectedUser(null);
                  }}
                  user={selectedUser}
                  onUserUpdated={handleUserUpdated}
                />
                <DeleteUserModal
                  open={showDeletedModal}
                  onClose={() => {
                    setShowDeletedModal(false);
                    setSelectedUserToDelete(null);
                  }}
                  user={selectedUserToDelete}
                  onUserDeleted={handleUserDeleted}
                />
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
