import React from "react";

const Placeholder = ({ visible }) =>
  visible ? (
    <p>
      This is where your <strong>expense policy</strong> will appear
    </p>
  ) : null;

export default Placeholder;
