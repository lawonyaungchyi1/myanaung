import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://lawonyaungchyi2022.herokuapp.com/",
  // baseURL: "https://localhost:5000/",
});
