import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { vnpayService } from "../services/vnpayService";
import type { PaymentResult } from "../types/vnpay";
import Container from "../components/Layout/Container";
import { FaCheckCircle, FaTimesCircle, FaSpinner } from "react-icons/fa";

export const PaymentReturn = () => {
  const [result, setResult] = useState<PaymentResult | null>(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handlePaymentReturn = async () => {
      try {
        // Kiểm tra xem có query params không
        if (!location.search) {
          setResult({
            success: false,
            message: "Không tìm thấy thông tin thanh toán",
          });
          setLoading(false);
          return;
        }

        const queryParams = new URLSearchParams(location.search);
        const paymentResult = await vnpayService.handlePaymentReturn(
          queryParams
        );
        setResult(paymentResult);
      } catch (error) {
        console.error("Lỗi xử lý kết quả thanh toán:", error);
        setResult({
          success: false,
          message: "Có lỗi xảy ra khi xử lý kết quả thanh toán",
        });
      } finally {
        setLoading(false);
      }
    };

    handlePaymentReturn();
  }, [location.search]);

  const handleContinueShopping = () => {
    navigate("/");
  };

  const handleViewOrders = () => {
    navigate("/orders");
  };

  if (loading) {
    return (
      <Container>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <FaSpinner className="animate-spin text-4xl text-blue-600 mx-auto mb-4" />
            <p className="text-lg text-gray-600">
              Đang xử lý kết quả thanh toán...
            </p>
          </div>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="py-3">
        <h1>Trang chủ / Kết quả thanh toán</h1>
      </div>
      <div className="min-h-screen py-8 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            {result?.success ? (
              <>
                {/* Success Icon */}
                <div className="mb-6">
                  <FaCheckCircle className="text-6xl text-green-500 mx-auto mb-4" />
                  <h1 className="text-3xl font-bold text-gray-800 mb-2">
                    Thanh toán thành công!
                  </h1>
                  <p className="text-gray-600">
                    Cảm ơn bạn đã mua hàng. Đơn hàng của bạn đã được xử lý thành
                    công.
                  </p>
                </div>

                {/* Order Details */}
                {result.data && (
                  <div className="bg-gray-50 rounded-lg p-6 mb-6 text-left">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                      Thông tin giao dịch
                    </h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Mã đơn hàng:</span>
                        <span className="font-medium">
                          {result.data.orderId || "N/A"}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Số tiền:</span>
                        <span className="font-medium text-green-600">
                          {result.data.amount?.toLocaleString("vi-VN") || "0"}₫
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Mã giao dịch:</span>
                        <span className="font-medium">
                          {result.data.transactionNo || "N/A"}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Ngân hàng:</span>
                        <span className="font-medium">
                          {result.data.bankCode || "N/A"}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Thời gian:</span>
                        <span className="font-medium">
                          {result.data.payDate &&
                          result.data.payDate.length === 14
                            ? new Date(
                                result.data.payDate.substring(0, 4) +
                                  "-" +
                                  result.data.payDate.substring(4, 6) +
                                  "-" +
                                  result.data.payDate.substring(6, 8) +
                                  " " +
                                  result.data.payDate.substring(8, 10) +
                                  ":" +
                                  result.data.payDate.substring(10, 12) +
                                  ":" +
                                  result.data.payDate.substring(12, 14)
                              ).toLocaleString("vi-VN")
                            : "N/A"}
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={handleViewOrders}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    Xem đơn hàng
                  </button>
                  <button
                    onClick={handleContinueShopping}
                    className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
                  >
                    Tiếp tục mua sắm
                  </button>
                </div>
              </>
            ) : (
              <>
                {/* Error Icon */}
                <div className="mb-6">
                  <FaTimesCircle className="text-6xl text-red-500 mx-auto mb-4" />
                  <h1 className="text-3xl font-bold text-gray-800 mb-2">
                    Thanh toán thất bại!
                  </h1>
                  <p className="text-gray-600 mb-4">
                    {result?.message ||
                      "Có lỗi xảy ra trong quá trình thanh toán."}
                  </p>
                </div>

                {/* Error Details */}
                {result?.data && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6 text-left">
                    <h3 className="text-lg font-semibold text-red-800 mb-4">
                      Chi tiết lỗi
                    </h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-red-600">Mã đơn hàng:</span>
                        <span className="font-medium">
                          {result.data.orderId || "N/A"}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-red-600">Mã lỗi:</span>
                        <span className="font-medium">
                          {result.data.errorCode || "N/A"}
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => navigate("/payment")}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    Thử lại thanh toán
                  </button>
                  <button
                    onClick={handleContinueShopping}
                    className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
                  >
                    Quay về trang chủ
                  </button>
                </div>
              </>
            )}

            {/* Support Info */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Nếu bạn cần hỗ trợ, vui lòng liên hệ với chúng tôi qua email:
                <a
                  href="mailto:support@oceanshop.com"
                  className="text-blue-600 hover:underline ml-1"
                >
                  support@oceanshop.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
