import { NavLink } from "react-router-dom";
import { logout } from "../api/userAPI";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [user, setUser] = useState(false);
  const loggedIn = localStorage.getItem("user");

  return (
    <nav className="bg-gray-800 text-white">
      <div
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 text-gray-400"
        aria-label="Global"
      >
        <div className="">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "p-2 rounded-md bg-gray-700 text-white"
                : "p-2 rounded-md hover:bg-gray-700 hover:text-white"
            }
          >
            Voca Master
          </NavLink>
        </div>
        {user ? (
          <button onClick={logout}>Logout </button>
        ) : (
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "p-2 rounded-md bg-gray-700 text-white"
                : "p-2 rounded-md hover:bg-gray-700 hover:text-white"
            }
          >
            Login
          </NavLink>
        )}
      </div>
    </nav>
  );
}
