import React from "react";
import ContainScroll from "./index";
import Mask from "../mask";
import "./stories.less";

import readme from "./readme.md";

export default {
  title: "sloth-ui|ContainScroll",
  parameters: {
    notes: readme
  }
};

const renderList = num => {
  let i = 0;
  const result = [];
  while (i < num) {
    result.push(<li>{i}</li>);
    i++;
  }
  return <ul>{result}</ul>;
};
export const demo = () => {
  return (
    <div className="container">
      <div className="page">{renderList(50)}</div>
      <Mask />
      <div className="popup">
        <ContainScroll height="300px">{renderList(50)}</ContainScroll>
      </div>
    </div>
  );
};
