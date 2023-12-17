const Sidebar = () => {
  return (
    <aside className="w-64 bg-indigo-800 mt-12 text-white">
      <div className="h-screen flex flex-col items-center justify-between py-4">
        {/* Sidebar Logo */}
        <div className="text-3xl font-semibold">Admin Logo</div>

        {/* Sidebar Links */}
        <nav className="flex flex-col items-center">
          <SidebarLink href="#" text="Dashboard" />
          <SidebarLink href="#" text="Users" />
          {/* Add more sidebar links as needed */}
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
