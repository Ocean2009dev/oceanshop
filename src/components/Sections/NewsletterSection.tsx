import type React from "react";
import { FaAnglesRight, FaCalendarDays } from "react-icons/fa6";
import Carousel from "../Common/Carousel";

export const NewsletterSection: React.FC = () => {
  interface BlobList {
    id: number;
    bgPost: string;
    title: string;
    describe: string;
    date: string;
  }
  const blogList: BlobList[] = [
    {
      id: 1,
      bgPost:
        "https://res.cloudinary.com/ds6vqu3dy/image/upload/v1754279957/newfd1_qvd3xw.jpg",
      title:
        "Legit check : Hướng dẫn cách phân biệt Air Jordan 1 'Volt Gold' Real và Fake",
      describe:
        "Bạn đang cố gắng tìm hiểu cách phân biệt đôi Air Jordan 1 phối màu Volt Gold của Nike là thậ...",
      date: "02/07/2028",
    },
    {
      id: 2,
      bgPost:
        "https://res.cloudinary.com/ds6vqu3dy/image/upload/v1754279957/newfd2_nn40lb.jpg",
      title: "Top 10 đôi giày thể thao cho nữ vào hè này",
      describe:
        "Một vẻ ngoài năng động, cùng phong cách trẻ trung luôn là sự lựa chọn hàng đầu của các bạn nữ trong các dịp lễ đặc bi...",
      date: "02/07/2028",
    },
    {
      id: 3,
      bgPost:
        "https://res.cloudinary.com/ds6vqu3dy/image/upload/v1754279957/newfd3_bwdxfi.jpg",
      title: "Top 10 đôi sneaker flop nhất lịch sử",
      describe:
        "Các bản collab thực sự là một cái gì đó đặc biệt. Ngay sau khi một đôi giày, thậm chí có thể là loại tầm thường ...",
      date: "01/07/2028",
    },
    {
      id: 4,
      bgPost:
        "https://res.cloudinary.com/ds6vqu3dy/image/upload/v1754279968/newfd4_v7luue.jpg",
      title:
        "NIKE, Inc. Reports Fiscal 2028 Fourth Quarter And Full Year Results",
      describe:
        "BEAVERTON, Ore., June 27, 2028 — NIKE, Inc. (NYSE:NKE) today reported financial results for its fiscal 2028 fourth qu...",
      date: "01/07/2028",
    },
  ];
  return (
    <div className="mx-2 md:mx-0 pb-6">
      <h1 className="uppercase text-[#000] text-[20px] text-center font-bold mb-3">
        Tin tức
      </h1>
      {/* Desktop: Grid bình thường */}
      <div className="hidden md:grid md:grid-cols-4 md:gap-6 mb-40">
        {blogList.map((blogItem) => {
          const { id, title, bgPost, date, describe } = blogItem;
          return (
            <div
              key={id}
              className="min-w-[280px] w-full h-full relative cursor-pointer"
            >
              <img
                src={bgPost}
                alt=""
                height={174}
                className="object-cover h-full"
              />
              <div className="bg-[#fff] absolute left-[9px] top-[187px] w-[94%] h-[140px] p-3 shadow-xl">
                <div className="h-[90px]">
                  <h1 className="text-[16px] text-[#000] font-semibold line-clamp-2 min-h-[48px] ">
                    {title}
                  </h1>
                  <a
                    href=""
                    className="text-[14px] text-[#000] line-clamp-2 mb-2"
                  >
                    {describe}
                  </a>
                </div>
                <div className="flex justify-between pt-2 border-t-2 border-[#000]">
                  <div className="text-[#000] text-[12px] flex items-center">
                    <FaCalendarDays />
                    <span className="text-inherit ml-1">{date}</span>
                  </div>
                  <div className="text-[13px] text-[#888] hover:text-shophover">
                    <span className="text-inherit">Xem thêm</span>
                    <FaAnglesRight className="inline-block" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile: Sử dụng Carousel container có sẵn */}
      <div className="md:hidden">
        <Carousel autoSlide={false}>
          {/* Component carousel có sẵn của bạn */}
          {blogList.map((blogItem) => {
            const { id, title, bgPost, date, describe } = blogItem;
            return (
              <div
                key={id}
                className="min-w-[280px] w-full h-full relative cursor-pointer"
              >
                <img
                  src={bgPost}
                  alt=""
                  height={174}
                  className="object-cover h-full"
                />
                <div className="bg-[#fff] absolute left-[9px] top-[187px] w-[94%] p-3 shadow-xl">
                  <h1 className="text-[16px] text-[#000] font-semibold line-clamp-1">
                    {title}
                  </h1>
                  <a
                    href=""
                    className="text-[14px] text-[#000] line-clamp-2 mb-2"
                  >
                    {describe}
                  </a>
                  <div className="flex justify-between pt-2 border-t-2 border-[#000]">
                    <div className="text-[#000] text-[12px] flex items-center">
                      <FaCalendarDays />
                      <span className="text-inherit ml-1">{date}</span>
                    </div>
                    <div className="text-[13px] text-[#888] hover:text-shophover">
                      <span className="text-inherit">Xem thêm</span>
                      <FaAnglesRight className="inline-block" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};
