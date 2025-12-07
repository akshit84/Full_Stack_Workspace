import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../Context/AuthContext";
import { updateUserByAdmin } from "../services/UserServices";
import { handleSuccess } from "../utils";

const UpdateUserModal = ({
  open,
  onClose,
  user: selectedUser,
  onUserUpdated,
}) => {
  const { token } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    role: "user",
  });
  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // console.log("🌀 useEffect in UpdateUserModal, selectedUser:", selectedUser);

    if (selectedUser) {
      setFormData({
        fullname: selectedUser.fullname || "",
        email: selectedUser.email || "",
      });
      setErrors({});
      setFormError("");
    }
  }, [selectedUser]);

  if (!open || !selectedUser) return null;

  const validate = () => {
    const newErrors = {};

    if (!formData.fullname.trim())
      newErrors.fullname = "Full name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log("⌨️ Changing field:", name, "to:", value);

    setFormData((p) => ({ ...p, [name]: value }));
    setErrors((p) => ({ ...p, [name]: "" }));
    setFormError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedUser) return;

    // console.log("✅ Submitting update for user id:", selectedUser._id);
    // console.log("📦 Form data being sent:", formData);
    if (!validate()) return;

    try {
      setLoading(true);
      setFormError("");

      const result = await updateUserByAdmin(token, selectedUser._id, formData);

      // console.log("📥 Response from updateUserByAdmin:", result);

      if (!result.success) {
        setFormError(result.message || "Failed to update user.");
        return;
      }

      // setUpdatedUserData(prev => ({...prev , fullname: result?.user?.fullname , email:result?.user?.email , id: result?.user?._id}))

      handleSuccess(result.message || "User updated successfully.");
      onUserUpdated?.(result.user);
      onClose?.();
    } catch (err) {
      // const message = err?.message || "Failed to update user.";
      setFormError(err.message || "Failed to update user.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
        // aria-modal="true"
        // role="dialog"
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-neutral-primary-soft border border-gray-200 rounded-[10px] shadow-sm p-4 md:p-6 bg-white">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-200 pb-4 md:pb-5">
              <h3 className="text-lg font-medium to-gray-900">Update User</h3>
              <button
                type="button"
                className="text-gray-500 bg-transparent hover:bg-gray-100 hover:text-gray-900 rounded-[10px] text-sm w-9 h-9 ms-auto inline-flex justify-center items-center"
                onClick={onClose}
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18 17.94 6M18 18 6.06 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            {/* Body */}
            <form onSubmit={handleSubmit} className="pt-4 md:pt-6 space-y-4">
              {/* Full Name */}
              <div>
                <label className="block mb-2.5 text-sm font-medium to-gray-900">
                  Full Name
                </label>
                <input
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleChange}
                  className={`bg-neutral-secondary-medium border to-gray-900 text-sm rounded-[10px] block w-full px-3 py-2.5 shadow-xs placeholder:text-gray-500 outline-none focus:ring-2 ${
                    errors.fullname
                      ? "border-red-500 focus:ring-red-400"
                      : "border-gray-300 focus:ring-blue-400"
                  }`}
                  placeholder="Enter full name"
                />
                {errors.fullname && (
                  <p className="text-xs text-red-500 mt-1">{errors.fullname}</p>
                )}
              </div>
              {/* Email */}
              <div>
                <label className="block mb-2.5 text-sm font-medium text-gray-900">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`bg-neutral-secondary-medium border text-gray-900 text-sm rounded-base block w-full px-3 py-2.5 shadow-xs placeholder:text-gray-500 outline-none focus:ring-2 rounded-[10px] ${
                    errors.email
                      ? "border-red-500 focus:ring-red-400"
                      : "border-gray-300 focus:ring-blue-500"
                  }`}
                  placeholder="example@company.com"
                />
                {errors.email && (
                  <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                )}

                {formError && (
                  <p className="text-xs text-red-500">{formError}</p>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className="text-white bg-blue-600 box-border border border-transparent hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none w-full mt-2 disabled:opacity-60 disabled:cursor-not-allowed rounded-[10px]"
                >
                  {loading ? "Updating..." : "Update User"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateUserModal;
