import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center w-full h-[80vh]">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
