import type {
    VNPayPaymentRequest,
    OrderInfo,
    PaymentResult
} from '../types/vnpay';
import {
    VNPAY_CONFIG,
    createPaymentUrl,
    generateOrderId,
    formatDateTime,
    getClientIpAddress,
    encodeOrderInfo,
    verifySecureHash,
    getResponseMessage
} from '../utils/vnpay';

class VNPayService {
    // Tạo URL thanh toán
    async createPayment(orderInfo: OrderInfo): Promise<PaymentResult> {
        try {
            const orderId = generateOrderId();
            const createDate = formatDateTime();
            const ipAddr = getClientIpAddress();

            // Tạo thông tin thanh toán VNPay
            const vnpayData: VNPayPaymentRequest = {
                vnp_Version: '2.1.0',
                vnp_Command: 'pay',
                vnp_TmnCode: VNPAY_CONFIG.vnp_TmnCode,
                vnp_Amount: orderInfo.amount * 100, // VNPay yêu cầu amount * 100
                vnp_CurrCode: 'VND',
                vnp_TxnRef: orderId,
                vnp_OrderInfo: encodeOrderInfo(orderInfo.orderInfo),
                vnp_OrderType: 'other',
                vnp_Locale: 'vn',
                vnp_ReturnUrl: VNPAY_CONFIG.vnp_ReturnUrl,
                vnp_IpAddr: ipAddr,
                vnp_CreateDate: createDate
            };

            // Tạo URL thanh toán
            const paymentUrl = await createPaymentUrl(vnpayData);

            // Lưu thông tin đơn hàng vào localStorage để xử lý sau khi thanh toán
            const orderData = {
                orderId,
                orderInfo: orderInfo.orderInfo,
                amount: orderInfo.amount,
                customerInfo: orderInfo.customerInfo,
                items: orderInfo.items,
                createDate,
                status: 'pending'
            };

            localStorage.setItem(`order_${orderId}`, JSON.stringify(orderData));

            return {
                success: true,
                message: 'Tạo URL thanh toán thành công',
                paymentUrl,
                data: { orderId, amount: orderInfo.amount }
            };

        } catch (error) {
            console.error('Lỗi tạo thanh toán VNPay:', error);
            return {
                success: false,
                message: 'Có lỗi xảy ra khi tạo thanh toán'
            };
        }
    }

    // Xử lý kết quả thanh toán từ VNPay
    async handlePaymentReturn(queryParams: URLSearchParams): Promise<PaymentResult> {
        try {
            // Chuyển URLSearchParams thành object
            const params: Record<string, string> = {};
            queryParams.forEach((value, key) => {
                params[key] = value;
            });

            // Verify secure hash
            const isValidHash = await verifySecureHash(params, VNPAY_CONFIG.vnp_HashSecret);

            if (!isValidHash) {
                return {
                    success: false,
                    message: 'Chữ ký không hợp lệ'
                };
            }

            const responseCode = params.vnp_ResponseCode;
            const orderId = params.vnp_TxnRef;
            const amount = parseInt(params.vnp_Amount) / 100; // Chia 100 để về số tiền gốc
            const transactionNo = params.vnp_TransactionNo;
            const bankCode = params.vnp_BankCode;
            const payDate = params.vnp_PayDate;

            // Lấy thông tin đơn hàng từ localStorage
            const orderData = localStorage.getItem(`order_${orderId}`);
            let order = null;
            if (orderData) {
                order = JSON.parse(orderData);
            }

            if (responseCode === '00') {
                // Thanh toán thành công
                if (order) {
                    order.status = 'completed';
                    order.transactionNo = transactionNo;
                    order.bankCode = bankCode;
                    order.payDate = payDate;
                    localStorage.setItem(`order_${orderId}`, JSON.stringify(order));
                }

                return {
                    success: true,
                    message: 'Thanh toán thành công',
                    data: {
                        orderId,
                        amount,
                        transactionNo,
                        bankCode,
                        payDate,
                        order
                    }
                };
            } else {
                // Thanh toán thất bại
                if (order) {
                    order.status = 'failed';
                    order.errorCode = responseCode;
                    localStorage.setItem(`order_${orderId}`, JSON.stringify(order));
                }

                return {
                    success: false,
                    message: getResponseMessage(responseCode),
                    data: {
                        orderId,
                        errorCode: responseCode,
                        order
                    }
                };
            }

        } catch (error) {
            console.error('Lỗi xử lý kết quả thanh toán:', error);
            return {
                success: false,
                message: 'Có lỗi xảy ra khi xử lý kết quả thanh toán'
            };
        }
    }

    // Lấy thông tin đơn hàng
    getOrderInfo(orderId: string) {
        const orderData = localStorage.getItem(`order_${orderId}`);
        return orderData ? JSON.parse(orderData) : null;
    }

    // Xóa thông tin đơn hàng
    clearOrderInfo(orderId: string) {
        localStorage.removeItem(`order_${orderId}`);
    }

    // Lấy danh sách đơn hàng
    getAllOrders() {
        const orders = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && key.startsWith('order_')) {
                const orderData = localStorage.getItem(key);
                if (orderData) {
                    orders.push(JSON.parse(orderData));
                }
            }
        }
        return orders.sort((a, b) => new Date(b.createDate).getTime() - new Date(a.createDate).getTime());
    }
}

export const vnpayService = new VNPayService();