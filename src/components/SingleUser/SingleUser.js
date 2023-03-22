import React from "react";
import { toast } from "react-hot-toast";
import { FiChevronLeft, FiExternalLink } from "react-icons/fi";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useGetSingleUserQuery } from "../../features/api/usersApi";
import Spinner from "../Spinner/Spinner";

function SingleUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isError, isLoading } = useGetSingleUserQuery(id);
  
  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    toast.error("Failed");
  }
  return (
    <div className="min-h-screen py-2 w-full">
      <button
        onClick={() => navigate(-1)}
        className="flex p-5 items-center duration-150 ease-in-out transition hover:text-blue-500 text-slate-800 text-sm font-medium"
      >
        <FiChevronLeft className="h-5" /> Back to Home
      </button>
      <div className="max-w-md mx-auto  my-0 lg:my-12 p-2 rounded-xl shadow-md border">
        <div className="flex flex-col md:flex-row gap-2 ">
          <div className="flex flex-col gap-2 justify-center">
            <img
              src={data?.data?.avatar}
              alt="user-img"
              className="h-20 w-20 rounded-xl"
            />
            <Link
              target={"_blank"}
              to={data?.support?.url}
              className="flex items-center gap-1 duration-150 text-sm text-slate-700 font-medium ease-in-out transition hover:text-blue-500"
            >
              <span>Support</span> <FiExternalLink className="h-5" />{" "}
            </Link>
          </div>
          <div className="flex flex-col flex-1 ">
            <h2 className="text-xl font-bold m-0 p-0 text-slate-800 ">
              {data?.data?.first_name + " " + data?.data.last_name}
            </h2>
            <p className="text-sm font-semibold p-0 m-0 text-slate-600">
              {data?.data?.email}
            </p>
            <p className="text-sm font-normal text-slate-500 mt-4">
              {data?.support?.text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleUser;
