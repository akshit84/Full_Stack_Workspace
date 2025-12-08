import React, { useContext, useState } from "react";
import AuthContext from "../Context/AuthContext";
import { deleteBlogByUser } from "../services/BlogServices";
import { handleSuccess } from "../utils";

const DeleteBlogModal = ({ open, onClose, blog, onBlogDeleted }) => {
  const { token } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState("");

  const handleDelete = async () => {
    try {
      setLoading(true);
      setFormError("");

      const res = await deleteBlogByUser(token, blog._id);

      if (!res.success) {
        setFormError(res.message || "Failed to delete blog.");
        return;
      }

      handleSuccess(res.message || "Blog deleted successfully.");
      onBlogDeleted?.(blog._id);
      onClose?.();
    } catch (err) {
      const msg = err?.message || "Failed to delete blog.";
      setFormError(msg);
      // handleError(msg);
    } finally {
      setLoading(false);
    }
  };
  if (!open || !blog) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-neutral-primary-soft border border-gray-200 shadow-sm p-4 md:p-6 bg-white rounded-[10px]">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-200 pb-4 md:pb-3">
              <h3 className="text-lg font-semibold text-gray-900">
                Delete Blog
              </h3>
              <button
                type="button"
                onClick={onClose}
                className="text-gray-500 bg-transparent hover:bg-gray-100 hover:text-gray-900 rounded-base text-sm w-9 h-9 ms-auto inline-flex justify-center items-center rounded-[10px]"
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
            <div className="pt-4 md:pt-6 space-y-2.5">
              <p className="text-sm text-gray-700">
                Are you sure you want to delete this blog?
              </p>
              <div className="bg-neutral-secondary-medium  border-gray-800 text-gray-900 text-base block w-full  py-2 outline-none rounded-[10px]">
                <p className="font-medium text-gray-900">Title: {blog.title}</p>
                {/* <p className="text-xs text-gray-600">{blog.content}</p> */}
              </div>

              {formError && <p className="text-xs text-red-500">{formError}</p>}
            </div>

            {/* Footer buttons */}
            <div className="mt-4 flex justify-end gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-sm rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100"
                disabled={loading}
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleDelete}
                disabled={loading}
                className="px-4 py-2 text-sm rounded-md bg-red-600 text-white hover:bg-red-700 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteBlogModal;
