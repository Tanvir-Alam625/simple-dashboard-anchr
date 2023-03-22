import React, { useEffect, useReducer, useState } from "react";
import GoogleIcon from "../../images/googleIcon.png";
import AppleIcon from "../../images/appleIcon.png";
import { FiAtSign, FiMeh, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import { useUserRegisterMutation } from "../../features/api/usersApi";
import { toast } from "react-hot-toast";
const initialState = {
  email: "",
  password: "",
  name: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "EMAIL":
      return {
        ...state,
        email: action.payload,
      };
    case "PASSWORD":
      return {
        ...state,
        password: action.payload,
      };
    case "NAME":
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};
function Signup() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [errorMessages, setErrorMessages] = useState(false);
  const [passwordHideShow, setPasswordHideShow] = useState(false);
  const [signInUser, { isError, isLoading, data, isSuccess, status }] =
    useUserRegisterMutation();
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (isLoading) {
      toast.loading("...Waiting", {
        id: "signUp",
      });
    }
    if (isSuccess && data) {
      toast.success("success", {
        id: "signUp",
      });
      setErrorMessages(false);
      localStorage.setItem("sd-token", data?.token);
      navigate(from, { replace: true });
    }
    if (isError) {
      localStorage.removeItem("sd-token");
      toast.error(" Failed", {
        id: "signUp",
      });
      setErrorMessages(true);
    }
  }, [isLoading, isError, status, data, isSuccess, navigate, from]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    signInUser(state);
  };
  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center">
        <div className="max-w-[32rem] mx-auto">
          {/* =============Page Header Start ========= */}
          <h1 className="text-2x font-bold text-slate-800 text-center my-5">
            Getting Started
          </h1>
          <div className="flex flex-col gap-8">
            <p className="text-slate-400 text-sm font-medium text-center">
              Create an account to continue!
            </p>
            <div className="flex flex-col md:flex-row gap-6 lg:gap-8">
              <button className=" transition duration-150 ease-in-out hover:bg-slate-100 bg-[#F0F5FA] rounded-xl text-slate-400 flex gap-2 py-5 px-[30px] ">
                <img src={GoogleIcon} className="h-6" alt="google-img" />
                <span className="text-sm font-medium">Sign Up with Google</span>
              </button>
              <button className=" transition duration-150 ease-in-out hover:bg-slate-100 bg-[#F0F5FA] rounded-xl text-slate-400 flex gap-2 py-5 px-[30px] ">
                <img src={AppleIcon} className="h-6" alt="apple-img" />
                <span className="text-sm font-medium">
                  Sign Up with Apple ID
                </span>
              </button>
            </div>
          </div>
          {/* =============Page Header End ========= */}
          {/* =============Divider Stat  ========= */}
          <div className="divider-container w-full my-7  relative flex justify-center items-center">
            <div className="w-full border-b-2 border-slate-200 h-1"></div>
            <div className="absolute  -top-2 left-[50%] text-slate-400 px-4 bg-white translate-x-[-50%]">
              OR
            </div>
          </div>
          {/* =============Divider End ========= */}
          <form onSubmit={handleSubmit} className="my-7">
            {/* Email  */}
            <div className="my-6">
              <div className="border-2 shadow flex border-slate-200  focus-within:border-slate-400 rounded-xl ">
                <div className="pt-5 pb-5 pl-5 pr-3 rounded-l-xl">
                  <FiAtSign className="text-slate-500 h-6 font-medium" />
                </div>
                <input
                  className="w-full rounded-r-xl px-2 font-medium text-sm outline-none focus:outline-none"
                  type="text"
                  value={state.email}
                  onChange={(e) =>
                    dispatch({ type: "EMAIL", payload: e.target.value })
                  }
                  placeholder="Your Email"
                  autoComplete="off"
                />
              </div>
              {errorMessages ? (
                <p className="text-red-500 text-sm font-medium my-4">
                  Enter the valid email
                </p>
              ) : null}
            </div>
            {/* Name  */}
            <div className="my-6">
              <div className="border-2 shadow flex border-slate-200  focus-within:border-slate-400 rounded-xl ">
                <div className="pt-5 pb-5 pl-5 pr-3 rounded-l-xl">
                  <FiMeh className="text-slate-500 h-6 font-medium" />
                </div>
                <input
                  className="w-full rounded-r-xl px-2 font-medium text-sm outline-none focus:outline-none"
                  type="text"
                  value={state.name}
                  onChange={(e) =>
                    dispatch({ type: "NAME", payload: e.target.value })
                  }
                  placeholder="Your Name"
                  autoComplete="off"
                />
              </div>
            </div>
            {/* Password  */}
            <div className="my-6">
              <div className="border-2 shadow flex relative  border-slate-200  focus-within:border-slate-400 rounded-xl ">
                <div className="pt-5 pb-5 pl-5 pr-3 rounded-l-xl">
                  <FiLock className="text-slate-500 h-6 font-medium" />
                </div>
                <input
                  className="w-full rounded-r-xl px-2 font-medium text-sm outline-none focus:outline-none"
                  type={passwordHideShow ? "text" : "password"}
                  placeholder="Create Password"
                  autoComplete="off"
                  value={state.password}
                  onChange={(e) =>
                    dispatch({ type: "PASSWORD", payload: e.target.value })
                  }
                />
                <div
                  onClick={() => setPasswordHideShow(!passwordHideShow)}
                  className="p-2 absolute  right-3 top-1/2 cursor-pointer translate-y-[-50%] z-50"
                >
                  {passwordHideShow ? (
                    <FiEye className="text-slate-500  h-6 font-medium" />
                  ) : (
                    <FiEyeOff className="text-slate-500  h-6 font-medium" />
                  )}
                </div>
              </div>
              {errorMessages?.name ? (
                <p className="text-red-500 text-sm font-medium my-4"></p>
              ) : null}
            </div>
            {/* ProgressBar  */}
            <div className=" grid grid-cols-6 gap-2">
              <div className="bg-green-500 rounded-xl p-1"></div>
              <div className="bg-green-500 rounded-xl p-1"></div>
              <div className="bg-green-500 rounded-xl p-1"></div>
              <div className="bg-green-500 rounded-xl p-1"></div>
              <div className="bg-slate-300 rounded-xl p-1"></div>
              <div className="bg-slate-300 rounded-xl p-1"></div>
            </div>
            {/* Terms & Condition  */}
            <div className="my-6 flex gap-4 items-center">
              <input
                type="checkbox"
                id="terms"
                className="h-4 w-4 rounded-xl bg-slate-300 border !border-slate-400 outline-none  focus:outline-none"
              />
              <label htmlFor="terms" className="text-sm text-slate-400">
                I agree to the Terms & Conditions
              </label>
            </div>
            {/* Submit Button  */}
            <div className="my-6">
              <button className="w-full bg-blue-500 p-5 rounded-xl cursor-pointer duration-300 ease-in-out transition-all text-slate-50 font-medium text-sm hover:bg-blue-600">
                Sign Up
              </button>
            </div>
            <div className="flex justify-center">
              <p className="text-sm font-medium text-slate-400">
                Already have an account?
                <Link to="/signIn" className="text-blue-500">
                  Sign In
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
