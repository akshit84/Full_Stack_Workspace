import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import AuthContext from "../Context/AuthContext";
import { handleError } from "../utils";
// import { getBlogsByUserAdmin } from "../services/blogServices";
import { getBlogsByUserAdmin } from "../services/BlogServices";

const AdminUserBlogs = () => {
  const { userId } = useParams();
  const { token } = useContext(AuthContext);

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const result = await getBlogsByUserAdmin(token, userId);

      if (!result.success) {
        handleError(result.message);
        return;
      }

      setBlogs(result.blogs);
    } catch (err) {
      handleError(err.message || "Failed to load blog.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [userId]);

  return (
    <>
      {/* <div>
        <h2 className="text-xl font-bold mb-4">Blogs by User</h2>

        {loading ? (
          <p>Loading...</p>
        ) : blogs.length === 0 ? (
          <p>No blogs found for this user.</p>
        ) : (
          <div className="space-y-4">
            {blogs.map((blog) => (
              <div
                key={blog._id}
                className="border p-4 bg-white rounded shadow"
              >
                <h3 className="font-bold text-lg">{blog.title}</h3>
                <p className="text-gray-600 text-sm">
                  {blog.createdAt
                    ? new Date(blog.createdAt).toLocaleString()
                    : ""}
                </p>
                <p className="mt-2">{blog.content}</p>
              </div>
            ))}
          </div>
        )}
      </div> */}

      <div className="space-y-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Blogs by User</h2>
            <p className="text-sm text-gray-500">
              Viewing all blogs written by this user.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-white rounded-lg shadow-sm px-4 py-2 border border-gray-100">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-semibold text-blue-700">
              {blogs[0]?.author?.fullname
                ? blogs[0].author.fullname.charAt(0).toUpperCase()
                : "U"}
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-gray-800">
                {blogs[0]?.author?.fullname || "Unknown User"}
              </span>
              <span className="text-xs text-gray-500">
                {blogs[0]?.author?.email || "Email not available"}
              </span>
            </div>
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
            Loading blogs...
          </div>
        ) : blogs.length === 0 ? (
          <div className="bg-white border border-dashed border-gray-300 rounded-lg p-6 text-center">
            <p className="text-sm text-gray-500">
              No blogs found for this user.
            </p>
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {blogs.map((blog) => (
              <article
                key={blog._id}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex flex-col h-full hover:shadow-md transition-shadow"
              >
                <header className="mb-2">
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
                      {blog.category || "General"}
                    </span>
                  </div>
                </header>

                <p className="text-sm text-gray-700 mt-2 line-clamp-3">
                  {blog.content}
                </p>

                {/* Footer (optional for future actions) */}
                {/* <div className="mt-3 flex justify-end gap-2">
            <button className="text-xs text-blue-600 hover:underline">
              View details
            </button>
          </div> */}
              </article>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default AdminUserBlogs;
