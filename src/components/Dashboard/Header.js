import Dropdown from "rc-dropdown";
import Menu, { Item as MenuItem } from "rc-menu";
import "rc-dropdown/assets/index.css";
import React from "react";
import { FiBell, FiLogOut, FiSearch } from "react-icons/fi";
import UserImage from "../../images/user.png";
import { useNavigate } from "react-router-dom";


function Header() {
  const navigate = useNavigate()
  const userLogout = () => {
    localStorage.removeItem('sd-token');
    navigate('/signIn');

  }
  const menu = (
    <Menu className="!rounded-xl shadow min-w-[150px]" >
      <MenuItem key={1}>
        <button onClick={userLogout}  className="p-2 text-sm font-semibold w-full flex justify-start items-center gap-2 rounded-t-xl text-slate-700 hover:bg-slate-100 duration-300 ease-in-out transition cursor-pointer border-b border-slate-300">
          <FiLogOut className="h-6 text-slate-700" strokeWidth={3} />
          Logout
        </button>
      </MenuItem>
    </Menu>
  );
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
        <Dropdown
            trigger={["click"]}
            overlay={menu}
            animation="slide-up"
          >
            <button>
            <img
            src={UserImage}
            className="w-[47px] h-[47px] rounded-full object-fill"
            alt="user-img"
          />
            </button>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}

export default Header;
