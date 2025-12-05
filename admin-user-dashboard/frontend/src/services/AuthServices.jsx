import axios from "axios";

const API_URl = import.meta.env.VITE_BACKEND_URL

export const loginRequest = async (email, password) => {
  try {
    const response = await axios.post(`${API_URl}auth/login`, {
      email,
      password,
    });
  
    return response.data;
  } catch (err) {
    const message = err?.response.data.message || "Invalid email and password."

    throw new Error(message);
    
  }
};