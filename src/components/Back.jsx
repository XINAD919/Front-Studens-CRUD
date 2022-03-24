import React from "react";
import { Tooltip } from "@material-ui/core";

import { Link } from "react-router-dom";
const Back = ({ url }) => {
  return (
    <Tooltip title="Volver"arrow>
      <Link to={url}>
        <i className="fa-solid fa-arrow-left" />
      </Link>
    </Tooltip>
  );
};

export default Back;
