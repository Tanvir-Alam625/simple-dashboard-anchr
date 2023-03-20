import React from "react";
import { FiMoreVertical } from "react-icons/fi";
import UserImage from "../../../images/user.png";
function Users() {
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
              <tr>
                <td className="p-2 text-center">1</td>
                <td className="p-2 text-left">
                  <div className="flex items-center gap-5">
                    <img
                      src={UserImage}
                      className=" h-16 w-16 rounded-xl"
                      alt="user-img"
                    />
                    <p className="text-sm text-slate-700 font-semibold">
                      Michael Lawson
                    </p>
                  </div>
                </td>
                <td className="p-2 text-left">
                  <p className="text-sm text-slate-700 font-semibold">
                    michael.lawson@reqres.in
                  </p>
                </td>
                <td className="p-2 text-center">
                  <div className="relative">
                    <div className="dropdown-toggle">
                      <button>
                        <FiMoreVertical
                          className="h-8 text-slate-700"
                          strokeWidth={3}
                        />
                      </button>
                    </div>
                    <div className="dropdown-content min-w-[150px] my-1 shadow rounded-xl z-20 hidden flex-col absolute ">
                      <button className="p-2 duration-300 ease-in-out transition hover:bg-slate-100 flex w-full gap-2 border-b rounded-t-xl border-slate-300">
                        Delete
                      </button>
                      <button className="p-2 duration-300 ease-in-out transition hover:bg-slate-100 flex w-full gap-2 border-b border-slate-300">
                        Delete
                      </button>
                      <button className="p-2 duration-300 ease-in-out transition hover:bg-slate-100 flex w-full rounded-b-xl  gap-2 ">
                        Details
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Users;
