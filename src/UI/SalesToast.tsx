import type React from "react";
import { useEffect, useState } from "react";
import { FaX } from "react-icons/fa6";

export const SalesToast: React.FC = () => {
  interface ProductDiscountList {
    id?: number;
    customerName: string;
    location: string;
    productName: string;
    timeAgo: string;
    imgA: string;
  }
  const productDiscountList: ProductDiscountList[] = [
    {
      id: 1,
      customerName: "A Phú",
      location: "Đồng Tháp",
      productName:
        "1 Đôi Giày Nike Jordan 1 Retro High OG SP 'Utility Stash' DN4336-001",
      timeAgo: "15 phút trước",
      imgA: "https://res.cloudinary.com/ds6vqu3dy/image/upload/v1753876731/shoe1a_pj9stt.png",
    },
    {
      id: 2,
      customerName: " A Tuyến ",
      location: "Gia Lai",
      productName: "Giày Nike Jordan 1 Retro Golf 'Starfish' DD9315-800",
      timeAgo: "2 phút trước",
      imgA: "https://res.cloudinary.com/ds6vqu3dy/image/upload/v1753876731/shoe2a_t85m61.webp",
    },
    {
      id: 3,
      customerName: " A Nhật",
      location: "Đắk Lắk",
      productName: "Giày Nike Jordan 1 Retro Golf 'Starfish' DD9315-800",
      timeAgo: "1 tiếng trước",
      imgA: "https://res.cloudinary.com/ds6vqu3dy/image/upload/v1753876733/shoe3a_drpxsn.webp",
    },
    {
      id: 4,
      customerName: "A Nam",
      location: "Đắk Lắk",
      productName: "Giày Nike Jordan 1 Retro Golf 'Starfish' DD9315-800",
      timeAgo: "4 phút trước",
      imgA: "https://res.cloudinary.com/ds6vqu3dy/image/upload/v1753876732/shoe4a_rb0b31.webp",
    },
    {
      id: 5,
      customerName: "C Hồng  ",
      location: "Nha Trang",
      productName: "Giày Nike Air Jordan 1 Retro High OG 'Volt' 555088-702  ",
      timeAgo: "24 phút trước",
      imgA: "https://res.cloudinary.com/ds6vqu3dy/image/upload/v1753876734/shoe5a_ctdruv.webp",
    },
    {
      id: 6,
      customerName: "C Phượng",
      location: "Hồ Chí Minh",
      productName: "Giày Nike Jordan 1 Mid 'Light Smoke Grey' 554725-078",
      timeAgo: "Vừa xong",
      imgA: "https://res.cloudinary.com/ds6vqu3dy/image/upload/v1753876733/shoe6a_edwarv.webp",
    },
    {
      id: 7,
      customerName: "A Phú",
      location: "Hồ Chí Minh",
      productName: " Giày Nike Wmns Air Jordan 1 Mid 'Shadow' BQ6472-007 ",
      timeAgo: "8 phút trước",
      imgA: "https://res.cloudinary.com/ds6vqu3dy/image/upload/v1753876740/shoe7a_umcsyd.png",
    },
    {
      id: 8,
      customerName: "C Giao  ",
      location: "Hồ Chí Minh",
      productName: "Giày Nike Wmns Air Jordan 1 Mid 'Particle Grey' DO7139-002",
      timeAgo: "57 phút trước",
      imgA: "https://res.cloudinary.com/ds6vqu3dy/image/upload/v1753876741/shoe8a_xyijxv.png",
    },
    {
      id: 9,
      customerName: "A Đạt",
      location: "Hồ Chí Minh",
      productName: "Giày Nike Wmns Air Jordan 1 Mid 'Particle Grey' DO7139-002",
      timeAgo: "12 phút trước",
      imgA: "https://res.cloudinary.com/ds6vqu3dy/image/upload/v1753876739/shoe9a_tqcd2t.png",
    },
    {
      id: 10,
      customerName: "C Hằng",
      location: "Nha Trang",
      productName: "Giày Nike Wmns Air Jordan 1 Mid 'Particle Grey' DO7139-002",
      timeAgo: "2 phút trước",
      imgA: "https://res.cloudinary.com/ds6vqu3dy/image/upload/v1753876745/shoe10a_givh0g.png",
    },
  ];

  const [index, setIndex] = useState(0);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const len = productDiscountList.length;

    const interval = setInterval(() => {
      // chọn 1 sản phẩm ngẫu nhiên
      setIndex(() => Math.floor(Math.random() * len));

      // hiện toast
      setShowToast(true);

      // sau 2s thì ẩn
      const hide = setTimeout(() => setShowToast(false), 2000);

      // dọn dẹp timeout ẩn nếu unmount ngay trong khoảng 2s
      return () => clearTimeout(hide);
    }, 5000);

    return () => clearInterval(interval);
  }, [productDiscountList.length]);

  return (
    <div
      key={1}
      className={`bg-white flex fixed  left-4 max-w-96 p-1 rounded-5px transition-all duration-500 ease-in-out z-50 ${
        showToast ? "bottom-8" : "bottom-0"
      } ${showToast ? "opacity-100" : "opacity-0"}
      `}
    >
      <div className="flex items-center justify-center p-2">
        <img
          src={productDiscountList[index].imgA}
          width={120}
          height={120}
          alt=""
        />
      </div>
      <div className="p-2">
        <div className="flex">
          <div className="mr-2">
            <span className="text-gray-600">
              {productDiscountList[index].customerName} ở{" "}
              {productDiscountList[index].location}
            </span>{" "}
            <br />
            <span className="text-gray-600 text-[13px]">vừa mua</span>{" "}
            <span className="text-black font-bold hover:text-shophover cursor-pointer">
              {productDiscountList[index].productName}
            </span>{" "}
            <br />
            <span className="text-gray-600">
              {productDiscountList[index].timeAgo}
            </span>
          </div>
          <FaX className="text-gray-800 cursor-pointer text-2xl font-black" />
        </div>
      </div>
    </div>
  );
};
