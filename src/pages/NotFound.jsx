import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="fondo flex flex-col text-white font-light h-screen items-center justify-center text-center">
      <h1 className="text-4xl mb-3">
        404 <br /> OOPS PAGE NOT FOUND
      </h1>
      <Link className="bg-green-500 px-14 py-2 rounded" to="/">
        Return to Home.
      </Link>
    </div>
  );
};

export default NotFound;
