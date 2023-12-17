import log_icon from "../assets/image/logo/logo-icon.svg";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className=" w-56 h-screen overflow-x-hidden overflow-y-auto  bg-indigo-900 rounded-b-3xl rounded-t-xl  text-white">
      <div className="h-screen flex flex-col items-center justify-between gap-4 py-6">
        <nav className="flex flex-col justify-normal items-center">
          <NavLink to={"/"} className="link items-start ">
            <SidebarLink text="Dashboard" />
          </NavLink>
          <NavLink>
            <SidebarLink href="#" text="Users" />
          </NavLink>
          <NavLink>
            <SidebarLink href="#" text="Dashboard" />
          </NavLink>
          <NavLink>
            <SidebarLink href="#" text="Users" />
          </NavLink>
          <SidebarLink href="#" text="Dashboard" />
          <SidebarLink href="#" text="Users" />
          <SidebarLink href="#" text="Dashboard" />
          <SidebarLink href="#" text="Users" />
          <SidebarLink href="#" text="Dashboard" />
          <SidebarLink href="#" text="Users" />
          <SidebarLink href="#" text="Dashboard" />
          <SidebarLink href="#" text="Users" />
        </nav>
      </div>
    </aside>
  );
};

const SidebarLink = ({ href, text }) => {
  return (
    <a href={href} className="text-gray-300 hover:text-white py-2 px-4">
      {text}
    </a>
  );
};

export default Sidebar;
