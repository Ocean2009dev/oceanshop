import { FaArrowLeftLong } from "react-icons/fa6";
import Container from "../components/Layout/Container";

import React, { useState, type ReactEventHandler } from "react";

export const Payment = () => {
  const [selectedPayment, setSelectedPayment] = useState("card");
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: "",
    email: "",
    billingAddress: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">SP</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800">
                        Sản phẩm Premium
                      </h3>
                      <p className="text-gray-600 text-sm">Gói 1 năm</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gray-800">1.200.000₫</p>
                      <p className="text-sm text-gray-500">x1</p>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between text-gray-600">
                    <span>Tạm tính</span>
                    <span>1.200.000₫</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Phí vận chuyển</span>
                    <span>Miễn phí</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>VAT (10%)</span>
                    <span>120.000₫</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between text-xl font-bold text-gray-800">
                    <span>Tổng cộng</span>
                    <span>1.320.000₫</span>
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

                {/* Payment Methods */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-700 mb-4">
                    Phương thức thanh toán
                  </h3>
                  <div className="grid grid-cols-3 gap-3">
                    <button
                      onClick={() => setSelectedPayment("card")}
                      className={`p-4 border-2 rounded-lg transition-all ${
                        selectedPayment === "card"
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <span className="text-sm font-medium">Thẻ</span>
                    </button>

                    <button
                      onClick={() => setSelectedPayment("momo")}
                      className={`p-4 border-2 rounded-lg transition-all ${
                        selectedPayment === "momo"
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="w-6 h-6 mx-auto mb-2 bg-pink-500 rounded text-white text-xs flex items-center justify-center font-bold">
                        M
                      </div>
                      <span className="text-sm font-medium">MoMo</span>
                    </button>

                    <button
                      onClick={() => setSelectedPayment("banking")}
                      className={`p-4 border-2 rounded-lg transition-all ${
                        selectedPayment === "banking"
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="w-6 h-6 mx-auto mb-2 bg-green-500 rounded text-white text-xs flex items-center justify-center font-bold">
                        ₫
                      </div>
                      <span className="text-sm font-medium">Banking</span>
                    </button>
                  </div>
                </div>

                {/* Card Form */}
                {selectedPayment === "card" && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Số thẻ
                      </label>
                      <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        placeholder="1234 5678 9012 3456"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Ngày hết hạn
                        </label>
                        <input
                          type="text"
                          name="expiryDate"
                          value={formData.expiryDate}
                          onChange={handleInputChange}
                          placeholder="MM/YY"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          CVV
                        </label>
                        <input
                          type="text"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleInputChange}
                          placeholder="123"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Tên chủ thẻ
                      </label>
                      <input
                        type="text"
                        name="cardName"
                        value={formData.cardName}
                        onChange={handleInputChange}
                        placeholder="NGUYEN VAN A"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                )}

                {/* Billing Information */}
                <div className="mt-6 space-y-4">
                  <h3 className="text-lg font-semibold text-gray-700">
                    Thông tin hóa đơn
                  </h3>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="example@email.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Địa chỉ
                    </label>
                    <textarea
                      name="billingAddress"
                      value={formData.billingAddress}
                      onChange={handleInputChange}
                      placeholder="Nhập địa chỉ của bạn"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Security Notice */}
                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center">
                    <span className="text-sm text-green-800">
                      Thông tin của bạn được bảo mật với mã hóa SSL 256-bit
                    </span>
                  </div>
                </div>

                {/* Payment Button */}
                <button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg">
                  <div className="flex items-center justify-center">
                    Thanh toán 1.320.000₫
                  </div>
                </button>

                {/* Trust Badges */}
                <div className="mt-4 flex items-center justify-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center">Bảo mật</div>
                  <div className="flex items-center">Nhanh chóng</div>
                  <div className="flex items-center">Đáng tin cậy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
