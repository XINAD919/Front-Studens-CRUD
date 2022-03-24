import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <h1>Bienvenido al CRUD Students</h1>
      <Link to="student-list">Start</Link>
    </div>
  );
};

export default Home;
