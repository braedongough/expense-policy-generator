import React from "react";

const Step = ({ children, isActive }) => {
  return isActive ? <section>{children}</section> : null;
};

export default Step;
