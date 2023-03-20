import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getUsers } from "../../../features/users/usersSlice";

import User from "./User";
function Users() {
  useEffect(() => {
    // getUsers();
    fetch("https://reqres.in/api/users?page=1")
      .then((res) => res.json())
      .then((result) => console.log(result));
  }, []);
  // const users = useSelector((state) => state.users);
  // console.log(users);
  return (
    <div className="px-2">
      <h2 className="text-xl font-semibold text-slate-800 my-8">Users List </h2>
      <div className="w-full">
        <div className="min-w-[30rem]">
          <table className="w-full text-slate-700">
            <thead>
              <tr>
                <th className="p-2 uppercase bg-slate-100 text-center rounded-l-xl">
                  #ID
                </th>
                <th className="p-2 uppercase bg-slate-100 text-left">User</th>
                <th className="p-2 uppercase bg-slate-100 text-left">Email</th>
                <th className="p-2 uppercase bg-slate-100 text-center rounded-r-xl ">
                  Options
                </th>
              </tr>
            </thead>
            <tbody>
              <User />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Users;
