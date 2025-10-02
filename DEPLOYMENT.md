# Hướng Dẫn Deploy OceanShop lên Vercel

## 🚀 Cách Fix Lỗi 404 trên Vercel

### Vấn đề

Khi sử dụng React Router với `createBrowserRouter`, các route như `/text`, `/sneaker` sẽ bị lỗi 404 khi truy cập trực tiếp trên Vercel vì server không biết cách xử lý client-side routing.

### Giải pháp đã áp dụng

#### 1. Tạo file `vercel.json`

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

#### 2. Tạo file `public/_redirects` (backup cho Netlify)

```
/*    /index.html   200
```

#### 3. Cập nhật `vite.config.ts`

- Thêm cấu hình build optimization
- Code splitting cho better performance
- Cấu hình server settings

## 📋 Checklist Deploy

### Trước khi deploy:

- [ ] Đã tạo file `vercel.json`
- [ ] Đã tạo file `public/_redirects`
- [ ] Đã cập nhật `vite.config.ts`
- [ ] Đã cấu hình environment variables
- [ ] Đã test build locally: `npm run build && npm run preview`

### Environment Variables trên Vercel:

```
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
VITE_FIREBASE_APP_ID=your-app-id
```

### Các bước deploy:

#### 1. Commit changes

```bash
git add .
git commit -m "fix: add vercel.json for client-side routing"
git push origin main
```

#### 2. Deploy trên Vercel

- Vercel sẽ tự động detect và deploy
- Hoặc manual deploy: `vercel --prod`

#### 3. Test các routes

- https://oceanshop.vercel.app/
- https://oceanshop.vercel.app/text
- https://oceanshop.vercel.app/sneaker
- https://oceanshop.vercel.app/login

## 🔧 Troubleshooting

### Nếu vẫn bị 404:

1. Kiểm tra file `vercel.json` đã được commit chưa
2. Kiểm tra build có thành công không
3. Xem logs trên Vercel dashboard
4. Clear cache và redeploy

### Nếu build fail:

1. Kiểm tra TypeScript errors: `npm run build`
2. Kiểm tra ESLint errors: `npm run lint`
3. Kiểm tra dependencies conflicts

### Performance Issues:

1. Kiểm tra bundle size
2. Optimize images
3. Enable compression
4. Use CDN cho static assets

## 📊 Monitoring

### Sau khi deploy:

- [ ] Test tất cả routes
- [ ] Test responsive design
- [ ] Test Firebase integration
- [ ] Check performance metrics
- [ ] Monitor error logs

### Tools để monitor:

- Vercel Analytics
- Google PageSpeed Insights
- Firebase Console
- Browser DevTools

## 🚀 Next Steps

1. Setup custom domain
2. Configure CDN
3. Setup monitoring alerts
4. Optimize for SEO
5. Setup CI/CD pipeline
