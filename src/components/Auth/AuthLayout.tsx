import React from "react";
import { Link } from "react-router-dom";
import Container from "../Layout/Container";
import "../../styles/login.css";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  breadcrumbText: string;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  title,
  breadcrumbText,
}) => {
  return (
    <div id="clouds" className="h-screen relative">
      <Container>
        <div className="py-4">
          <h1>
            <Link to={"/"}>Trang chủ</Link> /{" "}
            <Link to={"/signin"}> Tài khoản</Link> / {breadcrumbText}
          </h1>
        </div>
      </Container>

      {/* Cloud animations */}
      <div>
        <div className="cloud x1"></div>
        <div className="cloud x2"></div>
        <div className="cloud x3"></div>
        <div className="cloud x4"></div>
        <div className="cloud x5"></div>
      </div>

      {/* Auth form container */}
      <div className="mx-2 absolute top-1/2 left-58 md:left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-[90%] md:w-full flex-col bg-white p-4 md:p-10 max-w-2xl max-h-xl">
        <h1 className="text-2xl font-semibold pb-4">{title}</h1>
        {children}
      </div>
    </div>
  );
};
