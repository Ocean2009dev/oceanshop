import { FaArrowLeftLong } from "react-icons/fa6";
import Container from "../components/Layout/Container";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const Payment = () => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    fullName: "",
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [errors, setErrors] = useState({
    email: "",
    phone: "",
    fullName: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Xóa lỗi khi người dùng nhập lại
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = { email: "", phone: "", fullName: "" };
    let hasErrors = false;

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Vui lòng nhập họ tên";
      hasErrors = true;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Vui lòng nhập email";
      hasErrors = true;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email không hợp lệ";
      hasErrors = true;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Vui lòng nhập số điện thoại";
      hasErrors = true;
    } else if (!/^[0-9]{10,11}$/.test(formData.phone)) {
      newErrors.phone = "Số điện thoại phải có 10-11 chữ số";
      hasErrors = true;
    }

    setErrors(newErrors);
    return !hasErrors;
  };

  const handlePayment = async () => {
    if (!validateForm()) return;

    setIsProcessing(true);

    // Giả lập xử lý thanh toán
    setTimeout(() => {
      // Chuyển hướng đến VNPay (giả lập)
      alert("Đang chuyển hướng đến VNPay...");
      setIsProcessing(false);
    }, 2000);
  };

  interface ProductData {
    id: string;
    title: string;
    imgA: string;
    priceProduct?: string;
    discountProduct?: string;
    price?: number;
    originalPrice?: number;
  }
  const location = useLocation();
  const [productData, setProductData] = useState<ProductData | null>(null);
  const [vat, setVat] = useState<number>(120);

  // GetData
  useEffect(() => {
    console.log(location.state.productData);
    setProductData(location.state.productData);
  }, [location.state]);

  const priceOrder = () => {
    const priceProduct =
      Number(
        productData?.priceProduct
          ?.slice(0, productData?.priceProduct?.length - 1)
          .replaceAll(",", "")
      ) - vat;

    return priceProduct.toLocaleString("vi-VN");
  };
  return (
    <>
      <Container>
        <div className="py-3">
          <h1>Trang chủ / Thanh toán đơn hàng</h1>
        </div>
        <div className="min-h-screen from-blue-50 to-indigo-100 py-8 px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="flex items-center mb-8">
              <button className="flex items-center text-gray-600 hover:text-gray-800 transition-colors cursor-pointer">
                <FaArrowLeftLong className="mr-2" />
                Quay lại
              </button>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Order Summary */}
              <div className="bg-white rounded-2xl shadow-xl p-6 h-fit">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Tóm tắt đơn hàng
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-16 h-16  rounded-lg flex items-center justify-center">
                      <img src={productData?.imgA} alt={productData?.title} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800">
                        {productData?.title}
                      </h3>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gray-800">
                        {productData?.priceProduct}
                      </p>
                      <p className="text-sm text-gray-500">x1</p>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between text-gray-600">
                    <span>Tạm tính</span>
                    <span>{productData?.priceProduct}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Phí vận chuyển</span>
                    <span>Miễn phí</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>VAT (10%)</span>
                    <span>{vat}</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between text-xl font-bold text-gray-800">
                    <span>Tổng cộng</span>
                    <span>{priceOrder()}</span>
                  </div>
                </div>

                {/* Promo Code */}
                <div className="mt-6">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      placeholder="Mã giảm giá"
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors">
                      Áp dụng
                    </button>
                  </div>
                </div>
              </div>

              {/* Payment Form */}
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Thông tin thanh toán
                </h2>

                {/* VNPay Payment Method */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-700 mb-4">
                    Phương thức thanh toán
                  </h3>
                  <div className="p-4 border-2 border-blue-500 bg-blue-50 rounded-lg">
                    <div className="flex items-center justify-center">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-lg">VN</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">VNPay</h4>
                        <p className="text-sm text-gray-600">
                          Thanh toán qua VNPay
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Customer Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-700">
                    Thông tin khách hàng
                  </h3>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Họ và tên *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Nhập họ và tên"
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.fullName ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="example@email.com"
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Số điện thoại *
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="0123456789"
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.phone ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* VNPay Info */}
                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white text-xs">ℹ</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-800 mb-1">
                        Thanh toán qua VNPay
                      </h4>
                      <p className="text-sm text-blue-700">
                        Bạn sẽ được chuyển hướng đến trang VNPay để hoàn tất
                        thanh toán một cách an toàn.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Continue Payment Button */}
                <button
                  onClick={handlePayment}
                  disabled={isProcessing}
                  className={`w-full mt-6 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg ${
                    isProcessing
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700 transform hover:scale-105"
                  } text-white`}
                >
                  {isProcessing ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Đang xử lý...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      Tiếp tục thanh toán 1.320.000₫
                    </div>
                  )}
                </button>

                {/* Security Notice */}
                <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center justify-center">
                    <span className="text-sm text-green-800">
                      🔒 Thanh toán được bảo mật bởi VNPay
                    </span>
                  </div>
                </div>

                {/* Note */}
                <div className="mt-4 text-center">
                  <p className="text-xs text-gray-500">
                    Bằng cách tiếp tục, bạn đồng ý với điều khoản sử dụng của
                    chúng tôi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
