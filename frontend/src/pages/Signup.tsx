import { useState } from "react";
import {
  HiOutlineMail,
  HiOutlineLockClosed,
  HiOutlineUser,
} from "react-icons/hi";
import { NavLink, useNavigate } from "react-router-dom";
import { signup } from "../api/userAPI";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (password === password2) {
        await signup({ email, name, password, password2 });
        navigate("/");
      } else {
        setError("Passwords do not match");
      }
    } catch (error) {
      setError(error.response.data.message);
    }
  };
  return (
    <div className="bg-slate-700">
      <div className="flex h-screen text-gray-900">
        <div className="w-11/12 p-8 m-auto bg-white rounded-lg sm:w-96 bg-opacity-80 bg-clip-padding">
          <div className="space-y-2">
            <div>
              <h1 className="text-2xl font-medium text-center md:text-4xl font-roboto">
                Create Account
              </h1>
            </div>
            <div>
              <div className="space-x-1 text-sm text-center md:text-base font-nunito">
                <span>Already have an account?</span>
                <NavLink className="font-semibold text-blue-500" to="/login">
                  Sign In
                </NavLink>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <form className="text-base font-nunito" onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="relative flex items-center">
                  <HiOutlineMail className="absolute w-5 h-5 ml-3 text-gray-400" />
                  <input
                    className="w-full p-2 pl-10 text-gray-800 placeholder-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="relative flex items-center">
                  <HiOutlineUser className="absolute w-5 h-5 ml-3 text-gray-400" />
                  <input
                    className="w-full p-2 pl-10 text-gray-800 placeholder-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                    type="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="name"
                    required
                  />
                </div>
                <div className="relative flex items-center">
                  <HiOutlineLockClosed className="absolute w-5 h-5 ml-3 text-gray-400" />
                  <input
                    className="w-full p-2 pl-10 text-gray-800 placeholder-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                  />
                </div>{" "}
                <div className="relative flex items-center">
                  <HiOutlineLockClosed className="absolute w-5 h-5 ml-3 text-gray-400" />
                  <input
                    className="w-full p-2 pl-10 text-gray-800 placeholder-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                    type="password2"
                    name="password2"
                    value={password2}
                    onChange={(e) => setPassword2(e.target.value)}
                    placeholder="Confirm Password"
                    required
                  />
                </div>
                {error ? <div className="text-red-600">{error}</div> : ""}
                <div className="flex items-start space-x-2 md:items-center">
                  <input
                    className="focus:outline-none"
                    type="checkbox"
                    name="terms"
                    id="serviceTerms"
                    required={true}
                  />
                  <label className="-mt-1 text-sm sm:mt-0" for="serviceTerms">
                    <span>I have read and agree to the </span>
                    <a className="font-semibold text-blue-500" href="">
                      Terms&nbsp;of&nbsp;Service
                    </a>
                  </label>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full p-2 text-sm font-semibold text-center text-white transition duration-100 rounded-md md:text-lg font-nunito bg-gradient-to-r from-blue-600 to-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300 hover:shadow-lg"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
