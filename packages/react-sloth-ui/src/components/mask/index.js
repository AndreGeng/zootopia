import React from "react";
import "./index.pcss";

const Mask = () => {
  return <div className="mask" onTouchMove={e => e.preventDefault()}></div>;
};

export default Mask;
