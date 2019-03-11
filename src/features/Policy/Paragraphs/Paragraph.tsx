import React, { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  isActive?: boolean;
}

const Paragraph: FC<Props> = ({ children, isActive }) =>
  isActive ? <section>{children}</section> : null;

export default Paragraph;
