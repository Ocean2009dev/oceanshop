# Hướng dẫn Deploy VNPay lên Vercel

## 🚨 Lỗi VNPay Code 72 - Cách khắc phục

### 1. **Cấu hình Environment Variables trên Vercel**

Vào Vercel Dashboard > Project Settings > Environment Variables và thêm:

```env
VITE_VNPAY_TMN_CODE=your_actual_tmn_code
VITE_VNPAY_HASH_SECRET=your_actual_hash_secret
VITE_VNPAY_RETURN_URL=https://your-domain.vercel.app/payment/return
```

**⚠️ Lưu ý quan trọng:**

- Thay `your-domain.vercel.app` bằng domain thật của bạn
- Đảm bảo sử dụng `https://` không phải `http://`
- Không có dấu `/` ở cuối URL

### 2. **Cấu hình Return URL trên VNPay Portal**

1. Đăng nhập VNPay Merchant Portal
2. Vào **Cấu hình API**
3. Thêm Return URL: `https://your-domain.vercel.app/payment/return`
4. **Lưu cấu hình**

### 3. **Kiểm tra Domain Vercel**

Lấy domain chính xác từ Vercel:

```bash
# Trong terminal
vercel --prod
# Hoặc xem trong Vercel Dashboard
```

### 4. **Test trước khi deploy**

```bash
# 1. Set environment variables local
export VITE_VNPAY_RETURN_URL=https://your-domain.vercel.app/payment/return

# 2. Build và test
npm run build
npm run preview

# 3. Kiểm tra console logs
# Mở DevTools > Console để xem debug info
```

### 5. **Checklist Deploy**

- [ ] Environment variables đã set trên Vercel
- [ ] Return URL đã cấu hình trên VNPay Portal
- [ ] Domain Vercel chính xác (https://)
- [ ] TMN_CODE và HASH_SECRET đúng
- [ ] Test với số tiền nhỏ trước

### 6. **Debug Steps**

#### Bước 1: Kiểm tra Console Logs

```javascript
// Mở DevTools > Console khi thanh toán
// Xem logs:
// - VNPay Config
// - Payment Data
// - Generated Hash
// - Final VNPay URL
```

#### Bước 2: Kiểm tra Network Tab

```
1. Mở DevTools > Network
2. Thực hiện thanh toán
3. Xem request đến VNPay
4. Kiểm tra parameters
```

#### Bước 3: Validate Hash Manual

```javascript
// Test hash generation
const testData = {
  vnp_Amount: 10000,
  vnp_Command: "pay",
  vnp_TmnCode: "YOUR_TMN_CODE",
  // ... other params
};

// Check if hash matches VNPay expectation
```

### 7. **Common Issues & Solutions**

#### Issue 1: "Invalid TMN Code"

```
Solution:
- Kiểm tra VITE_VNPAY_TMN_CODE trên Vercel
- Đảm bảo không có khoảng trắng thừa
```

#### Issue 2: "Invalid Return URL"

```
Solution:
- Cập nhật Return URL trên VNPay Portal
- Đảm bảo dùng https:// cho production
```

#### Issue 3: "Invalid Signature"

```
Solution:
- Kiểm tra VITE_VNPAY_HASH_SECRET
- Đảm bảo encoding UTF-8
- Kiểm tra parameter sorting
```

#### Issue 4: "Environment Variables not loaded"

```
Solution:
- Redeploy sau khi thêm env vars
- Kiểm tra tên biến (VITE_ prefix)
- Clear build cache
```

### 8. **Production Deployment**

```bash
# 1. Update environment variables
VITE_VNPAY_RETURN_URL=https://your-production-domain.com/payment/return

# 2. Update VNPay URL for production
# In utils/vnpay.ts:
vnp_Url: 'https://vnpayment.vn/paymentv2/vpcpay.html'

# 3. Deploy
vercel --prod
```

### 9. **Monitoring & Logging**

```javascript
// Add to your analytics
gtag("event", "vnpay_payment_initiated", {
  amount: orderInfo.amount,
  order_id: orderInfo.orderId,
});

// Log errors
console.error("VNPay Error:", error);
```

### 10. **Security Notes**

- ✅ Environment variables được encrypt trên Vercel
- ✅ HASH_SECRET không expose ra client
- ✅ HTTPS bắt buộc cho production
- ✅ Validate tất cả parameters từ VNPay

### 11. **Support Contacts**

- **VNPay Hotline**: 1900 55 55 77
- **VNPay Email**: support@vnpay.vn
- **Vercel Support**: https://vercel.com/support
