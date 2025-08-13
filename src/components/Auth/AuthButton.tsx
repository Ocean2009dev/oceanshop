import React from "react";

interface AuthButtonProps {
  type?: "submit" | "button";
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
}

export const AuthButton: React.FC<AuthButtonProps> = ({
  type = "button",
  children,
  onClick,
  variant = "primary",
  className = "",
}) => {
  const baseClasses = "px-5 py-2.5 outline-0 cursor-pointer transition-colors";

  const variantClasses = {
    primary: "bg-black text-white hover:bg-gray-800 w-40",
    secondary: "hover:text-shophover",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
};
