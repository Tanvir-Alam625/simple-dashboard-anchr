import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useGetUsersQuery } from "../../../features/api/usersApi";
import User from "./User";

function Users() {
  const [page, setPage] = useState(1);
  const {isError, data, isLoading} = useGetUsersQuery(page);
  const handlePageClick = ({selected}) => setPage(selected + 1)
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
                data?.data?.map(user=><User key={user.id}  user={user} />)
              }
            </tbody>
          </table>
        </div>
        {data ? <>
        <ReactPaginate
        nextLabel=">>"
        onPageChange={handlePageClick}
        pageRangeDisplayed={data?.per_page}
        pageCount={Math.ceil(parseInt(data?.total) / parseInt(data?.per_page))}
        previousLabel="<<"
        containerClassName={"flex gap-2 items-center text-xl text-slate-700 font-medium my-4 px-2"}
        pageClassName={'shadow rounded-xl'}
        pageLinkClassName={'px-4 py-3'}
        nextClassName={'shadow rounded-xl'}
        previousClassName={'shadow rounded-xl'}
        nextLinkClassName={'p-4 '}
        previousLinkClassName={'p-4'}
        activeClassName={'bg-blue-500 text-slate-50'}
      />
      </>
      : null}
      </div>
    </div>
  );
}

export default Users;
