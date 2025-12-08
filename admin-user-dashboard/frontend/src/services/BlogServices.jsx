import axios from "axios";

const API_URl = import.meta.env.VITE_BACKEND_URL;

export const getBlogsByUserAdmin = async (token, userId) => {
  try {
    const response = await axios.get(`${API_URl}admin/users/${userId}/blogs`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (err) {
    if (!err.response) throw new Error("Server error. Try again later.");

    throw new Error(err.response.data?.message || "Failed to fetch blogs.");
  }
};

export const getUserBlogs = async (token) => {
  try {
    const response = await axios.get(`${API_URl}user/myBlog`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data;

  } catch (err) {

    if (!err.response) throw new Error("Server error. Try again later.");

    throw new Error(err.response.data?.message || "Failed to fetch blogs.");
  }
};

export const createBlogByUser = async (token, blogData) => {
  try {
    const response = await axios.post(`${API_URl}user/createBlog`, blogData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return response.data;

  } catch (err) {

    if (!err.response) {
      throw new Error("Server error. Try again later.");
    }
    throw new Error(err.response.data?.message || "Failed to create Blog");
  }
};

export const updateBlogByUser = async (token, blogId, blogData) => {
  try {
    const response = await axios.patch(
      `${API_URl}user/updateBLog/${blogId}`,
      blogData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (err) {

    if (!err.response) {
      throw new Error("Server error. Try again later.");
    }

    throw new Error(err.response.data?.message || "Failed to update blog.");
  }
};

export const deleteBlogByUser = async (token, blogId) => {
  try {
    const res = await axios.delete(
      `${API_URl}user/deleteBlog/${blogId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return res.data;
  } catch (err) {

    if (!err.response) {
      throw new Error("Server error. Try again later.");
    }

    throw new Error(
      err.response.data?.message || "Failed to delete blog."
    );
  }
}; 
