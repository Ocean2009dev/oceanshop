import React from "react";

interface AuthFormProps {
  children: React.ReactNode;
  onSubmit?: (e: React.FormEvent) => void;
}

export const AuthForm: React.FC<AuthFormProps> = ({ children, onSubmit }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(e);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      {children}
    </form>
  );
};
