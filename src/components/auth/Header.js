import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/paper.png";
function Header() {
  return (
    <div className="max-w-[1100px] my-7 mx-auto flex justify-between px-1 lg:px-0">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <img src={Logo} className="h-[44px] w-[50px] " alt="logo-img" />
        <h2 className="text-slate-800 font-bold text-3xl">Stack</h2>
      </Link>
      {/* Languages  */}
      <div className="text-slate-400 bg-slate-100 p-4 rounded-xl border-2 border-slate-100 focus-within:border-slate-400">
        <select
          name="languages"
          className="outline-none focus:outline-none bg-transparent h-full"
        >
          <option className=" bg-slate-100" value="english(UK)">
            English (UK)
          </option>
          <option className=" bg-slate-100" value="english(USA)">
            English (USA)
          </option>
          <option className=" bg-slate-100" value="spanish">
            Spanish
          </option>
          <option className=" bg-slate-100" value="Hindi">
            Hindi
          </option>
        </select>
      </div>
    </div>
  );
}

export default Header;
