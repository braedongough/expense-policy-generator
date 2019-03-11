import React, { FC } from "react";

interface IProps {
  visible?: boolean;
}

const Placeholder: FC<IProps> = ({ visible }) =>
  visible ? (
    <p>
      This is where your <strong>expense policy</strong> will appear
    </p>
  ) : null;

export default Placeholder;
