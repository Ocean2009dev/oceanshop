import type React from "react";
import { FaArrowPointer, FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import Container from "./Container";

const Footer: React.FC = () => {
  return (
    <footer className="bg-bgheader w-full text-white">
      <Container>
        <div className=" cursor-pointer p-3 md:p-0">
          <div className="py-1  md:py-4 flex flex-col md:flex-row items-center md:justify-between border-b-2 border-b-white ">
            <h1 className="text-[17px] font-light uppercase mb-3 md:mb-0 whitespace-nowrap  md:mr-3">
              Đăng Ký Nhận Tin
            </h1>

            <div className="w-full flex items-center  mb-3 md:mb-0 ">
              <div className="w-full flex items-center bg-white md:w-[350px] ">
                <MdOutlineEmail className="mx-2 text-[#9c9c9c]" />
                <input
                  type="text"
                  placeholder="Email"
                  className="w-full placeholder:text-[#9c9c9c] text-black text-[14px] outline-none placeholder:text-[14px] py-3"
                />
              </div>
              <div className=" flex items-center  py-3 px-4 bg-[#111] uppercase text-[14px] whitespace-nowrap ">
                <FaArrowPointer className="mr-2" />
                Đăng Ký
              </div>
            </div>

            <div className="flex cursor-pointer mb-3 md:mb-0">
              <img
                width={28}
                height={28}
                src="https://www.apkwork.com/upload/20240304/6bc260e9571c65.png"
                alt=""
                className="mr-3"
              />
              <img
                width={28}
                height={28}
                src="https://www.apkwork.com/upload/20240220/ab3ea39b70ffb4.png"
                alt=""
                className="mr-3"
              />
              <img
                width={28}
                height={28}
                src="https://images.freeimages.com/image/large-previews/b2e/x-twitter-black-isolated-logo-5694253.png?fmt=webp&h=350"
                alt=""
                className="mr-3 bg-white rounded-md"
              />
              <img
                width={28}
                height={28}
                src="https://www.apkwork.com/upload/20240219/67f1131c8ba52b.png"
                alt=""
                className="mr-3"
              />
              <img
                width={28}
                height={28}
                src="https://www.apkwork.com/upload/20240426/75956c519fc77f.jpg"
                alt=""
                className="mr-3"
              />
              <img
                width={28}
                height={28}
                src="https://www.apkwork.com/upload/20240223/b25f1f3b90de6c.png"
                alt=""
                className="mr-3"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between py-6 gap-6">
            <div className="flex flex-col md:flex-row gap-6 ">
              <div className="flex mb-8">
                <div className=" mr-6">
                  <span className="text-[17px] font-semibold">GIỚI THIỆU</span>
                  <ul className="pt-2">
                    <li className="text-[14px] py-1 text-wrap font-semibold">
                      Wd Shoes Scofield chuyên cung cấp các loại giày authentic
                      với giá cả ưu đãi nhất thị trường
                    </li>
                    <li className="flex items-center ">
                      <FaLocationDot className="font-semibold mr-1" />
                      <span className="text-[14px] py-1 text-wrap font-semibold">
                        62/8 Lê Văn Huân Phường 13 Quận Tân Bình
                      </span>
                    </li>
                    <li className="flex items-center  py-1 text-wrap group   ">
                      <FaPhone className="font-semibold mr-1" />
                      <span className="text-[14px]  font-semibold  transition duration-300 ease-in-out group-hover:text-shophover ">
                        0985449437
                      </span>
                    </li>
                    <li className="flex items-center pt-1 pb-2 group   ">
                      <MdOutlineEmail className="font-semibold mr-1" />
                      <span className="text-[14px]  font-semibold  transition duration-300 ease-in-out group-hover:text-shophover ">
                        duongoc79@gmail.com
                      </span>
                    </li>
                  </ul>
                  <img
                    width={160}
                    height={40}
                    src="https://file.hstatic.net/200000397757/file/dathongbao_48067cd02fae41b68bf0294777c39c94_compact.png"
                    alt=""
                  />
                </div>
              </div>

              <div className="mb-8">
                <span className="text-[17px] font-semibold">CHÍNH SÁCH</span>
                <ul className="list-disc pt-2 ">
                  <li className="py-1 group ">
                    <span className="text-[14px] font-semibold  group-hover:text-shophover transition duration-300 ease-in-out">
                      Hệ thống cửa hàng
                    </span>
                  </li>
                  <li className="py-1 group  ">
                    <span className="text-[14px] font-semibold  group-hover:text-shophover transition duration-300 ease-in-out">
                      Giới thiệu
                    </span>
                  </li>
                  <li className="py-1 group ">
                    <span className="text-[14px] font-semibold  group-hover:text-shophover transition duration-300 ease-in-out">
                      Chính sách đổi trả
                    </span>
                  </li>
                  <li className="py-1 group  ">
                    <span className="text-[14px] font-semibold  group-hover:text-shophover transition duration-300 ease-in-out">
                      Chính sách bảo mật
                    </span>
                  </li>
                  <li className="py-1 group  ">
                    <span className=" text-[14px] font-semibold group-hover:text-shophover transition duration-300 ease-in-out">
                      Điều khoản dịch vụ
                    </span>
                  </li>
                  <li className="py-1 group  ">
                    <span className="text-[14px] font-semibold  group-hover:text-shophover transition duration-300 ease-in-out">
                      Liên Hệ
                    </span>
                  </li>
                </ul>
              </div>
              <div className="flex  justify-between">
                <div className="">
                  <span className="text-[17px] font-semibold">HƯỚNG DẪN</span>
                  <ul className="list-disc pt-2">
                    <li className="py-1 group">
                      <span className="text-[14px] font-semibold group-hover:text-shophover transition duration-300 ease-in-out">
                        Sản phẩm nổi bật
                      </span>
                    </li>
                    <li className="py-1  group">
                      <span className="text-[14px] font-semibold group-hover:text-shophover transition duration-300 ease-in-out">
                        Tất cả sản phẩm
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-6 md:mt-0">
              <span className="text-2xl font-semibold">FANPAGE CHÚNG TÔI</span>
            </div>
          </div>
        </div>
      </Container>
      <div className="text-center py-3 bg-[#111] ">
        © Copyright 2024 By
        <a
          href="https://www.facebook.com/OC2009"
          target="_blank"
          className="mx-2"
        >
          Poseidon
        </a>
        GitHub to
        <a
          href="https://github.com/Poseidon-go"
          target="_blank"
          className="mx-2"
        >
          Poseidon-go
        </a>
      </div>
    </footer>
  );
};

export default Footer;
