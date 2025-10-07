import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaArrowPointer, FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import Container from "../components/Layout/Container";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validation functions
  const validateEmail = (email: string): string => {
    if (!email.trim()) return "Email là bắt buộc";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Email không hợp lệ";
    return "";
  };

  const validatePhone = (phone: string): string => {
    if (!phone.trim()) return "Số điện thoại là bắt buộc";
    const phoneRegex = /^[0-9]{10,11}$/;
    if (!phoneRegex.test(phone.replace(/\s/g, ""))) {
      return "Số điện thoại phải có 10-11 chữ số";
    }
    return "";
  };

  const validateFullName = (name: string): string => {
    if (!name.trim()) return "Họ tên là bắt buộc";
    if (name.trim().length < 2) return "Họ tên phải có ít nhất 2 ký tự";
    return "";
  };

  const validateMessage = (message: string): string => {
    if (!message.trim()) return "Nội dung tin nhắn là bắt buộc";
    if (message.trim().length < 10) return "Tin nhắn phải có ít nhất 10 ký tự";
    return "";
  };

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case "fullName":
        return validateFullName(value);
      case "email":
        return validateEmail(value);
      case "phone":
        return validatePhone(value);
      case "message":
        return validateMessage(value);
      default:
        return "";
    }
  };

  const saveDataForm = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateFormBlurEvent = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const error = validateField(name, value);

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const validateAllFields = (): boolean => {
    const newErrors = {
      fullName: validateFullName(formData.fullName),
      email: validateEmail(formData.email),
      phone: validatePhone(formData.phone),
      message: validateMessage(formData.message),
    };

    setErrors(newErrors);

    // Return true if no errors
    return !Object.values(newErrors).some((error) => error !== "");
  };

  const submitContact = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields before submission
    if (!validateAllFields()) {
      toast.error("Vui lòng kiểm tra lại thông tin đã nhập");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("http://localhost:8017/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        toast.error("Gửi dữ liệu không thành công!!!");
        return;
      }

      toast.success(
        "Gửi dữ liệu thành công! Chúng tôi sẽ liên hệ với bạn sớm."
      );

      // Reset form after successful submission
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        message: "",
      });
      setErrors({
        fullName: "",
        email: "",
        phone: "",
        message: "",
      });

      const data = await res.json();
      console.log("Dữ liệu nhận được từ BE", data);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Có lỗi xảy ra khi gửi thông tin. Vui lòng thử lại!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container>
      <div className="h-full px-4 md:p-0">
        <div className="py-3">
          <h1>Trang chủ / Liên Hệ</h1>
        </div>

        <div className="flex flex-col md:flex-row gap-4 h-full pb-4">
          <div className="w-full md:w-1/4 shrink-0">
            <div className=" bg-white  rounded-b-md overflow-hidden">
              <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors">
                <h3 className="font-bold text-2xl text-gray-800">Danh Mục</h3>
              </div>

              <div className="px-4 overflow-hidden">
                <ul className="flex flex-col space-y-3  border-t border-gray-200  py-4 ">
                  <li className="font-semibold">
                    <Link to={"/"}>Sản phẩm nổi bật</Link>
                  </li>
                  <li className="font-semibold">
                    <Link to={"/"}>Tất cả sản phẩm</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className=" bg-white  rounded-b-md overflow-hidden">
              <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors">
                <h3 className="font-bold text-2xl text-gray-800">
                  Sản phẩm bán chạy
                </h3>
              </div>

              <div className=" px-4 overflow-hidden">
                <ul className="flex flex-col space-y-3  border-t border-gray-200  py-4 ">
                  <li className="font-semibold">
                    <Link to={"/sneaker"}>Nike</Link>
                  </li>
                  <li className="font-semibold">
                    <Link to={"/sneaker"}>Adidas</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* thông tin liên lạc */}
          <div className="w-full md:w-3/4 flex-1 bg-white p-4">
            <h1 className="text-3xl font-bold text-center uppercase mb-4">
              Liên Hệ
            </h1>

            <div className="relative w-full  h-[200px] md:h-[301px] overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.913486560752!2d106.63871717508907!3d10.804446589346044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175295a44817255%3A0x85536a4f87c2c232!2zNjIgTMOqIFbEg24gSHXDom4sIFBoxrDhu51uZyAxMywgVMOibiBCw6xuaCwgSOG7kyBDaMOtIE1pbmgsIFZpZXRuYW0!5e1!3m2!1sen!2sus!4v1754806002043!5m2!1sen!2sus"
                className="absolute top-0 left-0 w-full h-full  border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="w-full flex flex-col md:flex-row justify-between gap-8 pt-4">
              <div className="w-full">
                <h6 className="text-xl font-bold uppercase mb-4">
                  gửi thắc mắc cho chúng tôi
                </h6>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                  <div className="flex">
                    <div className="ml-3">
                      <p className="text-sm text-blue-700">
                        <strong>Lưu ý:</strong> Vui lòng điền đầy đủ thông tin
                        để chúng tôi có thể hỗ trợ bạn tốt nhất. Các trường có
                        dấu <span className="text-red-500">*</span> là bắt buộc.
                      </p>
                    </div>
                  </div>
                </div>

                <form onSubmit={submitContact}>
                  <div className="flex flex-col mb-4">
                    <label htmlFor="fullName" className="pb-2 font-medium">
                      Họ và tên <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      placeholder="Nhập họ và tên của bạn"
                      className={`px-5 py-2.5 border rounded-md outline-none transition-colors ${
                        errors.fullName
                          ? "border-red-500 focus:border-red-500"
                          : "border-gray-300 focus:border-blue-500"
                      }`}
                      onChange={saveDataForm}
                      onBlur={validateFormBlurEvent}
                      value={formData.fullName}
                    />
                    {errors.fullName && (
                      <span className="text-red-500 text-sm mt-1">
                        {errors.fullName}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col mb-4">
                    <label htmlFor="phone" className="pb-2 font-medium">
                      Số điện thoại <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Nhập số điện thoại của bạn"
                      className={`px-5 py-2.5 border rounded-md outline-none transition-colors ${
                        errors.phone
                          ? "border-red-500 focus:border-red-500"
                          : "border-gray-300 focus:border-blue-500"
                      }`}
                      onChange={saveDataForm}
                      onBlur={validateFormBlurEvent}
                      value={formData.phone}
                    />
                    {errors.phone && (
                      <span className="text-red-500 text-sm mt-1">
                        {errors.phone}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col mb-4">
                    <label htmlFor="email" className="pb-2 font-medium">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Nhập email của bạn"
                      className={`px-5 py-2.5 border rounded-md outline-none transition-colors ${
                        errors.email
                          ? "border-red-500 focus:border-red-500"
                          : "border-gray-300 focus:border-blue-500"
                      }`}
                      onChange={saveDataForm}
                      onBlur={validateFormBlurEvent}
                      value={formData.email}
                    />
                    {errors.email && (
                      <span className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col mb-4">
                    <label htmlFor="message" className="pb-2 font-medium">
                      Nội dung tin nhắn <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Nhập nội dung tin nhắn của bạn..."
                      rows={5}
                      className={`px-5 py-2.5 border rounded-md outline-none transition-colors resize-vertical ${
                        errors.message
                          ? "border-red-500 focus:border-red-500"
                          : "border-gray-300 focus:border-blue-500"
                      }`}
                      onChange={saveDataForm}
                      onBlur={validateFormBlurEvent}
                      value={formData.message}
                    />
                    {errors.message && (
                      <span className="text-red-500 text-sm mt-1">
                        {errors.message}
                      </span>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`inline-flex items-center py-3 px-6 text-white uppercase text-sm font-medium rounded-md transition-colors ${
                      isSubmitting
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-black hover:bg-gray-800 cursor-pointer"
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        <span>Đang gửi...</span>
                      </>
                    ) : (
                      <>
                        <span className="mr-2">Gửi liên hệ</span>
                        <FaArrowPointer />
                      </>
                    )}
                  </button>
                </form>
              </div>

              <div className="w-full">
                <h6 className="text-xl font-bold uppercase mb-4">
                  thông tin liên hệ
                </h6>

                <p className="mb-2">
                  OceanShop chuyên cung cấp các mẫu giày sneaker chính hãng,
                  thời trang và chất lượng, đáp ứng mọi phong cách từ năng động,
                  trẻ trung đến sang trọng, cá tính. Nếu bạn cần tư vấn sản
                  phẩm, hỗ trợ đặt hàng hoặc giải đáp thắc mắc, hãy liên hệ với
                  chúng tôi:
                </p>

                <ul className="mt-6">
                  <li className="flex items-center ">
                    <FaLocationDot className="font-semibold mr-4 text-[18px]" />
                    <div className="flex flex-col">
                      <span>Địa chỉ</span>
                      <span className="text-[14px] py-1 text-wrap font-semibold">
                        62/8 Lê Văn Huân Phường 13 Quận Tân Bình
                      </span>
                    </div>
                  </li>
                  <li className="flex items-center  py-1 text-wrap group">
                    <FaPhone className="font-semibold mr-4 text-[18px]" />
                    <div className="flex flex-col cursor-pointer">
                      <span>Số điện thoại</span>
                      <span className="text-[14px]  font-semibold  transition duration-300 ease-in-out group-hover:text-shophover ">
                        0985449437
                      </span>
                    </div>
                  </li>
                  <li className="flex items-center pt-1 pb-2 group   ">
                    <MdOutlineEmail className="font-semibold mr-4 text-[18px]" />
                    <div className="flex flex-col cursor-pointer">
                      <span>Email</span>
                      <span className="text-[14px]  font-semibold  transition duration-300 ease-in-out group-hover:text-shophover ">
                        duongoc79@gmail.com
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
