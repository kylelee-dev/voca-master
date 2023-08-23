import { createContext, useContext, useEffect, useReducer } from "react";

const AuthContext = createContext(null);
const AuthDispatchContext = createContext(null);

const initialState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : {},
  isLoading: true,
  isError: false,
  error: {},
};

const authReducer = (state, { type, payload }) => {
  switch (true) {
    case [
      "LOGIN_PENDING",
      "SIGNUP_PENDING",
      "LOGOUT_PENDING",
      "GET_USER_PENDING",
    ].includes(type):
      return { ...state, isLoading: true, isError: false, error: {} };

    case [
      "LOGIN_FULFILLED",
      "SIGNUP_FULFILLED",
      "LOGOUT_FULFILLED",
      "GET_USER_FULFILLED",
    ].includes(type):
      return {
        ...state,
        isLoading: false,
        isError: false,
        error: {},
        user: payload,
      };

    case [
      "LOGIN_REJECTED",
      "SIGNUP_REJECTED",
      "LOGOUT_REJECTED",
      "GET_USER_REJECTED",
    ].includes(type):
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: payload
          ? { errorName: payload.errorName, msg: payload.msg }
          : {},
      };
    case ["PUSH_SUBJECT",
      "PULL_SUBJECT"].includes(type):
      const newUser = state.user;
      newUser.subjects = payload
      return {
        ...state,
        isLoading: false,
        isError: false,
        error: {},
        user: newUser
      }
    default:
      return { ...state };
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state]);
  return (
    <AuthContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthContext.Provider>
  );
};

export const useAuthSelector = () => useContext(AuthContext);
export const useAuthDispatch = () => useContext(AuthDispatchContext);
