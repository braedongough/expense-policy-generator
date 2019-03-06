import React from "react";

const Paragraph = ({ text, isActive }) =>
  isActive ? <section>{text}</section> : null;

export default Paragraph;
