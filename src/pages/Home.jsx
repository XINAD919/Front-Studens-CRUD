import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="fondo h-screen">
      <div className="container h-full mx-auto text-white flex justify-center items-center">
        <div className="flex flex-col justify-center items-start sm:items-center ">
          <h1 className="text-4xl mb-2 w-72 sm:w-auto">
            Bienvenido al CRUD Students
          </h1>
          <Link className="bg-green-500 px-14 py-2 rounded" to="student-list">
            Start
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
