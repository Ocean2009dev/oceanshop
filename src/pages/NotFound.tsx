import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center jupy-10 text-center">
      <p className="mb-4 text-lg">Trang không tồn tại.</p>
      <p className="mb-4 text-7xl font-bold">404</p>
      <Link to="/" className="text-shophover underline">
        Về Trang chủ
      </Link>
    </div>
  );
}
