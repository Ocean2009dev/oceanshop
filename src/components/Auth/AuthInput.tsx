import React from "react";

interface AuthInputProps {
  type?: "text" | "email" | "password" | "number";
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  className?: string;
}

export const AuthInput: React.FC<AuthInputProps> = ({
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
  className = "",
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className={`px-5 py-2.5 w-full border border-content mb-3.5 outline-0 ${
        type === "number" ? "appearance-none" : ""
      } ${className}`}
    />
  );
};
