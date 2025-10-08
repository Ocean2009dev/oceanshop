import { useEffect, useState } from "react";
import { vnpayService } from "../services/vnpayService";
import Container from "../components/Layout/Container";
import { FaArrowLeftLong, FaClock } from "react-icons/fa6";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface Order {
  orderId: string;
  orderInfo: string;
  amount: number;
  customerInfo: {
    fullName: string;
    email: string;
    phone: string;
  };
  items: ProductItem[];
  createDate: string;
  status: "pending" | "completed" | "failed";
  transactionNo?: string;
  bankCode?: string;
  payDate?: string;
  errorCode?: string;
}

export const Orders = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadOrders = () => {
      try {
        const orderList = vnpayService.getAllOrders();
        setOrders(orderList);
      } catch (error) {
        console.error("Lỗi tải danh sách đơn hàng:", error);
      } finally {
        setLoading(false);
      }
    };

    loadOrders();
  }, []);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <FaCheckCircle className="text-green-500" />;
      case "failed":
        return <FaTimesCircle className="text-red-500" />;
      case "pending":
        return <FaClock className="text-yellow-500" />;
      default:
        return <FaClock className="text-gray-500" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "Thành công";
      case "failed":
        return "Thất bại";
      case "pending":
        return "Đang xử lý";
      default:
        return "Không xác định";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-green-600 bg-green-50";
      case "failed":
        return "text-red-600 bg-red-50";
      case "pending":
        return "text-yellow-600 bg-yellow-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleString("vi-VN");
    } catch {
      return dateString;
    }
  };

  const formatVNPayDate = (vnpayDate: string) => {
    if (!vnpayDate || vnpayDate.length !== 14) return "N/A";

    try {
      const year = vnpayDate.substring(0, 4);
      const month = vnpayDate.substring(4, 6);
      const day = vnpayDate.substring(6, 8);
      const hour = vnpayDate.substring(8, 10);
      const minute = vnpayDate.substring(10, 12);
      const second = vnpayDate.substring(12, 14);

      const date = new Date(
        `${year}-${month}-${day} ${hour}:${minute}:${second}`
      );
      return date.toLocaleString("vi-VN");
    } catch {
      return vnpayDate;
    }
  };

  if (loading) {
    return (
      <Container>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600">
              Đang tải danh sách đơn hàng...
            </p>
          </div>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="py-3">
        <h1>Trang chủ / Đơn hàng của tôi</h1>
      </div>

      <div className="min-h-screen py-8 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center mb-8">
            <button
              className="flex items-center text-gray-600 hover:text-gray-800 transition-colors cursor-pointer"
              onClick={() => navigate(-1)}
            >
              <FaArrowLeftLong className="mr-2" />
              Quay lại
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Đơn hàng của tôi ({orders.length})
            </h2>

            {orders.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-400 text-6xl mb-4">📦</div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  Chưa có đơn hàng nào
                </h3>
                <p className="text-gray-500 mb-6">
                  Bạn chưa có đơn hàng nào. Hãy bắt đầu mua sắm ngay!
                </p>
                <button
                  onClick={() => navigate("/")}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Bắt đầu mua sắm
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {orders.map((order) => (
                  <div
                    key={order.orderId}
                    className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                  >
                    {/* Order Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">
                          Đơn hàng #{order.orderId}
                        </h3>
                        <p className="text-sm text-gray-600">
                          Đặt hàng: {formatDate(order.createDate)}
                        </p>
                      </div>
                      <div className="flex items-center mt-2 sm:mt-0">
                        {getStatusIcon(order.status)}
                        <span
                          className={`ml-2 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                            order.status
                          )}`}
                        >
                          {getStatusText(order.status)}
                        </span>
                      </div>
                    </div>

                    {/* Customer Info */}
                    <div className="grid md:grid-cols-2 gap-6 mb-4">
                      <div>
                        <h4 className="font-medium text-gray-700 mb-2">
                          Thông tin khách hàng
                        </h4>
                        <div className="text-sm text-gray-600 space-y-1">
                          <p>
                            <strong>Họ tên:</strong>{" "}
                            {order.customerInfo.fullName}
                          </p>
                          <p>
                            <strong>Email:</strong> {order.customerInfo.email}
                          </p>
                          <p>
                            <strong>Điện thoại:</strong>{" "}
                            {order.customerInfo.phone}
                          </p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-gray-700 mb-2">
                          Thông tin thanh toán
                        </h4>
                        <div className="text-sm text-gray-600 space-y-1">
                          <p>
                            <strong>Tổng tiền:</strong>
                            <span className="text-lg font-semibold text-green-600 ml-1">
                              {order.amount.toLocaleString("vi-VN")}₫
                            </span>
                          </p>
                          {order.transactionNo && (
                            <p>
                              <strong>Mã giao dịch:</strong>{" "}
                              {order.transactionNo}
                            </p>
                          )}
                          {order.bankCode && (
                            <p>
                              <strong>Ngân hàng:</strong> {order.bankCode}
                            </p>
                          )}
                          {order.payDate && (
                            <p>
                              <strong>Thời gian thanh toán:</strong>{" "}
                              {formatVNPayDate(order.payDate)}
                            </p>
                          )}
                          {order.errorCode && (
                            <p>
                              <strong>Mã lỗi:</strong>
                              <span className="text-red-600 ml-1">
                                {order.errorCode}
                              </span>
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Order Items */}
                    {order.items && order.items.length > 0 && (
                      <div>
                        <h4 className="font-medium text-gray-700 mb-3">
                          Sản phẩm ({order.items.length})
                        </h4>
                        <div className="space-y-3">
                          {order.items.map((item, index) => (
                            <div
                              key={index}
                              className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg"
                            >
                              <div className="w-12 h-12 rounded-lg overflow-hidden">
                                <img
                                  src={item.imgA}
                                  alt={item.title}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="flex-1">
                                <h5 className="font-medium text-gray-800">
                                  {item.title}
                                </h5>
                                <p className="text-sm text-gray-600">
                                  {item.priceProduct} x {item.quantity || 1}
                                </p>
                              </div>
                              <div className="text-right">
                                <p className="font-semibold text-gray-800">
                                  {(
                                    (Number(
                                      item.priceProduct
                                        ?.replace("₫", "")
                                        .replace(/,/g, "")
                                    ) || 0) * (item.quantity || 1)
                                  ).toLocaleString("vi-VN")}
                                  ₫
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Order Actions */}
                    <div className="flex justify-end mt-4 pt-4 border-t border-gray-200">
                      {order.status === "failed" && (
                        <button
                          onClick={() => navigate("/payment")}
                          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                        >
                          Thanh toán lại
                        </button>
                      )}
                      {order.status === "completed" && (
                        <button
                          onClick={() => navigate("/")}
                          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                        >
                          Mua lại
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};
interface ProductItem {
  id: string;
  title: string;
  imgA: string;
  priceProduct?: string;
  quantity?: number;
}
