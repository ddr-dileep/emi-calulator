import React, { memo } from "react";

// styling
import "./heading.scss";

const Heading = ({ title, className }) => {
  return <h2 className={`${className} common-heading`}>{title}</h2>;
};

export default memo(Heading);
