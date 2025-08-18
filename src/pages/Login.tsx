import { Link } from "react-router-dom";
import type React from "react";
import { FaReply } from "react-icons/fa6";
import {
  AuthLayout,
  AuthInput,
  AuthButton,
  AuthForm,
} from "../components/Auth";

export const SignIn: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login submitted");
    // Add your login logic here
  };

  return (
    <AuthLayout title="Đăng nhập" breadcrumbText="Đăng nhập">
      <AuthForm onSubmit={handleSubmit}>
        <AuthInput type="email" placeholder="Nhập Email" required />

        <AuthInput type="password" placeholder="Nhập Mật Khẩu" required />

        <div className="flex justify-center items-center flex-col">
          <AuthButton type="submit" variant="primary" className="mb-2">
            Đăng nhập
          </AuthButton>

          <AuthButton variant="secondary">
            <Link to={"/signup"} className="flex items-center">
              Đăng ký
            </Link>
          </AuthButton>
        </div>
      </AuthForm>
    </AuthLayout>
  );
};
export const SignUp: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Signup submitted");
    // Add your signup logic here
  };

  return (
    <AuthLayout title="Tạo tài khoản" breadcrumbText="Đăng Ký">
      <AuthForm onSubmit={handleSubmit}>
        <AuthInput type="text" placeholder="Nhập Họ" required />

        <AuthInput type="text" placeholder="Nhập Tên" required />

        <AuthInput type="email" placeholder="Nhập Email" required />

        <AuthInput type="text" placeholder="Nhập số điện thoại" required />

        <AuthInput type="password" placeholder="Nhập Mật Khẩu" required />

        <div className="flex justify-center items-center flex-col">
          <AuthButton type="submit" variant="primary" className="mb-2">
            Đăng Ký
          </AuthButton>

          <AuthButton variant="secondary">
            <Link to={"/signin"} className="flex items-center">
              <FaReply className="mr-2" /> Quay lại đăng nhập
            </Link>
          </AuthButton>
        </div>
      </AuthForm>
    </AuthLayout>
  );
};
