// AdminDashboard.jsx
import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Side";

const Home = () => {
  return (
    <div className="flex h-screen bg-white mt-20">
      <Sidebar />
      <main className="flex-1 bg-white">
        <Navbar />

        {/* Page Content */}
        <div className=" p-14">
          {/* Add your page content here */}
          <h1 className="text-3xl font-semibold mb-4">
            Welcome to the Admin Dashboard
          </h1>
          <div className="bg-white p-6 rounded shadow-md">
            <p>Your dashboard content goes here...</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
