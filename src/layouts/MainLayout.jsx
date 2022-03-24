import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const MainLayout = () => {
  return (
    <div className="h-auto bg-gray-50">
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
