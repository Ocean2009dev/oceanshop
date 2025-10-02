# OceanShop - Website Thương Mại Điện Tử Giày Sneaker

OceanShop là một ứng dụng web thương mại điện tử chuyên bán giày sneaker, được xây dựng bằng React, TypeScript và Vite. Dự án cung cấp trải nghiệm mua sắm trực tuyến hiện đại với giao diện responsive và các tính năng đầy đủ.

## 🚀 Tính Năng Chính

### 🛍️ Tính Năng Thương Mại
- **Danh mục sản phẩm**: Hiển thị danh sách sneaker với hình ảnh, giá cả và thông tin chi tiết
- **Bộ lọc nâng cao**: Lọc theo thương hiệu, giá, màu sắc, kích thước
- **Sắp xếp sản phẩm**: Theo giá, tên, độ phổ biến, ngày tạo
- **Chi tiết sản phẩm**: Trang sản phẩm với gallery hình ảnh và mô tả đầy đủ
- **Giỏ hàng**: Thêm, xóa, cập nhật số lượng sản phẩm
- **Thanh toán**: Quy trình thanh toán đơn giản và bảo mật

### 🔐 Xác Thực & Bảo Mật
- **Đăng ký/Đăng nhập**: Hệ thống xác thực với Firebase Authentication
- **Bảo vệ route**: Protected routes cho các trang yêu cầu đăng nhập
- **Dashboard cá nhân**: Quản lý thông tin tài khoản và đơn hàng

### 📱 Giao Diện & Trải Nghiệm
- **Responsive Design**: Tối ưu cho desktop, tablet và mobile
- **UI/UX hiện đại**: Sử dụng Tailwind CSS cho giao diện đẹp mắt
- **Loading states**: Hiệu ứng loading và skeleton screens
- **Toast notifications**: Thông báo real-time cho các hành động
- **Smooth animations**: Hiệu ứng chuyển động mượt mà

## 🛠️ Công Nghệ Sử Dụng

### Frontend Core
- **React 19.1.0**: Library JavaScript cho xây dựng giao diện
- **TypeScript**: Ngôn ngữ lập trình có type safety
- **Vite**: Build tool nhanh và hiện đại
- **React Router DOM**: Routing cho Single Page Application

### Styling & UI
- **Tailwind CSS 4.1.11**: Utility-first CSS framework
- **React Icons**: Thư viện icon phong phú
- **Keen Slider**: Carousel/slider component

### State Management & API
- **React Context API**: Quản lý state toàn cục
- **Custom Hooks**: Tái sử dụng logic component
- **Fetch API**: Gọi API REST

### Backend & Database
- **Firebase 12.3.0**: 
  - Authentication (Xác thực người dùng)
  - Firestore (Database NoSQL)
  - Storage (Lưu trữ file)

### Animation & Effects
- **Lottie React**: Hiệu ứng animation từ After Effects
- **React Hot Toast**: Thông báo toast đẹp mắt

### Development Tools
- **ESLint**: Linting code JavaScript/TypeScript
- **TypeScript ESLint**: Rules cho TypeScript

## 📁 Cấu Trúc Dự Án

```
oceanshop/
├── public/                     # Static assets
├── src/
│   ├── api/                   # API calls và services
│   │   └── product.ts         # Product API endpoints
│   ├── components/            # React components
│   │   ├── Auth/             # Authentication components
│   │   ├── Common/           # Shared components
│   │   ├── Layout/           # Layout components (Header, Footer)
│   │   └── Sections/         # Page sections
│   ├── contexts/             # React Context providers
│   │   ├── AuthContext.tsx   # Authentication state
│   │   └── CountContext.tsx  # Cart/counter state
│   ├── pages/                # Page components
│   │   ├── Home.tsx          # Trang chủ
│   │   ├── Sneaker.tsx       # Danh sách sản phẩm
│   │   ├── Product.tsx       # Chi tiết sản phẩm
│   │   ├── Login.tsx         # Đăng nhập
│   │   ├── Signup.tsx        # Đăng ký
│   │   ├── Dashboard.tsx     # Trang cá nhân
│   │   └── ...
│   ├── services/             # Business logic services
│   │   ├── authService.ts    # Authentication logic
│   │   └── firebase.ts       # Firebase configuration
│   ├── styles/               # CSS files
│   │   ├── global.css        # Global styles
│   │   └── login.css         # Login page styles
│   ├── UI/                   # UI components
│   │   └── SalesToast.tsx    # Sales notification toast
│   ├── App.tsx               # Main App component
│   └── main.tsx              # Entry point
├── .env.example              # Environment variables template
├── FIREBASE_SETUP.md         # Firebase setup guide
├── package.json              # Dependencies và scripts
├── tailwind.config.js        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
└── vite.config.ts            # Vite configuration
```

## 🚀 Cài Đặt và Chạy Dự Án

### Yêu Cầu Hệ Thống
- Node.js >= 18.0.0
- npm hoặc yarn
- Git

### Bước 1: Clone Repository
```bash
git clone <repository-url>
cd oceanshop
```

### Bước 2: Cài Đặt Dependencies
```bash
npm install
```

### Bước 3: Cấu Hình Environment Variables
```bash
# Copy file .env.example thành .env
cp .env.example .env

# Chỉnh sửa file .env với thông tin Firebase của bạn
```

### Bước 4: Cấu Hình Firebase
Làm theo hướng dẫn chi tiết trong file `FIREBASE_SETUP.md`

### Bước 5: Chạy Development Server
```bash
npm run dev
```

Ứng dụng sẽ chạy tại `http://localhost:5173`

## 📜 Scripts Có Sẵn

```bash
# Chạy development server
npm run dev

# Build cho production
npm run build

# Preview build production
npm run preview

# Lint code
npm run lint
```

## 🔧 Cấu Hình

### Environment Variables
```env
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
VITE_FIREBASE_APP_ID=your-app-id
```

### API Configuration
- Backend API: `http://localhost:8017/api`
- Production API: `https://be-oceanshop.onrender.com/api`## 🎯 Tí
nh Năng Nổi Bật

### 1. Hệ Thống Lọc Sản Phẩm
- **Lọc theo thương hiệu**: Nike, Adidas, Gucci, Alaia Paris và các thương hiệu khác
- **Lọc theo khoảng giá**: 
  - Dưới 50,000₫
  - 50,000₫ - 200,000₫
  - 200,000₫ - 400,000₫
  - 400,000₫ - 1,000,000₫
  - Trên 1,000,000₫
- **Lọc theo màu sắc**: Đỏ, Xanh, Trắng, Vàng, Nâu
- **Lọc theo kích thước**: 36 - 44 (bao gồm các size 1/3 và 2/3)
- **Sắp xếp đa dạng**: Theo giá, tên, độ phổ biến, ngày tạo, bán chạy nhất

### 2. Responsive Design
- **Mobile-first approach**: Tối ưu cho thiết bị di động trước
- **Breakpoints tối ưu**: Responsive cho mọi kích thước màn hình
- **Touch-friendly interface**: Giao diện thân thiện với cảm ứng
- **Mobile filter**: Bộ lọc dạng slide-out cho mobile

### 3. Performance Optimization
- **Code splitting**: Tách code với React Router
- **Lazy loading**: Tải components khi cần thiết
- **Optimized images**: Tối ưu hình ảnh và assets
- **Fast build**: Build nhanh với Vite
- **Caching strategies**: Chiến lược cache hiệu quả

### 4. User Experience
- **Loading states**: Hiệu ứng loading cho mọi action
- **Error handling**: Xử lý lỗi graceful
- **Toast notifications**: Thông báo real-time
- **Smooth transitions**: Chuyển trang mượt mà
- **Search functionality**: Tìm kiếm sản phẩm nhanh chóng

## 🔐 Bảo Mật

- **Firebase Authentication**: Xác thực an toàn với Firebase
- **Protected Routes**: Bảo vệ các trang yêu cầu đăng nhập
- **Input Validation**: Kiểm tra và làm sạch dữ liệu đầu vào
- **HTTPS Enforced**: Bắt buộc HTTPS trong production
- **Environment Variables**: Bảo mật thông tin nhạy cảm

## 📱 Responsive Breakpoints

```css
/* Mobile */
@media (max-width: 768px) {
  /* Mobile-specific styles */
}

/* Tablet */
@media (min-width: 768px) and (max-width: 1024px) {
  /* Tablet-specific styles */
}

/* Desktop */
@media (min-width: 1024px) {
  /* Desktop-specific styles */
}
```

## 🎨 Design System

### Colors
- **Primary**: Ocean blue theme
- **Secondary**: Complementary colors
- **Neutral**: Gray scale for text and backgrounds
- **Status**: Success, warning, error colors

### Typography
- **Headings**: Responsive font sizes
- **Body text**: Readable font sizes
- **Mobile optimization**: Adjusted for small screens

### Components
- **Cards**: Product display cards
- **Buttons**: Various button styles
- **Forms**: Consistent form styling
- **Navigation**: Header and footer components

## 🔄 State Management

### Context Providers
- **AuthContext**: Quản lý trạng thái xác thực
- **CountContext**: Quản lý giỏ hàng và số lượng
- **OrderContext**: Quản lý đơn hàng

### Custom Hooks
- **useAuth**: Hook cho authentication
- **useCart**: Hook cho giỏ hàng
- **useProducts**: Hook cho sản phẩm

## 🌐 API Integration

### Product API
```typescript
// Lấy tất cả sản phẩm
GET /api/product

// Lấy sản phẩm theo thương hiệu
GET /api/product/{brand}
```

### Authentication API
- Firebase Authentication endpoints
- Custom user management

### Error Handling
- Graceful error handling
- User-friendly error messages
- Retry mechanisms## 🚀 
Deployment

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm run preview
```

### Environment Setup
1. Tạo Firebase project
2. Cấu hình Authentication, Firestore, Storage
3. Cập nhật environment variables
4. Deploy lên hosting platform

## 🧪 Testing

### Manual Testing
- Test responsive design trên các thiết bị
- Test các tính năng chính
- Test performance

### Automated Testing
```bash
# Chạy linting
npm run lint

# Type checking
npx tsc --noEmit
```

## 📊 Performance Metrics

### Core Web Vitals
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

### Optimization Techniques
- Image optimization
- Code splitting
- Lazy loading
- Caching strategies
- Bundle size optimization

## 🔧 Development Guidelines

### Code Style
- TypeScript strict mode
- ESLint configuration
- Consistent naming conventions
- Component structure standards

### Git Workflow
```bash
# Feature branch
git checkout -b feature/new-feature

# Commit changes
git commit -m "feat: add new feature"

# Push and create PR
git push origin feature/new-feature
```

### Component Structure
```typescript
// Component template
interface Props {
  // Props interface
}

const Component: React.FC<Props> = ({ prop }) => {
  // Component logic
  
  return (
    // JSX
  );
};

export default Component;
```

## 🤝 Đóng Góp

### Quy Trình Đóng Góp
1. **Fork repository** về tài khoản của bạn
2. **Tạo feature branch** từ main branch
3. **Implement changes** với code quality cao
4. **Write tests** cho các tính năng mới
5. **Update documentation** nếu cần thiết
6. **Submit Pull Request** với mô tả chi tiết

### Coding Standards
- Tuân thủ TypeScript best practices
- Sử dụng ESLint và Prettier
- Viết code có thể đọc và maintain
- Comment code khi cần thiết
- Tối ưu performance

### Bug Reports
Khi báo cáo bug, vui lòng bao gồm:
- Mô tả chi tiết vấn đề
- Steps to reproduce
- Expected vs actual behavior
- Screenshots nếu có
- Browser và device information

## 📄 License

Dự án này được phân phối dưới **MIT License**. Xem file `LICENSE` để biết thêm chi tiết về quyền và nghĩa vụ khi sử dụng code.

## 📞 Liên Hệ & Hỗ Trợ

### Thông Tin Liên Hệ
- **Website**: [OceanShop](https://oceanshop.com)
- **Email**: support@oceanshop.com
- **GitHub**: [Repository Link]
- **Issues**: [GitHub Issues](https://github.com/your-repo/issues)

### Hỗ Trợ Kỹ Thuật
- Tạo issue trên GitHub cho bug reports
- Discussions cho feature requests
- Email support cho các vấn đề khẩn cấp

## 🙏 Acknowledgments

### Công Nghệ & Tools
- **React Team** - Cho framework tuyệt vời
- **Tailwind CSS** - Cho utility-first CSS framework
- **Firebase** - Cho backend services đầy đủ
- **Vite** - Cho build tool nhanh chóng
- **TypeScript** - Cho type safety

### Inspiration & Resources
- Modern e-commerce design patterns
- React best practices community
- Open source contributors
- UI/UX design inspiration

### Special Thanks
- Tất cả contributors đã đóng góp cho dự án
- Community feedback và suggestions
- Beta testers và early adopters

---

**OceanShop** - Nơi đam mê sneaker được thỏa mãn! 👟✨

*Được xây dựng với ❤️ bằng React, TypeScript và Vite*