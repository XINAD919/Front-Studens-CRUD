import React from "react";
import { Outlet } from "react-router-dom";
import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/Header";

const MainLayout = () => {
  return (
    <div className="h-screen bg-gray-50">
      <Header />
      <Outlet />
      <ToastContainer />
    </div>
  );
};

export default MainLayout;
