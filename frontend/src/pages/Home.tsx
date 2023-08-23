import React from "react";
import useGetSubjects from "../hooks/useGetSubjects";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuthSelector } from "../context/authContext";

export default function Home() {
  const getSubjects = useGetSubjects();
  const navigate = useNavigate();
  const state = useAuthSelector();

  const user = state.user;

  return <div>

    <div className="flex flex-col m-auto max-w-xl max-h-fit  p-24 my-20 border rounded-lg border-solid border-opacity-40">

      <div className="w-full  items-center flex flex-col">
        {user.token ? (<button className="text-center border rounded-lg p-2 m-2 w-5/12" onClick={() => {
          console.log(user)
          getSubjects();

        }}>Study</button>) : (<button className="text-center border rounded-lg p-2 m-2 w-5/12" onClick={() => {
          navigate("/login");
        }}>Login</button>)}

        <NavLink to="https://github.com/kylelee-dev/voca-master" className="text-center border rounded-lg p-2 m-2 w-5/12">Check My Code</NavLink>
      </div>
    </div>
  </div>;
}
