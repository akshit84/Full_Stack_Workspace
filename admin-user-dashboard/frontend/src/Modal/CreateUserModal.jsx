import React, { useContext, useState } from "react";
import { createUserByAdmin } from "../services/UserServices";
import AuthContext from "../Context/AuthContext";
import { handleSuccess } from "../utils";

const CreateUserModal = ({ open, onClose, onUserCreated }) => {
  const { token } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState("");
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.fullname.trim()) newErrors.fullname = "Full name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    if (!formData.password.trim()) newErrors.password = "Password is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); 
    setFormError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      setLoading(true);
      setFormError("");

      const result = await createUserByAdmin(token, formData);

      handleSuccess(result.message || "User created successfully.");

      setFormData({
        fullname: "",
        email: "",
        password: "",
      });

      if (onUserCreated) {
        onUserCreated();
      }
      // close modal
      onClose?.();
    } catch (err) {
      setFormError(err.message || "Failed to create user.");
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null; // don’t render when closed

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      aria-modal="true"
      role="dialog"
    >
      {/* Modal container */}
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-neutral-primary-soft border border-gray-200 shadow-sm p-4 md:p-6 bg-white rounded-[10px]">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-200 pb-4 md:pb-5">
            <h3 className="text-lg font-medium text-gray-900">
              Create New User
            </h3>
            <button
              type="button"
              className="text-gray-500 bg-transparent hover:bg-gray-100 hover:text-gray-900 rounded-base text-sm w-9 h-9 ms-auto inline-flex justify-center items-center rounded-[10px]"
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
              <label className="block mb-2.5 text-sm font-medium text-gray-900">
                Full Name
              </label>
              <input
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                className={`bg-neutral-secondary-medium border text-gray-900 text-sm rounded-base block w-full px-3 py-2.5 shadow-xs placeholder:text-gray-500 outline-none focus:ring-2 rounded-[10px] ${
                  errors.fullname
                    ? "border-red-500 focus:ring-red-400"
                    : "border-gray-300 focus:ring-blue-500"
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
            </div>

            {/* Password */}
            <div>
              <label className="block mb-2.5 text-sm font-medium text-gray-900">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`bg-neutral-secondary-medium border text-gray-900 text-sm rounded-base block w-full px-3 py-2.5 shadow-xs placeholder:text-gray-500 outline-none focus:ring-2 rounded-[10px] ${
                  errors.password
                    ? "border-red-500 focus:ring-red-400"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
                placeholder="•••••••••"
              />
              {errors.password && (
                <p className="text-xs text-red-500 mt-1">{errors.password}</p>
              )}
            </div>

            {/* Form-level error */}
            {formError && (
              <p className="text-xs text-red-500 text-center">{formError}</p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="text-white bg-blue-600 box-border border border-transparent hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none w-full mt-2 disabled:opacity-60 disabled:cursor-not-allowed rounded-[10px]"
            >
              {loading ? "Creating..." : "Create User"}
            </button>
          </form>
        </div>
      </div>    
    </div>
  );
};

export default CreateUserModal;
