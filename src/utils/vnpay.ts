import type { VNPayPaymentRequest, VNPayConfig } from '../types/vnpay';

// VNPay configuration - Thay đổi thông tin này với thông tin thật từ VNPay
export const VNPAY_CONFIG: VNPayConfig = {
    vnp_TmnCode: import.meta.env.VITE_VNPAY_TMN_CODE || 'YOUR_TMN_CODE', // Mã website tại VNPay
    vnp_HashSecret: import.meta.env.VITE_VNPAY_HASH_SECRET || 'YOUR_HASH_SECRET', // Chuỗi bí mật
    vnp_Url: 'https://sandbox.vnpayment.vn/paymentv2/vpcpay.html', // URL sandbox, production: https://vnpayment.vn/paymentv2/vpcpay.html
    vnp_ReturnUrl: import.meta.env.VITE_VNPAY_RETURN_URL || 'http://localhost:5173/payment/return', // URL return
};

// Browser-compatible HMAC SHA512 implementation
const hmacSha512 = async (key: string, message: string): Promise<string> => {
    const encoder = new TextEncoder();
    const keyData = encoder.encode(key);
    const messageData = encoder.encode(message);

    const cryptoKey = await crypto.subtle.importKey(
        'raw',
        keyData,
        { name: 'HMAC', hash: 'SHA-512' },
        false,
        ['sign']
    );

    const signature = await crypto.subtle.sign('HMAC', cryptoKey, messageData);
    const hashArray = Array.from(new Uint8Array(signature));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
};

// Tạo secure hash cho VNPay
export const createSecureHash = async (params: Record<string, string | number>, secretKey: string): Promise<string> => {
    // Sắp xếp các tham số theo thứ tự alphabet
    const sortedParams = Object.keys(params)
        .filter(key => params[key] !== '' && params[key] !== undefined && params[key] !== null)
        .sort()
        .reduce((result: Record<string, string | number>, key: string) => {
            result[key] = params[key];
            return result;
        }, {});

    // Tạo query string
    const queryString = Object.keys(sortedParams)
        .map(key => `${key}=${encodeURIComponent(sortedParams[key])}`)
        .join('&');

    // Tạo HMAC SHA512
    return await hmacSha512(secretKey, queryString);
};

// Verify secure hash từ VNPay response
export const verifySecureHash = async (params: Record<string, string>, secretKey: string): Promise<boolean> => {
    const secureHash = params.vnp_SecureHash;
    delete params.vnp_SecureHash;
    delete params.vnp_SecureHashType;

    const calculatedHash = await createSecureHash(params, secretKey);
    return secureHash === calculatedHash;
};

// Tạo URL thanh toán VNPay
export const createPaymentUrl = async (paymentData: VNPayPaymentRequest): Promise<string> => {
    // Loại bỏ vnp_SecureHash khỏi data để tính hash
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { vnp_SecureHash, ...dataWithoutHash } = paymentData;

    // Tạo secure hash
    const secureHash = await createSecureHash(dataWithoutHash, VNPAY_CONFIG.vnp_HashSecret);

    // Thêm secure hash vào data
    const finalData = {
        ...dataWithoutHash,
        vnp_SecureHash: secureHash
    };

    // Tạo query string
    const queryString = Object.keys(finalData)
        .map(key => `${key}=${encodeURIComponent(finalData[key as keyof typeof finalData])}`)
        .join('&');

    return `${VNPAY_CONFIG.vnp_Url}?${queryString}`;
};

// Tạo mã đơn hàng unique
export const generateOrderId = (): string => {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000);
    return `ORDER_${timestamp}_${random}`;
};

// Format ngày giờ cho VNPay (yyyyMMddHHmmss)
export const formatDateTime = (date: Date = new Date()): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${year}${month}${day}${hours}${minutes}${seconds}`;
};

// Lấy IP address của client (trong môi trường thật cần implement server-side)
export const getClientIpAddress = (): string => {
    // Trong môi trường development, return IP mặc định
    // Trong production, cần lấy IP thật từ server
    return '127.0.0.1';
};

// Mã hóa thông tin đơn hàng
export const encodeOrderInfo = (orderInfo: string): string => {
    return encodeURIComponent(orderInfo);
};

// Response codes của VNPay
export const VNPAY_RESPONSE_CODES: Record<string, string> = {
    '00': 'Giao dịch thành công',
    '07': 'Trừ tiền thành công. Giao dịch bị nghi ngờ (liên quan tới lừa đảo, giao dịch bất thường).',
    '09': 'Giao dịch không thành công do: Thẻ/Tài khoản của khách hàng chưa đăng ký dịch vụ InternetBanking tại ngân hàng.',
    '10': 'Giao dịch không thành công do: Khách hàng xác thực thông tin thẻ/tài khoản không đúng quá 3 lần',
    '11': 'Giao dịch không thành công do: Đã hết hạn chờ thanh toán. Xin quý khách vui lòng thực hiện lại giao dịch.',
    '12': 'Giao dịch không thành công do: Thẻ/Tài khoản của khách hàng bị khóa.',
    '13': 'Giao dịch không thành công do Quý khách nhập sai mật khẩu xác thực giao dịch (OTP).',
    '24': 'Giao dịch không thành công do: Khách hàng hủy giao dịch',
    '51': 'Giao dịch không thành công do: Tài khoản của quý khách không đủ số dư để thực hiện giao dịch.',
    '65': 'Giao dịch không thành công do: Tài khoản của Quý khách đã vượt quá hạn mức giao dịch trong ngày.',
    '75': 'Ngân hàng thanh toán đang bảo trì.',
    '79': 'Giao dịch không thành công do: KH nhập sai mật khẩu thanh toán quá số lần quy định.',
    '99': 'Các lỗi khác (lỗi còn lại, không có trong danh sách mã lỗi đã liệt kê)'
};

// Lấy thông báo lỗi từ response code
export const getResponseMessage = (responseCode: string): string => {
    return VNPAY_RESPONSE_CODES[responseCode] || 'Lỗi không xác định';
};