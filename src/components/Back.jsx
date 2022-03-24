import React from "react";
import { Link } from "react-router-dom";
const Back = ({ url }) => {
  return (
    <Link to={url}>
      <i className="fa-solid fa-arrow-left" />
    </Link>
  );
};

export default Back;
