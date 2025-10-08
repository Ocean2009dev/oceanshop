# Hướng dẫn tích hợp VNPay

## 1. Đăng ký tài khoản VNPay

1. Truy cập [VNPay Merchant Portal](https://merchant.vnpay.vn/)
2. Đăng ký tài khoản doanh nghiệp
3. Hoàn tất thủ tục xác minh
4. Lấy thông tin cấu hình từ VNPay

## 2. Cấu hình môi trường

### 2.1. Tạo file .env

Sao chép file `.env.example` thành `.env` và cập nhật thông tin VNPay:

```bash
cp .env.example .env
```

### 2.2. Cập nhật thông tin VNPay trong .env

```env
# VNPay Configuration
VITE_VNPAY_TMN_CODE=your_actual_tmn_code
VITE_VNPAY_HASH_SECRET=your_actual_hash_secret
VITE_VNPAY_RETURN_URL=http://localhost:5173/payment/return
```

**Lưu ý quan trọng:**

- `VITE_VNPAY_TMN_CODE`: Mã website được VNPay cấp
- `VITE_VNPAY_HASH_SECRET`: Chuỗi bí mật để tạo chữ ký
- `VITE_VNPAY_RETURN_URL`: URL mà VNPay sẽ redirect sau khi thanh toán

## 3. Cấu hình URL Return trên VNPay Portal

1. Đăng nhập vào VNPay Merchant Portal
2. Vào mục "Cấu hình API"
3. Thêm URL return: `http://localhost:5173/payment/return` (development)
4. Cho production: `https://yourdomain.com/payment/return`

## 4. Môi trường Sandbox vs Production

### Sandbox (Test)

- URL: `https://sandbox.vnpayment.vn/paymentv2/vpcpay.html`
- Sử dụng thông tin test từ VNPay
- Không có giao dịch thật

### Production

- URL: `https://vnpayment.vn/paymentv2/vpcpay.html`
- Cần thông tin thật từ VNPay
- Giao dịch thật với tiền thật

## 5. Cách sử dụng

### 5.1. Thanh toán

1. Khách hàng thêm sản phẩm vào giỏ hàng
2. Vào trang `/payment`
3. Điền thông tin khách hàng
4. Nhấn "Tiếp tục thanh toán"
5. Hệ thống chuyển hướng đến VNPay
6. Khách hàng thanh toán trên VNPay
7. VNPay redirect về `/payment/return`

### 5.2. Xem đơn hàng

- Truy cập `/orders` để xem danh sách đơn hàng
- Thông tin được lưu trong localStorage

## 6. Bảo mật

### 6.1. Hash Secret

- **KHÔNG BAO GIỜ** để lộ `VITE_VNPAY_HASH_SECRET`
- Chỉ sử dụng trong môi trường an toàn
- Thay đổi định kỳ nếu cần

### 6.2. Validation

- Luôn verify chữ ký từ VNPay
- Kiểm tra amount và order info
- Log tất cả giao dịch để audit

## 7. Testing

### 7.1. Thông tin test VNPay Sandbox

**Thẻ ATM nội địa:**

- Số thẻ: `9704198526191432198`
- Tên chủ thẻ: `NGUYEN VAN A`
- Ngày hết hạn: `07/15`
- Mật khẩu OTP: `123456`

**Thẻ Visa/Master:**

- Số thẻ: `4000000000000002`
- Tên chủ thẻ: `NGUYEN VAN A`
- Ngày hết hạn: `07/15`
- CVV: `123`

### 7.2. Test Cases

1. **Thanh toán thành công**: Sử dụng thông tin test hợp lệ
2. **Thanh toán thất bại**: Nhập sai OTP hoặc hủy giao dịch
3. **Timeout**: Để quá thời gian thanh toán
4. **Invalid hash**: Test với hash sai (không nên xảy ra trong production)

## 8. Troubleshooting

### 8.1. Lỗi thường gặp

**"Chữ ký không hợp lệ"**

- Kiểm tra `VITE_VNPAY_HASH_SECRET`
- Đảm bảo tham số được sắp xếp đúng thứ tự
- Kiểm tra encoding UTF-8

**"Mã merchant không hợp lệ"**

- Kiểm tra `VITE_VNPAY_TMN_CODE`
- Đảm bảo tài khoản VNPay đã được kích hoạt

**"URL return không hợp lệ"**

- Kiểm tra URL return đã được cấu hình trên VNPay Portal
- Đảm bảo URL accessible từ internet (cho production)

### 8.2. Debug

1. Kiểm tra Network tab trong DevTools
2. Xem Console log để debug
3. Kiểm tra localStorage cho thông tin đơn hàng
4. Verify hash manually nếu cần

## 9. Production Deployment

### 9.1. Checklist

- [ ] Cập nhật URL VNPay từ sandbox sang production
- [ ] Cập nhật thông tin merchant thật
- [ ] Cấu hình URL return production trên VNPay Portal
- [ ] Test thanh toán với số tiền nhỏ
- [ ] Setup monitoring và logging
- [ ] Backup dữ liệu đơn hàng

### 9.2. Monitoring

- Log tất cả giao dịch VNPay
- Monitor response time
- Alert khi có lỗi thanh toán
- Track conversion rate

## 10. Liên hệ hỗ trợ

- **VNPay Hotline**: 1900 55 55 77
- **Email**: support@vnpay.vn
- **Documentation**: https://sandbox.vnpayment.vn/apis/
