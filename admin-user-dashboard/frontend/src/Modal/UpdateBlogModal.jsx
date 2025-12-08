import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../Context/AuthContext";
import { updateBlogByUser } from "../services/BlogServices";
import { handleSuccess } from "../utils";

const UpdateBlogModal = ({ open, onClose, blog, onBlogUpdated }) => {
  const { token } = useContext(AuthContext);

  const [formBlogData, setFormBlogData] = useState({
    title: "",
    content: "",
  });
  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("🌀 useEffect in UpdateBlogModal, selectedBlog:", blog);

    if (blog) {
      setFormBlogData({
        title: blog?.title || "",
        content: blog?.content || "",
      });
      setErrors({});
      setFormError("");
    }
  }, [blog]);

  if (!open || !blog) return null;

  const validate = () => {
    const newErrors = {};

    if (!formBlogData.title.trim()) newErrors.title = "Title name is required.";
    if (!formBlogData.content.trim())
      newErrors.content = "Content is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("⌨️ Changing field:", name, "to:", value);

    setFormBlogData((prev) => ({ ...prev, [name]: value }));
    setFormError((prev) => ({ ...prev, [name]: "" }));
    setFormError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!blog) return;
    console.log("✅ Submitting update for user id:", blog._id);
    console.log("📦 Form data being sent:", formBlogData);

    if (!validate()) return;

    try {
      setLoading(true);
      setFormError("");

      console.log("📝 Updating blog:", blog._id, "with", formBlogData);

      const result = await updateBlogByUser(token, blog._id, formBlogData);

      console.log("📥 Response from updateBlogByUser:", result);

      if (!result.success) {
        setFormError(result.message || "Failed to update blog.");
        return;
      }

      handleSuccess(result.message || "Blog updated successfully.");

      onBlogUpdated?.(result.updatedBlog);

      onClose?.();
    } catch (err) {
      setFormError(err.message || "Failed to update blog.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-neutral-primary-soft border border-gray-200 shadow-sm p-4 md:p-6 bg-white rounded-[10px]">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-200 pb-4 md:pb-3">
              <h3 className="text-lg font-medium text-gray-900">Edit Blog</h3>
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
              {/* Title */}
              <div>
                <label className="block mb-2.5 text-sm font-medium text-gray-900">
                  Title
                </label>
                <input
                  name="title"
                  value={formBlogData.title}
                  onChange={handleChange}
                  className={`bg-neutral-secondary-medium border text-gray-900 text-sm rounded-base block w-full px-3 py-2.5 shadow-xs placeholder:text-gray-500 outline-none focus:ring-2 rounded-[10px] ${
                    errors.title
                      ? "border-red-500 focus:ring-red-400"
                      : "border-gray-300 focus:ring-blue-500"
                  }`}
                  placeholder="Enter blog title"
                />
                {errors.title && (
                  <p className="text-xs text-red-500 mt-1">{errors.title}</p>
                )}
              </div>

              {/* Content */}
              <div>
                <label className="block mb-2.5 text-sm font-medium text-gray-900">
                  Content
                </label>
                <textarea
                  name="content"
                  value={formBlogData.content}
                  onChange={handleChange}
                  rows={4}
                  className={`bg-neutral-secondary-medium border text-gray-900 text-sm rounded-base block w-full px-3 py-2.5 shadow-xs placeholder:text-gray-500 outline-none focus:ring-2 rounded-[10px] resize-y ${
                    errors.content
                      ? "border-red-500 focus:ring-red-400"
                      : "border-gray-300 focus:ring-blue-500"
                  }`}
                  placeholder="Update your blog content..."
                />
                {errors.content && (
                  <p className="text-xs text-red-500 mt-1">{errors.content}</p>
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
                {loading ? "Updating..." : "Update Blog"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateBlogModal;
