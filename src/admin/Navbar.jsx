import React from "react";

const Navbar = ({ title }) => {
  return (
    <nav className="bg-indigo-800 p-4">
      <div className="text-white text-2xl font-semibold">{title}</div>
    </nav>
  );
};

export default Navbar;
