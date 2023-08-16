import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { HiOutlineMail, HiOutlineLockClosed } from "react-icons/hi";
import { login } from "../api/userAPI";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login({ email, password });
      navigate("/");
    } catch (error) {
      setError(error.response.data.message);
    }
  };
  return (
    <div className="bg-slate-700">
      <div className="flex h-screen text-gray-900">
        <div className="w-11/12 p-8 m-auto bg-white rounded-lg sm:w-96 bg-opacity-80 bg-clip-padding">
          <div className="space-y-1">
            <div>
              <h1 className="text-2xl font-medium text-center md:text-4xl font-roboto">
                Welcome Back!
              </h1>
            </div>
            <div>
              <div className="space-x-1 text-sm text-center md:text-base font-nunito">
                <span>Don't have an account yet?</span>
                <NavLink className="font-semibold text-blue-500" to="/signup">
                  Sign Up
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
                </div>
                <div className="text-red-600">{error ? error : ""}</div>
                <div>
                  <button
                    className="w-full p-2 text-sm font-semibold text-center text-white transition duration-100 rounded-md md:text-lg font-nunito bg-gradient-to-r from-blue-600 to-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300 hover:shadow-lg"
                    type="submit"
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    // <div>
    //   <form className="flex flex-col w-full max-w-lg mx-auto justify-center mt-20  text-center shadow-slate-500 shadow-md rounded-md min-h-s ">
    //     <h2 className="text-3xl font-bold my-10">Login</h2>

    //     <div className="flex flex-col text-left mx-5 md:mx-20">
    //       <label className="">
    //         <p className="mb-2">Email</p>
    //         <input
    //           className=""
    //           type="email"
    //           placeholder="email"
    //           value={email}
    //           name="email"
    //           onChange={(e) => setEmail(e.target.value)}
    //         />
    //       </label>
    //       <label>
    //         <p>Password</p>
    //         <input
    //           type="password"
    //           placeholder="password"
    //           name="password"
    //           value={password}
    //           onChange={(e) => setPassword(e.target.value)}
    //         />
    //       </label>
    //     </div>

    //     <button onClick={login}>Login</button>
    //   </form>
    // </div>
  );
}
