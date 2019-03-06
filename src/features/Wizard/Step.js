import React from "react";

const Step = ({ children, isActive }) =>
  isActive ? <section>{children}</section> : null;

export default Step;
