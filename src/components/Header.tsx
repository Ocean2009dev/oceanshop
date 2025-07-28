import type React from "react";
import Container from "./Container";
import {
  FaAngleDown,
  FaCartShopping,
  FaLocationDot,
  FaSistrix,
  FaUser,
} from "react-icons/fa6";

const Header: React.FC = () => {
  return (
    <div className="shadow">
      <Container>
        <div className="flex items-center">
          {/* logo */}
          <h1 className="">Ocean Shop</h1>

          <div className="flex items-center">
            {/* Thanh tìm kiếm mọi thứ */}
            <form action="" className="flex items-center">
              <input type="text" />

              <div>
                <FaSistrix />
              </div>
            </form>

            {/* Tìm kiếm cửa hàng, đăng nhập và hiển thị số lượng giỏ hàng */}
            <div>
              <div>
                <FaLocationDot />
                <div>
                  <span>Hệ Thống</span>
                  <div>
                    <span>Cửa hàng</span>
                    <FaAngleDown />
                  </div>
                </div>
              </div>
              <div>
                <FaUser />
                <div>
                  <span>Đăng Nhập</span>
                  <div>
                    <FaAngleDown />
                    <span>Đăng Ký</span>
                  </div>
                </div>
              </div>
              <div>
                <FaCartShopping />
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
