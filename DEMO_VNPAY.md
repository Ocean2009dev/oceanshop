# Demo VNPay Integration

## Hướng dẫn test VNPay

### 1. Chuẩn bị

1. Đảm bảo đã cấu hình `.env` với thông tin VNPay sandbox
2. Chạy ứng dụng: `npm run dev`
3. Truy cập: `http://localhost:5173`

### 2. Test flow thanh toán

#### Bước 1: Thêm sản phẩm vào giỏ hàng

- Vào trang chủ
- Chọn sản phẩm và thêm vào giỏ hàng
- Kiểm tra giỏ hàng có sản phẩm

#### Bước 2: Thanh toán

- Vào trang `/payment`
- Điền thông tin khách hàng:
  - Họ tên: Nguyễn Văn A
  - Email: test@example.com
  - Số điện thoại: 0123456789
- Nhấn "Tiếp tục thanh toán"

#### Bước 3: VNPay Sandbox

- Hệ thống sẽ chuyển hướng đến VNPay sandbox
- Chọn phương thức thanh toán (ATM nội địa)
- Nhập thông tin thẻ test:
  - Số thẻ: `9704198526191432198`
  - Tên chủ thẻ: `NGUYEN VAN A`
  - Ngày hết hạn: `07/15`
  - Mật khẩu OTP: `123456`

#### Bước 4: Kết quả

- VNPay sẽ redirect về `/payment/return`
- Xem kết quả thanh toán (thành công/thất bại)
- Kiểm tra thông tin giao dịch

#### Bước 5: Xem đơn hàng

- Vào `/orders` để xem danh sách đơn hàng
- Kiểm tra thông tin chi tiết đơn hàng

### 3. Test cases

#### Test Case 1: Thanh toán thành công

- Sử dụng thông tin thẻ test hợp lệ
- Nhập đúng OTP: `123456`
- Kết quả: Thanh toán thành công

#### Test Case 2: Thanh toán thất bại - Sai OTP

- Sử dụng thông tin thẻ test hợp lệ
- Nhập sai OTP: `000000`
- Kết quả: Thanh toán thất bại

#### Test Case 3: Hủy thanh toán

- Vào VNPay và nhấn "Hủy giao dịch"
- Kết quả: Thanh toán bị hủy

#### Test Case 4: Timeout

- Vào VNPay và để quá 15 phút không thanh toán
- Kết quả: Hết thời gian thanh toán

### 4. Kiểm tra dữ liệu

#### LocalStorage

- Mở DevTools > Application > Local Storage
- Kiểm tra các key bắt đầu với `order_`
- Xem thông tin đơn hàng được lưu

#### Console Logs

- Mở DevTools > Console
- Xem logs của quá trình thanh toán
- Kiểm tra lỗi nếu có

### 5. URLs quan trọng

- Trang chủ: `http://localhost:5173/`
- Thanh toán: `http://localhost:5173/payment`
- Kết quả thanh toán: `http://localhost:5173/payment/return`
- Đơn hàng: `http://localhost:5173/orders`
- VNPay Sandbox: `https://sandbox.vnpayment.vn/paymentv2/vpcpay.html`

### 6. Thông tin thẻ test khác

#### Thẻ Visa/Master

- Số thẻ: `4000000000000002`
- Tên chủ thẻ: `NGUYEN VAN A`
- Ngày hết hạn: `07/15`
- CVV: `123`

#### Thẻ ATM khác

- Số thẻ: `9704198526191432198`
- Tên chủ thẻ: `NGUYEN VAN B`
- Ngày hết hạn: `07/15`
- Mật khẩu OTP: `123456`

### 7. Troubleshooting

#### Lỗi "Chữ ký không hợp lệ"

- Kiểm tra `VITE_VNPAY_HASH_SECRET` trong `.env`
- Đảm bảo không có khoảng trắng thừa

#### Lỗi "Mã merchant không hợp lệ"

- Kiểm tra `VITE_VNPAY_TMN_CODE` trong `.env`
- Đảm bảo sử dụng mã sandbox

#### Không redirect về return URL

- Kiểm tra `VITE_VNPAY_RETURN_URL` trong `.env`
- Đảm bảo URL đúng format: `http://localhost:5173/payment/return`

### 8. Production Notes

Khi deploy production:

1. Thay đổi URL VNPay từ sandbox sang production
2. Sử dụng thông tin merchant thật
3. Cấu hình return URL production
4. Test với số tiền nhỏ trước
5. Setup monitoring và logging
