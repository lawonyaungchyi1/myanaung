import { axiosInstance } from "./../config";

const API_URI = "api/auth";

//Register a user
const register = async (userData) => {
  const response = await axiosInstance.post(API_URI + "/register", userData);

  if (response.data) {
    localStorage.setItem(
      "lawonyaungchyi2022-user",
      JSON.stringify(response.data)
    );
  }

  return response.data;
};
// Login a user
const login = async (userData) => {
  const response = await axiosInstance.post(API_URI + "/login", userData);

  if (response.data) {
    localStorage.setItem(
      "lawonyaungchyi2022-user",
      JSON.stringify(response.data)
    );
  }

  return response.data;
};

//Logout
const logout = async () => {
  localStorage.removeItem("lawonyaungchyi2022-user");
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
