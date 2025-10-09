import { useState } from "react";
import Container from "../components/Layout/Container";
import { FaArrowPointer } from "react-icons/fa6";
import toast from "react-hot-toast";

const Text = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    sdt: "",
  });
  const changeData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handSend = async (e: React.FormEvent) => {
    e.preventDefault();
    const url = "http://localhost:8017/api/user";
    setIsLoading(true);
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        toast.error("Lỗi mạng hoặc BE không phản hồi");

        throw new Error("Lỗi mạng hoặc BE không phản hồi");
      }
      toast.success("Gửi tới Backend thành công");

      const data = await response.json(); // cần await ở đây
      console.log("Dữ liệu BE trả về:", data);
      return data;
    } catch (error) {
      console.log("Lỗi:", error);
      setIsLoading(false);
      toast.error("Không thể gửi tới Backend");
    }
  };
  return (
    <>
      <Container>
        <h1>Nơi này để hiển thị html </h1>
        {/* Counter Section */}
        <div className="flex flex-col items-center gap-6 my-8 p-6 bg-gray-50 rounded-lg shadow-sm">
          <form action="" className="flex flex-col gap-2.5" onSubmit={handSend}>
            <input
              type="text"
              placeholder="Tên người dùng"
              className="p-3 border border-black"
              name="fullName"
              value={formData.fullName}
              onChange={changeData}
            />
            <input
              type="text"
              placeholder="Email người dùng"
              className="p-3 border border-black"
              name="email"
              value={formData.email}
              onChange={changeData}
            />
            <input
              type="text"
              placeholder="Số điện thoại người dùng"
              className="p-3 border border-black"
              name="sdt"
              value={formData.sdt}
              onChange={changeData}
            />
            <button
              type="submit"
              disabled={isLoading}
              className={`inline-flex items-center py-3 px-6 text-white uppercase text-sm font-medium rounded-md transition-colors ${
                isLoading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-black hover:bg-gray-800 cursor-pointer"
              }`}
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  <span>Đang gửi...</span>
                </>
              ) : (
                <>
                  <span className="mr-2">Gửi liên hệ</span>
                  <FaArrowPointer />
                </>
              )}
            </button>
          </form>
        </div>
      </Container>
    </>
  );
};

export default Text;
