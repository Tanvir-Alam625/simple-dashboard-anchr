import React from "react";
import { FiFilePlus, FiMoreVertical, FiTrash2 } from "react-icons/fi";
import UserImage from "../../../images/user.png";
import Dropdown from "rc-dropdown";
import Menu, { Item as MenuItem, Divider } from "rc-menu";
import "rc-dropdown/assets/index.css";
function User() {
  function onSelect({ key }) {
    console.log(`${key} selected`);
  }

  function onVisibleChange(visible) {
    console.log(visible);
  }

  const menu = (
    <Menu className="!rounded-xl shadow min-w-[150px]" onSelect={onSelect}>
      <MenuItem>
        <button className="p-2 text-sm font-semibold w-full flex justify-start items-center gap-1 rounded-t-xl text-slate-700 hover:bg-slate-100 duration-300 ease-in-out transition cursor-pointer border-b border-slate-300">
          <FiTrash2 className="h-6 text-slate-700" strokeWidth={3} />
          Delete
        </button>
      </MenuItem>
      <MenuItem>
        <button className="p-2 text-sm font-semibold w-full flex justify-start items-center gap-1  rounded-b-xl text-slate-700 hover:bg-slate-100 duration-300 ease-in-out transition cursor-pointer">
          <FiFilePlus className="h-6 text-slate-700" strokeWidth={3} />
          Details
        </button>
      </MenuItem>
    </Menu>
  );
  return (
    <tr>
      <td className="p-2 text-center">1</td>
      <td className="p-2 text-left">
        <div className="flex items-center gap-5">
          <img
            src={UserImage}
            className=" h-16 w-16 rounded-xl"
            alt="user-img"
          />
          <p className="text-sm text-slate-700 font-semibold">Michael Lawson</p>
        </div>
      </td>
      <td className="p-2 text-left">
        <p className="text-sm text-slate-700 font-semibold">
          michael.lawson@reqres.in
        </p>
      </td>
      <td className="p-2 text-center">
        <div>
          <Dropdown
            trigger={["click"]}
            overlay={menu}
            animation="slide-up"
            onVisibleChange={onVisibleChange}
          >
            <button>
              <FiMoreVertical className="h-8 text-slate-700" strokeWidth={3} />
            </button>
          </Dropdown>
        </div>
      </td>
    </tr>
  );
}

export default User;
