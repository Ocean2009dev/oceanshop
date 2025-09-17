import { Link } from "react-router-dom";
import type React from "react";
import { useState } from "react";
import { FaReply } from "react-icons/fa6";
import {
  AuthLayout,
  AuthInput,
  AuthButton,
  AuthForm,
} from "../components/Auth";

export const SignIn: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    general: "",
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Xóa lỗi khi người dùng bắt đầu nhập lại
    if (errors[field as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Reset errors
    setErrors({ email: "", password: "", general: "" });

    let hasErrors = false;
    const newErrors = { email: "", password: "", general: "" };

    // Validate email
    if (!formData.email) {
      newErrors.email = "Vui lòng nhập email";
      hasErrors = true;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Email không hợp lệ";
      hasErrors = true;
    }

    // Validate password
    if (!formData.password) {
      newErrors.password = "Vui lòng nhập mật khẩu";
      hasErrors = true;
    } else if (formData.password.length < 6) {
      newErrors.password = "Mật khẩu phải có ít nhất 6 ký tự";
      hasErrors = true;
    }

    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    // Simulate login logic
    console.log("Login submitted", formData);

    // Giả lập lỗi đăng nhập (có thể thay bằng API call thực tế)
    if (
      formData.email !== "test@example.com" ||
      formData.password !== "123456"
    ) {
      setErrors((prev) => ({
        ...prev,
        general: "Email hoặc mật khẩu không đúng",
      }));
      return;
    }

    // Xong khi đang nhập thành công
    window.location.href = "/";

    // Đăng nhập thành công
    alert("Đăng nhập thành công!");
  };

  return (
    <AuthLayout title="Đăng nhập" breadcrumbText="Đăng nhập">
      <AuthForm onSubmit={handleSubmit}>
        {errors.general && (
          <div className="mb-3 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {errors.general}
          </div>
        )}

        <div className="mb-3">
          <AuthInput
            type="email"
            placeholder="Nhập Email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            className={errors.email ? "border-red-500" : ""}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div className="mb-3">
          <AuthInput
            type="password"
            placeholder="Nhập Mật Khẩu"
            value={formData.password}
            onChange={(e) => handleInputChange("password", e.target.value)}
            className={errors.password ? "border-red-500" : ""}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </div>

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
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    general: "",
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^[0-9]{10,11}$/;
    return phoneRegex.test(phone);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Xóa lỗi khi người dùng bắt đầu nhập lại
    if (errors[field as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Reset errors
    setErrors({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      general: "",
    });

    let hasErrors = false;
    const newErrors = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      general: "",
    };

    // Validate firstName
    if (!formData.firstName.trim()) {
      newErrors.firstName = "Vui lòng nhập họ";
      hasErrors = true;
    }

    // Validate lastName
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Vui lòng nhập tên";
      hasErrors = true;
    }

    // Validate email
    if (!formData.email) {
      newErrors.email = "Vui lòng nhập email";
      hasErrors = true;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Email không hợp lệ";
      hasErrors = true;
    }

    // Validate phone
    if (!formData.phone) {
      newErrors.phone = "Vui lòng nhập số điện thoại";
      hasErrors = true;
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Số điện thoại phải có 10-11 chữ số";
      hasErrors = true;
    }

    // Validate password
    if (!formData.password) {
      newErrors.password = "Vui lòng nhập mật khẩu";
      hasErrors = true;
    } else if (formData.password.length < 6) {
      newErrors.password = "Mật khẩu phải có ít nhất 6 ký tự";
      hasErrors = true;
    }

    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    // Simulate signup logic
    console.log("Signup submitted", formData);

    // Giả lập kiểm tra email đã tồn tại
    if (formData.email === "existing@example.com") {
      setErrors((prev) => ({ ...prev, general: "Email này đã được sử dụng" }));
      return;
    }

    // Đăng ký thành công
    alert("Đăng ký thành công!");
  };

  return (
    <AuthLayout title="Tạo tài khoản" breadcrumbText="Đăng Ký">
      <AuthForm onSubmit={handleSubmit}>
        {errors.general && (
          <div className="mb-3 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {errors.general}
          </div>
        )}

        <div className="mb-3">
          <AuthInput
            type="text"
            placeholder="Nhập Họ"
            value={formData.firstName}
            onChange={(e) => handleInputChange("firstName", e.target.value)}
            className={errors.firstName ? "border-red-500" : ""}
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
          )}
        </div>

        <div className="mb-3">
          <AuthInput
            type="text"
            placeholder="Nhập Tên"
            value={formData.lastName}
            onChange={(e) => handleInputChange("lastName", e.target.value)}
            className={errors.lastName ? "border-red-500" : ""}
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
          )}
        </div>

        <div className="mb-3">
          <AuthInput
            type="email"
            placeholder="Nhập Email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            className={errors.email ? "border-red-500" : ""}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div className="mb-3">
          <AuthInput
            type="text"
            placeholder="Nhập số điện thoại"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            className={errors.phone ? "border-red-500" : ""}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        <div className="mb-3">
          <AuthInput
            type="password"
            placeholder="Nhập Mật Khẩu"
            value={formData.password}
            onChange={(e) => handleInputChange("password", e.target.value)}
            className={errors.password ? "border-red-500" : ""}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </div>

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
