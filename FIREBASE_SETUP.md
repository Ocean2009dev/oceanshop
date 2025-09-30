# Firebase Setup Guide

## 1. Cài đặt Firebase SDK

```bash
npm install firebase
```

## 2. Tạo Firebase Project

1. Truy cập [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" hoặc "Create a project"
3. Nhập tên project (ví dụ: ocean-shop)
4. Chọn có/không sử dụng Google Analytics
5. Click "Create project"ư

## 3. Thêm Web App vào Firebase Project

1. Trong Firebase Console, click vào icon Web (</>) 
2. Nhập tên app (ví dụ: Ocean Shop Web)
3. Chọn "Also set up Firebase Hosting" (tùy chọn)
4. Click "Register app"
5. Copy Firebase configuration object

## 4. Cấu hình Environment Variables

1. Copy file `.env.example` thành `.env`
2. Thay thế các giá trị placeholder bằng config từ Firebase:

```env
VITE_FIREBASE_API_KEY=your-actual-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
VITE_FIREBASE_APP_ID=your-app-id
VITE_FIREBASE_MEASUREMENT_ID=your-measurement-id
```

## 5. Kích hoạt Firebase Services

### Authentication
1. Trong Firebase Console, vào "Authentication"
2. Click "Get started"
3. Vào tab "Sign-in method"
4. Kích hoạt các providers cần thiết:
   - Email/Password
   - Google (tùy chọn)
   - Facebook (tùy chọn)

### Firestore Database
1. Vào "Firestore Database"
2. Click "Create database"
3. Chọn "Start in test mode" (cho development)
4. Chọn location gần nhất (asia-southeast1 cho VN)

### Storage
1. Vào "Storage"
2. Click "Get started"
3. Chọn "Start in test mode"
4. Chọn location tương tự Firestore

## 6. Cấu hình Security Rules

### Firestore Rules (Development)
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can read/write their own data
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Products are readable by all, writable by authenticated users
    match /products/{productId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    
    // Orders are readable/writable by owner only
    match /orders/{orderId} {
      allow read, write: if request.auth != null && 
        request.auth.uid == resource.data.userId;
    }
  }
}
```

### Storage Rules (Development)
```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    // Users can upload to their own folders
    match /avatars/{userId}/{allPaths=**} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Product images readable by all, writable by authenticated users
    match /products/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

## 7. Sử dụng trong Code

### Wrap App với AuthProvider
```tsx
// src/main.tsx
import { AuthProvider } from './contexts/AuthContext';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
```

### Sử dụng Auth trong Component
```tsx
import { useAuth } from '../contexts/AuthContext';
import { loginWithEmailAndPassword, registerWithEmailAndPassword } from '../services/authService';

const LoginComponent = () => {
  const { currentUser, isAuthenticated } = useAuth();
  
  const handleLogin = async (email: string, password: string) => {
    try {
      await loginWithEmailAndPassword(email, password);
      // User sẽ được tự động update trong context
    } catch (error) {
      console.error('Login failed:', error);
    }
  };
};
```

### Sử dụng Firestore
```tsx
import { productService } from '../services/firestoreService';
import { useFirestoreCollection } from '../hooks/useFirestore';

const ProductList = () => {
  const { data: products, loading, error } = useFirestoreCollection(productService);
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <div>
      {products.map(product => (
        <div key={product.id}>{product.title}</div>
      ))}
    </div>
  );
};
```

## 8. Testing

1. Tạo một user test trong Authentication
2. Thêm một vài documents test trong Firestore
3. Test upload file trong Storage

## 9. Production Setup

1. Thay đổi Firestore và Storage rules thành production mode
2. Cấu hình proper authentication domains
3. Set up proper CORS cho Storage
4. Enable App Check cho security

## Cấu trúc Files đã tạo:

```
src/
├── config/
│   └── firebase.ts              # Firebase configuration
├── services/
│   ├── authService.ts           # Authentication methods
│   ├── firestoreService.ts      # Firestore CRUD operations
│   └── storageService.ts        # File upload/download
├── contexts/
│   └── AuthContext.tsx          # Auth state management
├── hooks/
│   └── useFirestore.ts          # Custom Firestore hooks
└── ...

.env.example                     # Environment variables template
FIREBASE_SETUP.md               # This setup guide
```

## Lưu ý quan trọng:

1. **Không commit file `.env`** vào git
2. **Sử dụng test mode rules** chỉ cho development
3. **Cấu hình production rules** trước khi deploy
4. **Backup dữ liệu** thường xuyên
5. **Monitor usage** để tránh vượt quota miễn phí