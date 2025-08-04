import type React from "react";

interface buttonType {
  className?: string;
  children?: React.ReactNode;
}
export const Button: React.FC<buttonType> = ({ className, children }) => {
  return <div className={`${className ?? ""}`}>{children}</div>;
};
