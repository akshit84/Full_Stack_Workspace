import axios from "axios";

const API_URl = import.meta.env.VITE_BACKEND_URL;

export const createUserByAdmin = async (token, userData) => {
  try {
    const response = await axios.post(`${API_URl}admin/createUser`, userData, {
      headers: {
        "Content-type": "Application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (err) {
    if (!err.response) {
      throw new Error("Server error. Please try again later.");
    }
    const message = err?.response.data.message || "Failed to create user.";
    throw new Error(message);
  }
};

export const getAllUsers = async (token) => {
  try {
    const response = await axios.get(`${API_URl}admin/allUsers`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (err) {
    const message = err?.response?.data?.message || "Failed to fetch users.";
    throw new Error(message);
  }
};

export const updateUserByAdmin = async (token, userId, payload) => {
  try {
    const response = await axios.patch(
      `${API_URl}admin/updateUser/${userId}`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "Application/json",
        },
      }
    );

    return response.data;
  } catch (err) {
    if (!err.response) throw new Error("Server Error. Please try again later.");
    throw new Error(err.response.data?.message || "Failed to update user.");
  }
};

export const deleteUserByAdmin = async (token, userId) => {
  try {
    const response = await axios.delete(
      `${API_URl}admin/deleteUser/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (err) {
    if (!err.response) throw new Error("Server Error. Please try again later.");
    const msg = err.response.data?.message || "Failed to delete user.";
    throw new Error(msg);
  }
};
