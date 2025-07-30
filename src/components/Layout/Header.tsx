import type React from "react";
import Container from "./Container";
import {
  FaAngleDown,
  FaAngleRight,
  FaBars,
  FaCartShopping,
  FaLocationDot,
  FaSistrix,
  FaUser,
} from "react-icons/fa6";

export const MenuSubAdidas: React.FC = () => {
  return (
    <>
      <li className="group/adidas hover:bg-shophover hover:text-white p-4 rounded-5px">
        <div className="flex items-center justify-between">
          <a href="">Giày Adidas</a>
          <FaAngleRight />
        </div>

        {/* Khu vực hiển thị submenu bên phải */}
        <div className="w-[70%] h-full group-hover/adidas:block hidden absolute top-2 left-99 after:absolute after:top-[-16px] after:left-[-31px] after:content-[''] after:block  after:w-10 after:h-full">
          <div className="grid grid-cols-4">
            <div>
              <h4 className="font-bold text-gray-700 mb-3">Adidas Original</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="" className="hover:text-shophover">
                    Stan Smith
                  </a>
                </li>
                <li>
                  <a href="" className="hover:text-shophover">
                    SuperStar
                  </a>
                </li>
                <li>
                  <a href="" className="hover:text-shophover">
                    Prophere
                  </a>
                </li>
                <li>
                  <a href="" className="hover:text-shophover">
                    Falcon
                  </a>
                </li>
                <li>
                  <a href="" className="hover:text-shophover">
                    Continental 80s
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-700 mb-3">
                Adidas UltraBoost
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="" className="hover:text-shophover">
                    UltraBoost 22
                  </a>
                </li>
                <li>
                  <a href="" className="hover:text-shophover">
                    UltraBoost 2021
                  </a>
                </li>
                <li>
                  <a href="" className="hover:text-shophover">
                    UltraBoost 2020
                  </a>
                </li>
                <li>
                  <a href="" className="hover:text-shophover">
                    UltraBoost 2019
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-700 mb-3">Yeezy Boost</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="" className="hover:text-shophover">
                    Yeezy 350
                  </a>
                </li>
                <li>
                  <a href="" className="hover:text-shophover">
                    Yeezy 380
                  </a>
                </li>
                <li>
                  <a href="" className="hover:text-shophover">
                    Yeezy 500
                  </a>
                </li>
                <li>
                  <a href="" className="hover:text-shophover">
                    Yeezy 700
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-700 mb-3">Adidas NMD</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="" className="hover:text-shophover">
                    NMD R1
                  </a>
                </li>
                <li>
                  <a href="" className="hover:text-shophover">
                    NMD R2
                  </a>
                </li>
                <li>
                  <a href="" className="hover:text-shophover">
                    NMD XR1
                  </a>
                </li>
                <li>
                  <a href="" className="hover:text-shophover">
                    NMD CS1
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-700 mb-3">Giày chạy Adidas</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="" className="hover:text-shophover">
                    Swift Run
                  </a>
                </li>
                <li>
                  <a href="" className="hover:text-shophover">
                    Alphabounce
                  </a>
                </li>
                <li>
                  <a href="" className="hover:text-shophover">
                    AlphaBoost
                  </a>
                </li>
                <li>
                  <a href="" className="hover:text-shophover">
                    XPLR
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-700 mb-3">Dép Adidas</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="" className="hover:text-shophover">
                    Dép kẹp
                  </a>
                </li>
                <li>
                  <a href="" className="hover:text-shophover">
                    Dép quai ngang
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};
export const MenuSubNike: React.FC = () => {
  return (
    <>
      <li className="group/nike hover:bg-shophover hover:text-white p-4 rounded-5px">
        <div className="flex items-center justify-between">
          <a href="">Giày Nike</a>
          <FaAngleRight />
        </div>

        <div className="w-[70%] h-full group-hover/nike:block hidden absolute top-2 left-99 after:absolute after:top-[-16px] after:left-[-31px] after:content-[''] after:block  after:w-10 after:h-full">
          <div className="grid grid-cols-4">
            <h4 className="font-bold text-gray-700 mb-3">Nike Air</h4>
            <h4 className="font-bold text-gray-700 mb-3">Jondan mid</h4>
            <h4 className="font-bold text-gray-700 mb-3">Jodan high</h4>
          </div>
        </div>
      </li>
    </>
  );
};
export const MenuSubSneaker: React.FC = () => {
  return (
    <div className="group-hover/item:block w-full h-[532px] hidden absolute top-[40px] left-0 border-t-black border-t-3 text-black shadow-xl bg-white z-50">
      <div className="bg-subNav p-4 w-[30%] h-full">
        <ul>
          <MenuSubAdidas />
          <MenuSubNike />
          <li className="group/jordan hover:bg-shophover hover:text-white p-4 rounded-5px">
            <div className="flex items-center justify-between">
              <a href="">Jordan Low</a>
              <FaAngleRight />
            </div>
          </li>
          <li className="group/gucci hover:bg-shophover hover:text-white p-4 rounded-5px">
            <div className="flex items-center justify-between">
              <a href="">Giày Gucci</a>
              <FaAngleRight />
            </div>
          </li>
          <li className="group/golden hover:bg-shophover hover:text-white p-4 rounded-5px">
            <div className="flex items-center justify-between">
              <a href="">Golden Goose</a>
              <FaAngleRight />
            </div>
          </li>
          <li className="group/other hover:bg-shophover hover:text-white p-4 rounded-5px">
            <div className="flex items-center justify-between">
              <a href="">Khác</a>
              <FaAngleRight />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export const Nav: React.FC = () => {
  return (
    <div className="hidden md:block shadow-header bg-white">
      <Container>
        {/* nav cha */}
        <nav className="relative">
          <ul className="flex items-center justify-around text-[16px] font-medium">
            <li className="py-2.5 px-8 cursor-pointer hover:text-shophover transition-all delay-75 duration-150 ease-in-out">
              <a href="">Trang Chủ</a>
            </li>
            <li className=" group/item py-2.5 px-8 hover:text-shophover  transition-all delay-75 duration-150 ease-in-out cursor-pointer">
              <div className="flex items-center  ">
                <a href="" className="mr-2 ">
                  Giày Sneaker
                </a>
                <FaAngleDown />
              </div>

              {/* nav sub giày sneaker */}
              <MenuSubSneaker />
            </li>
            <li className="py-2.5 px-8 cursor-pointer hover:text-shophover transition-all delay-75 duration-150 ease-in-out">
              <a href="">Liên Hệ</a>
            </li>
            <li className="py-2.5 px-8 flex items-center cursor-pointer hover:text-shophover transition-all delay-75 duration-150 ease-in-out">
              <a href="" className="mr-2">
                Tính Năng
              </a>
              <FaAngleDown />
            </li>
          </ul>
        </nav>
      </Container>
    </div>
  );
};

export const HeaderTop: React.FC = () => {
  return (
    <div className="bg-bgheader">
      <Container>
        <div className="flex items-center  md:justify-between py-2">
          {/* menu Moblie */}
          <div className="md:hidden block text-white text-2xl ml-3 mr-31 cursor-pointer">
            <FaBars />
          </div>
          {/* logo */}
          <h1 className="text-4xl text-white font-medium whitespace-nowrap">
            Ocean Shop
          </h1>

          {/* Thanh tìm kiếm mọi thứ */}
          <form
            action=""
            className="hidden w-full md:flex items-center bg-white rounded-[5px] px-0.5 ml-4"
          >
            <input
              type="text"
              placeholder="Giày..."
              className="w-full px-2.5 py-2.5 outline-hidden bg-transparent"
            />

            <div className="flex items-center bg-bg_button rounded-[5px] px-6 py-1.5 cursor-pointer">
              <FaSistrix className="text-white w-6 h-6" />
            </div>
          </form>

          {/* địa chỉ cửa hàng, đăng nhập và hiển thị số lượng giỏ hàng */}
          <div className="hidden md:flex items-center justify-between text-white whitespace-nowrap cursor-pointer">
            <div className="flex items-center ml-4">
              <FaLocationDot className="w-6 h-6" />
              <div className=" ml-4">
                <span>Hệ Thống</span>
                <div className="flex items-center">
                  <span className="mr-0.5">Cửa hàng</span>
                  <FaAngleDown />
                </div>
              </div>
            </div>
            <div className="flex items-center ml-4">
              <FaUser className="w-6 h-6" />
              <div className="ml-4">
                <span>Đăng Nhập</span>
                <div className="flex items-center">
                  <span className="mr-0.5">Đăng Ký</span>
                  <FaAngleDown />
                </div>
              </div>
            </div>
            <div className="flex items-center ml-4">
              <FaCartShopping className="w-6 h-6" />
              <div className="ml-4">Giỏ Hàng</div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

const Header: React.FC = () => {
  return (
    <>
      <HeaderTop />
      <Nav />
    </>
  );
};

export default Header;
