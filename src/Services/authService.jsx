import axios from "axios";

const API_URL = "https://localhost:7020/api/Auth/";

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}Login`, {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const register = async (username, email, password, role) => {
  try {
    const response = await axios.post(`${API_URL}Register`, {
      username,
      email,
      password,
      role,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
