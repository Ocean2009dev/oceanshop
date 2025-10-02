import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { logout } from "../services/authService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      toast.success("Đăng xuất thành công");
      navigate("/");
    } catch (error) {
      toast.error("Lỗi khi đăng xuất");
      console.error("Logout error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium"
            >
              Đăng xuất
            </button>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Thông tin tài khoản
            </h2>
            <div className="space-y-3">
              <div>
                <span className="text-sm font-medium text-gray-500">
                  Email:
                </span>
                <p className="text-sm text-gray-900">{currentUser?.email}</p>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-500">UID:</span>
                <p className="text-sm text-gray-900 font-mono">
                  {currentUser?.uid}
                </p>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-500">
                  Email đã xác minh:
                </span>
                <p className="text-sm text-gray-900">
                  {currentUser?.emailVerified ? "Có" : "Chưa"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
