import { FaArrowPointer, FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="h-full px-4 md:p-0">
      <div className="py-3">
        <h1>Trang chủ / Liên Hệ</h1>
      </div>

      <div className="flex flex-col md:flex-row gap-4 h-full pb-4">
        <div className="w-full md:w-1/4 shrink-0">
          <div className=" bg-white  rounded-b-md overflow-hidden">
            <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors">
              <h3 className="font-bold text-2xl text-gray-800">Danh Mục</h3>
            </div>

            <div className="px-4 overflow-hidden">
              <ul className="flex flex-col space-y-3  border-t border-gray-200  py-4 ">
                <li className="font-semibold">
                  <Link to={"/"}>Sản phẩm nổi bật</Link>
                </li>
                <li className="font-semibold">
                  <Link to={"/"}>Tất cả sản phẩm</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className=" bg-white  rounded-b-md overflow-hidden">
            <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors">
              <h3 className="font-bold text-2xl text-gray-800">
                Sản phẩm bán chạy
              </h3>
            </div>

            <div className=" px-4 overflow-hidden">
              <ul className="flex flex-col space-y-3  border-t border-gray-200  py-4 ">
                <li className="font-semibold">
                  <Link to={"/sneaker"}>Nike</Link>
                </li>
                <li className="font-semibold">
                  <Link to={"/sneaker"}>Adidas</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* thông tin liên lạc */}
        <div className="w-full md:w-3/4 flex-1 bg-white p-4">
          <h1 className="text-3xl font-bold text-center uppercase mb-4">
            Liên Hệ
          </h1>

          <div className="relative w-full  h-[200px] md:h-[301px] overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.913486560752!2d106.63871717508907!3d10.804446589346044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175295a44817255%3A0x85536a4f87c2c232!2zNjIgTMOqIFbEg24gSHXDom4sIFBoxrDhu51uZyAxMywgVMOibiBCw6xuaCwgSOG7kyBDaMOtIE1pbmgsIFZpZXRuYW0!5e1!3m2!1sen!2sus!4v1754806002043!5m2!1sen!2sus"
              className="absolute top-0 left-0 w-full h-full  border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="w-full flex flex-col md:flex-row justify-between gap-8 pt-4">
            <div className="w-full">
              <h6 className="text-xl font-bold uppercase mb-4">
                gửi thắc mắc cho chúng tôi
              </h6>

              <form action="">
                <div className="flex flex-col mb-4">
                  <label htmlFor="" className="pb-2">
                    Họ và tên
                  </label>
                  <input
                    type="text"
                    placeholder="Nhập tên của bạn"
                    className="px-5 py-2.5 border border-content mb-2 outline-0 "
                  />
                </div>
                <div className="flex flex-col mb-4">
                  <label htmlFor="" className="pb-2">
                    Số điện thoại
                  </label>
                  <input
                    type="text"
                    placeholder="Nhập số điện thoại của bạn"
                    className="px-5 py-2.5 border border-content mb-2 outline-0 "
                  />
                </div>
                <div className="flex flex-col mb-4">
                  <label htmlFor="" className="pb-2">
                    Email
                  </label>
                  <input
                    type="text"
                    placeholder="Nhập Email của bạn"
                    className="px-5 py-2.5 border border-content mb-2 outline-0 "
                  />
                </div>
                <div className="flex flex-col mb-4">
                  <label htmlFor="" className="pb-2">
                    Message
                  </label>

                  <textarea
                    placeholder="Nội dung..."
                    name=""
                    id=""
                    className="px-5 py-2.5 border border-content mb-2 outline-0 resize-none"
                  ></textarea>
                </div>
                <div className="inline-flex items-center  py-3 px-4 text-white bg-[#111] uppercase text-[14px] whitespace-nowrap cursor-pointer">
                  <span className="mr-2">Gửi liên hệ</span>
                  <FaArrowPointer />
                </div>
              </form>
            </div>
            <div className="w-full">
              <h6 className="text-xl font-bold uppercase mb-4">
                thông tin liên hệ
              </h6>

              <p className="mb-2">
                OceanShop chuyên cung cấp các mẫu giày sneaker chính hãng, thời
                trang và chất lượng, đáp ứng mọi phong cách từ năng động, trẻ
                trung đến sang trọng, cá tính. Nếu bạn cần tư vấn sản phẩm, hỗ
                trợ đặt hàng hoặc giải đáp thắc mắc, hãy liên hệ với chúng tôi:
              </p>

              <ul className="mt-6">
                <li className="flex items-center ">
                  <FaLocationDot className="font-semibold mr-4 text-[18px]" />
                  <div className="flex flex-col">
                    <span>Địa chỉ</span>
                    <span className="text-[14px] py-1 text-wrap font-semibold">
                      62/8 Lê Văn Huân Phường 13 Quận Tân Bình
                    </span>
                  </div>
                </li>
                <li className="flex items-center  py-1 text-wrap group">
                  <FaPhone className="font-semibold mr-4 text-[18px]" />
                  <div className="flex flex-col cursor-pointer">
                    <span>Số điện thoại</span>
                    <span className="text-[14px]  font-semibold  transition duration-300 ease-in-out group-hover:text-shophover ">
                      0985449437
                    </span>
                  </div>
                </li>
                <li className="flex items-center pt-1 pb-2 group   ">
                  <MdOutlineEmail className="font-semibold mr-4 text-[18px]" />
                  <div className="flex flex-col cursor-pointer">
                    <span>Email</span>
                    <span className="text-[14px]  font-semibold  transition duration-300 ease-in-out group-hover:text-shophover ">
                      duongoc79@gmail.com
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
