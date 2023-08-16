import axios, { AxiosResponse } from "axios";
import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const baseUrl = "http://localhost:7000/user";

export const login = async (userInfo) => {
  const response = await axios.post(baseUrl + "/login", userInfo);
  localStorage.setItem("user", JSON.stringify(response.data));

  return response;
};

export const signup = async (userInfo) => {
  const response = await axios.post(baseUrl + "/", userInfo);
  localStorage.setItem("user", JSON.stringify(response.data));

  return response;
};

export const logout = () => {
  localStorage.removeItem("user");
};
