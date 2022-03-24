import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="flex items-center w-full h-12 bg-gray-800 text-white mb-4">
      <nav className="">
        <Link to="/"><i className="fa-solid fa-house"></i> Home</Link>
      </nav>
    </header>
  );
};

export default Header;
