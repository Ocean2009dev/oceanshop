import { useState } from "react";
import Container from "../components/Layout/Container";

const Text = () => {
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
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Lỗi mạng hoặc BE không phản hồi");
      }

      const data = await response.json(); // cần await ở đây
      console.log("Dữ liệu BE trả về:", data);
      return data;
    } catch (error) {
      console.log("Lỗi:", error);
    }
    console.log(formData);
  };
  return (
    <>
      <Container>
        <h1>Nơi này để hiển thị html </h1>

        {/* Game Status Bar */}
        <div className="my-8">
          <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-4 shadow-lg overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-black opacity-20 transform skew-x-12 translate-x-4"></div>

            {/* Content */}
            <div className="relative flex items-center justify-between">
              {/* Left side - Level */}
              <div className="flex items-center bg-blue-400 rounded-lg px-4 py-2 shadow-md">
                <span className="text-white font-bold text-xl">1 - Tendoo</span>
              </div>

              {/* Right side - Stats */}
              <div className="flex items-center gap-4">
                {/* Coins */}
                <div className="flex items-center bg-yellow-500 rounded-lg px-3 py-2 shadow-md">
                  <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center mr-2">
                    <span className="text-white text-lg">😊</span>
                  </div>
                  <span className="text-white font-bold text-xl">140</span>
                </div>

                {/* Gems */}
                <div className="flex items-center bg-teal-500 rounded-lg px-3 py-2 shadow-md">
                  <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center mr-2">
                    <span className="text-white text-lg">💎</span>
                  </div>
                  <span className="text-white font-bold text-xl">8091</span>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-black opacity-10 transform rotate-45 translate-x-8 -translate-y-8"></div>
            <div className="absolute bottom-0 left-1/4 w-8 h-8 bg-white opacity-10 rounded-full"></div>
          </div>
        </div>

        {/* Alternative version with more accurate styling */}
        <div className="my-8">
          <div className="relative">
            {/* Main container with gradient */}
            <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-xl p-1 shadow-2xl">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-4 relative overflow-hidden">
                {/* Diagonal stripe pattern */}
                <div className="absolute inset-0">
                  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20 transform skew-x-12"></div>
                  <div className="absolute top-0 right-0 w-32 h-full bg-black opacity-30 transform skew-x-12"></div>
                </div>

                {/* Content layer */}
                <div className="relative flex items-center justify-between z-10">
                  {/* Level section */}
                  <div className="bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg px-6 py-3 shadow-lg border border-blue-300">
                    <span className="text-white font-bold text-xl tracking-wide">
                      1 - Tendoo
                    </span>
                  </div>

                  {/* Stats section */}
                  <div className="flex items-center gap-3">
                    {/* Happy coins */}
                    <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg px-4 py-2 shadow-lg border border-yellow-300 flex items-center">
                      <div className="w-10 h-10 bg-yellow-600 rounded-full flex items-center justify-center mr-3 shadow-inner">
                        <span className="text-2xl">😊</span>
                      </div>
                      <span className="text-white font-bold text-2xl drop-shadow-lg">
                        140
                      </span>
                    </div>

                    {/* Gems */}
                    <div className="bg-gradient-to-r from-teal-400 to-teal-500 rounded-lg px-4 py-2 shadow-lg border border-teal-300 flex items-center">
                      <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center mr-3 shadow-inner">
                        <span className="text-white font-bold text-lg">T</span>
                      </div>
                      <span className="text-white font-bold text-2xl drop-shadow-lg">
                        8091
                      </span>
                    </div>
                  </div>
                </div>

                {/* Decorative corner elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-black opacity-20 transform rotate-45 translate-x-10 -translate-y-10"></div>
                <div className="absolute bottom-0 left-1/3 w-6 h-6 bg-white opacity-20 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-white opacity-10 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
              </div>
            </div>
          </div>
        </div>

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
            <button className="p-3 border border-black cursor-pointer">
              Gửi
            </button>
          </form>
        </div>
      </Container>
    </>
  );
};

export default Text;
