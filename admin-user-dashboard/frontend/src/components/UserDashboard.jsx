import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../Context/AuthContext";
import { getUserBlogs } from "../services/BlogServices";
import { handleError } from "../utils";
import { FaPlus } from "react-icons/fa6";
import CreateBlogModal from "../Modal/CreateBlogModal";
import DeleteBlogModal from "../Modal/DeleteBlogModal";
import UpdateBlogModal from "../Modal/UpdateBlogModal";

const UserDashboard = () => {
  const { token } = useContext(AuthContext);

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showCreateBlogModal, setShowCreateBlogModal] = useState(false);
  const [showUpdateBlogModal, setShowUpdateBlogModal] = useState(false);
  const [showDeleteBlogModal, setShowDeleteBlogModal] = useState(false);

  const [selectedBlogToUpdate, setSelectedBlogToUpdate] = useState(null);
  const [selectedBlogToDelete, setSelectedBlogToDelete] = useState(null);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const result = await getUserBlogs(token);

      if (!result.success) {
        handleError(result.message);
        return;
      }

      setBlogs(result.blogs || []);
    } catch (err) {
      handleError(err.message || "Failed to load blog.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!token) return;
    fetchBlogs();
  }, [token]);

  // ───────────────────────────────────────────────────────────────────────────────────────
  // CREATE BLOG
  // ───────────────────────────────────────────────────────────────────────────────────────

  const handleOpenCreateBlog = () => {
    setShowCreateBlogModal(true);
  };

  const handleBlogCreated = (newBlog) => {
    if (!newBlog) return;
    setBlogs((prev) => [newBlog, ...prev]);
  };

  // ───────────────────────────────────────────────────────────────────────────────────────
  // UPDATE BLOG
  // ───────────────────────────────────────────────────────────────────────────────────────

  const handleOpenUpdateBlog = (blog) => {
    console.log("👉 handleOpenUpdateBlog called with user:", blog);

    setSelectedBlogToUpdate(blog);
    setShowUpdateBlogModal(true);
  };

  const handleBlogUpdated = (updateBlog) => {
    console.log("🧩 handleBlogUpdated called with:", updateBlog);

    if (!updateBlog) return;
    setBlogs((prev) => {
      const newArr = prev.map((b) =>
        b._id === updateBlog._id ? updateBlog : b
      );
      console.log("🔁 New blog array after update:", newArr);

      return newArr
    });
  };

  // ───────────────────────────────────────────────────────────────────────────────────────
  // Delete BLOG
  // ───────────────────────────────────────────────────────────────────────────────────────

  const handleOpenDeleteBlog = (blog) => {
    console.log("👉 handleOpenDeleteBlog called with user:", blog);

    setSelectedBlogToDelete(blog);
    setShowDeleteBlogModal(true);
  };

  const handleBlogDeleted = (deleteBlogId) => {
    if (!deleteBlogId) return;
    setBlogs((prev) => prev.filter((b) => b._id !== deleteBlogId));
  };

  return (
    <>
      <div className="space-y-4">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Your Blogs</h2>
            <p className="text-sm text-gray-500">
              Manage and review all blogs you have created.
            </p>
          </div>

          {/* User card + Create Blog button */}
          <div className="flex gap-3 sm:items-center">
            <button
              onClick={handleOpenCreateBlog}
              className="bg-blue-700 flex items-center gap-2 text-white px-4 py-2 text-sm md:text-base rounded-lg justify-center hover:bg-blue-800 transition hover:cursor-pointer"
            >
              {/* <span className="text-lg leading-none">+</span> */}
              <FaPlus />
              Create Blog
            </button>
          </div>
        </div>

        {/* Info row */}
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-medium">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            {blogs.length} blog{blogs.length === 1 ? "" : "s"}
          </span>
        </div>

        {/* Content */}
        {loading ? (
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <span className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
            Loading your blogs...
          </div>
        ) : blogs.length === 0 ? (
          <div className="bg-white border border-dashed border-gray-300 rounded-lg p-6 text-center">
            <p className="text-sm text-gray-500">
              You haven't created any blogs yet.
            </p>
            <button
              onClick={handleOpenCreateBlog}
              className="mt-3 inline-flex items-center gap-2 px-4 py-2 text-sm rounded-md bg-blue-600 text-white hover:bg-blue-700"
            >
              <span className="text-lg leading-none">+</span>
              Create your first blog
            </button>
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {blogs.map((blog) => (
              <article
                key={blog._id}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex flex-col h-full hover:shadow-md transition-shadow"
              >
                <header className="mb-2 flex justify-between">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 line-clamp-2">
                      {blog.title}
                    </h3>
                    <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-gray-500">
                      {blog.createdAt && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-gray-100">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          {new Date(blog.createdAt).toLocaleString()}
                        </span>
                      )}
                      <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                        General
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-xs">
                    <button
                      className="text-blue-600 hover:underline"
                      onClick={() => handleOpenUpdateBlog(blog)}
                    >
                      Update
                    </button>
                    <button
                      className="text-red-600 hover:underline"
                      onClick={() => handleOpenDeleteBlog(blog)}
                    >
                      Delete
                    </button>
                  </div>
                </header>

                <p className="text-sm text-gray-700 mt-2 line-clamp-3">
                  {blog.content}
                </p>
              </article>
            ))}
          </div>
        )}
      </div>
      <CreateBlogModal
        open={showCreateBlogModal}
        onClose={() => setShowCreateBlogModal(false)}
        onBlogCreated={handleBlogCreated}
      />
      <UpdateBlogModal
        open={showUpdateBlogModal}
        onClose={() => {
          setShowUpdateBlogModal(false);
          setSelectedBlogToUpdate(null);
        }}
        blog={selectedBlogToUpdate}
        onBlogUpdated={handleBlogUpdated}
      />
      <DeleteBlogModal
        open={showDeleteBlogModal}
        onClose={() => {
          setShowDeleteBlogModal(false);
          setSelectedBlogToDelete(null);
        }}
        blog={selectedBlogToDelete}
        onBlogDeleted={handleBlogDeleted}
      />
    </>
  );
};

export default UserDashboard;
