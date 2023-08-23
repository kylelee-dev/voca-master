import { useNavigate } from "react-router-dom";
import { useAuthDispatch } from "../context/authContext";
import axios from "axios";

const useSignup = () => {
  const navigate = useNavigate();
  const dispatch = useAuthDispatch();
  const baseUrl = "http://localhost:8000/user";

  const signup = async (userInfo) => {
    dispatch({ type: "SIGNUP_PENDING" });
    try {
      const response = await axios.post(baseUrl + "/", userInfo);
      dispatch({ type: "SIGNUP_FULFILLED", payload: response.data });
      navigate("/");
    } catch (error) {
      const { errorName, msg } = error.response.data;
      dispatch({ type: "SIGNUP_REJECTED", payload: { errorName, msg } });
    }
  };
  return signup;
};

export default useSignup;
