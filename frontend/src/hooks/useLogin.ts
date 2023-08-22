import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuthDispatch } from "../context/authContext";

const useLogin = () => {
  const dispatch = useAuthDispatch();
  const navigate = useNavigate();
  const baseUrl = "http://localhost:8000/user";

  const login = async (userInfo) => {
    dispatch({ type: "LOGIN_PENDING" });
    try {
      const response = await axios.post(baseUrl + "/login", userInfo);
      dispatch({ type: "LOGIN_FULFILLED", payload: response.data });
      navigate("/study");
    } catch (error) {
      const { errorName, msg } = error.response.data;
      dispatch({ type: "LOGIN_REJECTED", payload: { errorName, msg } });
    }
  };

  return login;
};

export default useLogin;
