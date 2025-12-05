import axios from "axios";

const API_URl = import.meta.env.VITE_BACKEND_URL;

export const getBlogsByUserAdmin = async (token, userId) => {
  try {
    const response = await axios.get(`${API_URl}admin/users/${userId}/blogs`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data
  } catch (err) {
    if(!err.response)
        throw new Error("Server error. Try again later.");
        
    throw new Error(err.response.data?.message ||"Failed to fetch blogs.");
    
  }
};
