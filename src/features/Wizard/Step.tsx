import React from "react";

interface IProps {
  children: JSX.Element;
  isActive: boolean;
}

const Step: React.FC<IProps> = ({ children, isActive }: IProps) =>
  isActive ? <section>{children}</section> : null;

export default Step;
