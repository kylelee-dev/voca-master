import { useNavigate } from "react-router-dom";
import { useAuthDispatch } from "../context/authContext";
const useLogout = () => {
  const dispatch = useAuthDispatch();
  const navigate = useNavigate();
  const logout = () => {
    dispatch({ type: "LOGOUT_PENDING" });
    try {
      dispatch({ type: "LOGOUT_FULFILLED", payload: {} });
      navigate("/");
    } catch (error) {
      const { errorName, msg } = error.response.data;
      dispatch({ type: "LOGOUT_REJECTED", payload: { errorName, msg } });
    }
  };

  return logout;
};

export default useLogout;
