// VNPay Types
export interface VNPayConfig {
    vnp_TmnCode: string;
    vnp_HashSecret: string;
    vnp_Url: string;
    vnp_ReturnUrl: string;
}

export interface VNPayPaymentRequest {
    vnp_Amount: number;
    vnp_Command: string;
    vnp_CreateDate: string;
    vnp_CurrCode: string;
    vnp_IpAddr: string;
    vnp_Locale: string;
    vnp_OrderInfo: string;
    vnp_OrderType: string;
    vnp_ReturnUrl: string;
    vnp_TmnCode: string;
    vnp_TxnRef: string;
    vnp_Version: string;
    vnp_SecureHash?: string;
}

export interface VNPayPaymentResponse {
    vnp_Amount: string;
    vnp_BankCode: string;
    vnp_BankTranNo: string;
    vnp_CardType: string;
    vnp_OrderInfo: string;
    vnp_PayDate: string;
    vnp_ResponseCode: string;
    vnp_TmnCode: string;
    vnp_TransactionNo: string;
    vnp_TransactionStatus: string;
    vnp_TxnRef: string;
    vnp_SecureHash: string;
}

export interface OrderInfo {
    orderId: string;
    amount: number;
    orderInfo: string;
    customerInfo: {
        fullName: string;
        email: string;
        phone: string;
    };
    items: unknown[];
}

export interface PaymentResultData {
    orderId: string;
    amount?: number;
    transactionNo?: string;
    bankCode?: string;
    payDate?: string;
    errorCode?: string;
    order?: unknown;
}

export interface PaymentResult {
    success: boolean;
    message: string;
    data?: PaymentResultData;
    paymentUrl?: string;
}