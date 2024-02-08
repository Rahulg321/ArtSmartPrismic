import clsx from "clsx";
import React from "react";

type ButtonProps = {
  classname?: string;
  children: React.ReactNode;
};

const Button = ({ classname, children }: ButtonProps) => {
  return <button className={clsx("px-6 py-2", classname)}>{children}</button>;
};

export default Button;
