import React from "react";
import PropTypes from "prop-types";
import "./index.less";

const Mask = () => {
  return <div className="mask" onTouchMove={e => e.preventDefault()}></div>;
};

export default Mask;
