import React from "react";

const Step = ({ children, isActive }) =>
  isActive ? <section>{children}</section> : <section>fuck you</section>;

export default Step;
