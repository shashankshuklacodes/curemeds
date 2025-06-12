// src/services/authServices.jsx
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth'; // Change if using a hosted backend

// Login API call
export const loginUser = async ({ email, password, role }) => {
  const response = await axios.post(`${API_URL}/login`, {
    email,
    password,
    role,
  });
  return response.data;
};

// Register API call
export const registerUser = async ({ name, email, password, role }) => {
  const response = await axios.post(`${API_URL}/register`, {
    name,
    email,
    password,
    role,
  });
  return response.data;
};
