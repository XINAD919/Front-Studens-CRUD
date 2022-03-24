import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="bg-gray-900 w-screen h-screen">
      <h1 className="text-5xl text-red-500 ">Upps Page Not found.</h1>
      <Link to="/">Go to Home.</Link>
    </div>
  );
};

export default NotFound;
