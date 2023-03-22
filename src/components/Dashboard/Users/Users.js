import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetUsersQuery } from "../../../features/api/usersApi";
import { getUsers } from "../../../features/users/usersSlice";
import User from "./User";

function Users() {
  const [page, setPage] = useState(1);
  const {isError, data, isLoading} = useGetUsersQuery(page)
  useEffect(() => {

  }, []);
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
            {
              isError ? <tr>
              <td colSpan={4} className="text-center">Something went wrong</td>
            </tr>:null
            }
            {
              isLoading ? <tr>
              <td colSpan={4} className="text-center">Loading...</td>
            </tr>: null
            }
              {
                data?.data?.map((user,index)=><User key={index} user={user} />)
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Users;
