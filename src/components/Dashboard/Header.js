import React from "react";
import { FiBell, FiSearch } from "react-icons/fi";
import UserImage from "../../images/user.png";

function Header(props) {
  return (
    <div className="w-full flex justify-end lg:justify-between items-center gap-4 lg:gap-0 shadow p-4">
      <form className="w-auto lg:w-1/3 p-3 flex items-center cursor-pointer rounded-xl bg-transparent lg:bg-slate-100 border-2 border-transparent focus-within:border-slate-400 focus-within:text-slate-600">
        <input
          type="text"
          placeholder="Search"
          className="text-sm hidden lg:block bg-transparent outline-none focus:outline-none flex-1 texts-slate-500 font-medium "
        />
        <div className="p-1">
          <FiSearch className="h-6 text-slate-400" strokeWidth={2} />
        </div>
      </form>
      <div className="flex justify-end items-center lg:gap-6 gap-4">
        <div className=" cursor-pointer">
          <FiBell className="h-8 text-slate-400 " strokeWidth={3} />
        </div>
        <div className=" cursor-pointer">
          <img
            src={UserImage}
            className="w-[47px] h-[47px] rounded-full object-fill"
            alt="user-img"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
