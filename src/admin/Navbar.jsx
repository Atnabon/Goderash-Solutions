import React from "react";
import log_icon from "../assets/image/logo/logo-icon.svg";
import { NavLink } from "react-router-dom";

const Navbar = ({ title }) => {
  return (
    <nav className="fixed-navbar w-full bg-slate-50 p-5 shadow-md ">
      <div className="text-white text-2xl font-semibold">{title}</div>
      <div className="rounded-full">
        <NavLink to={"/"} className="link items-start ">
          <img
            alt="Logo"
            className="w-[70] h-[40] object-cover rounded-full  "
            height="40"
            src={log_icon}
            width="50"
          />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
