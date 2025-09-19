import type React from "react";
import Container from "./Container";
import {
  FaAngleDown,
  FaAngleRight,
  FaBars,
  FaCartShopping,
  FaLocationDot,
  FaPhone,
  FaSistrix,
  FaUser,
  FaX,
} from "react-icons/fa6";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SearchBox from "../Common/sreachBox";
import { productAPI } from "../../api/product";

export const MenuSubAdidas: React.FC = () => {
  return (
    <>
      <li className="group/adidas hover:bg-shophover hover:text-white p-4 rounded-5px">
        <div className="flex items-center justify-between">
          <a href="">Giày Adidas</a>
          <FaAngleRight />
        </div>

        {/* Khu vực hiển thị submenu bên phải */}
        <div className="w-[70%] h-full group-hover/adidas:block hidden absolute top-2 left-117 after:absolute after:top-[-16px] after:left-[-31px] after:content-[''] after:block  after:w-10 after:h-full">
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

        <div className="w-[70%] h-full group-hover/nike:block hidden absolute top-2 left-117 after:absolute after:top-[-16px] after:left-[-31px] after:content-[''] after:block  after:w-10 after:h-full">
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
              <Link to="/">Trang Chủ</Link>
            </li>
            <li className=" group/item py-2.5 px-8 hover:text-shophover  transition-all delay-75 duration-150 ease-in-out cursor-pointer">
              <div className="flex items-center  ">
                <Link to="/sneaker" className="mr-2 ">
                  Giày Sneaker
                </Link>
                <FaAngleDown />
              </div>

              {/* nav sub giày sneaker */}
              <MenuSubSneaker />
            </li>
            <li className="py-2.5 px-8 cursor-pointer hover:text-shophover transition-all delay-75 duration-150 ease-in-out">
              <Link to="/contact" className="mr-2 ">
                Liên hệ
              </Link>
            </li>
            <li className="py-2.5 px-8 flex items-center cursor-pointer hover:text-shophover transition-all delay-75 duration-150 ease-in-out">
              <Link to="/features" className="mr-2 ">
                Tính Năng
              </Link>
              <FaAngleDown />
            </li>
          </ul>
        </nav>
      </Container>
    </div>
  );
};

export const HeaderTop: React.FC = () => {
  interface City {
    id: number;
    type?: string;
    phoneNumber: string;
    city: string;
    district: string;
    road: string;
    nameShop: string;
  }
  const citiList: City[] = [
    {
      id: 1,
      type: "",
      phoneNumber: "0983 456 789",
      city: "Hồ Chí Minh",
      district: "Quận 10",
      road: "168 3 Tháng 2, Phường 12, Quận 10",
      nameShop: "Lucky Card CN",
    },
    {
      id: 2,
      type: "",
      phoneNumber: "0978 123 456",
      city: "Hồ Chí Minh",
      district: "Quận Bình Thạnh",
      road: "244 Điện Biên Phủ, Phường 22, Quận Bình Thạnh",
      nameShop: "Lucky Card CN",
    },
    {
      id: 3,
      type: "",
      phoneNumber: "0962 789 012",
      city: "Hồ Chí Minh",
      district: "Quận Thủ Đức",
      road: "01 Võ Văn Ngân, Phường Linh Chiểu, Quận Thủ Đức",
      nameShop: "Lucky Card CN",
    },
    {
      id: 4,
      type: "",
      phoneNumber: "0987 654 321",
      city: "Hà Nội",
      district: "Quận Hoàn Kiếm",
      road: "Số 15, Phố Hàng Đào, Phường Hàng Đào, Quận Hoàn Kiếm",
      nameShop: "Lucky Card CN",
    },
    {
      id: 5,
      type: "",
      phoneNumber: "0979 876 543",
      city: "Hà Nội",
      district: "Quận Ba Đình",
      road: "Số 120, Đường Kim Mã, Phường Kim Mã, Quận Ba Đình",
      nameShop: "Lucky Card CN",
    },
    {
      id: 6,
      type: "",
      phoneNumber: "0961 234 567",
      city: "Hà Nội",
      district: "Quận Hai Bà Trưng",
      road: "Số 220, Phố Bà Triệu, Phường Lê Đại Hành, Quận Hai Bà Trưng",
      nameShop: "Lucky Card CN",
    },
  ];

  const [cityMap, setCityMap] = useState<string>("all");
  // const [cityListMap, setcityListMap] = useState([]);

  const [showUser, setShowUser] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [menu, setMenu] = useState(false);
  const [shoes, setShoes] = useState("Bạn đang tìm kiếm gì... ?");
  const shoesList = useMemo(
    () => [
      "Bạn đang tìm giày cho người yêu...",
      "Bạn đang tìm giày cho ba mẹ...",
      "Bạn đang tìm giày cho bản thân mình...",
      "Bạn muốn giày đẹp và giá rẻ...",
      "Ocean shop là lựa chọn hợp lý đối với bạn...",
    ],
    []
  );

  const handleSearch = (): void => {
    setShowSearch(!showSearch);
    setShowLocation(false);
    setShowCart(false);
    setShowUser(false);
  };
  const handleLogin = (): void => {
    setShowUser(!showUser);
    setShowLocation(false);
    setShowCart(false);
    setShowSearch(false);
  };
  const handleCart = (): void => {
    setShowCart(!showCart);
    setShowLocation(false);
    setShowSearch(false);
    setShowUser(false);
  };
  const handleLocation = (): void => {
    setShowLocation(!showLocation);
    setShowUser(false);
    setShowCart(false);
    setShowSearch(false);
  };
  const handleModal = (): void => {
    setMenu(!menu);
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
  };

  useEffect(() => {
    fectchData("");

    const timer = setInterval(() => {
      const numberRandom = Math.floor(Math.random() * shoesList.length);
      setShoes(shoesList[numberRandom]);
    }, 3000);
    return () => clearInterval(timer);
  }, [shoesList]);

  // handle filter location
  const handleFilterLocation = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const valueTaget = e.target.value;
    setCityMap(valueTaget);
  };

  const filterMap = (raw: string) => {
    const q = raw.trim().toLowerCase();

    if (q === "" || q === "all") return citiList;

    return citiList.filter((item) => {
      const district = item.district?.trim().toLowerCase() ?? "";
      const city = item.city?.trim().toLowerCase() ?? "";
      return district === q || city === q;
    });
  };
  const [data, SetData] = useState<unknown[]>([]);
  const [searchData, setSearchData] = useState("");
  const [searchMoblieData, setSearchMoblieData] = useState("");

  const fectchData = async (brand: string = "") => {
    try {
      const product = await productAPI(brand || null);
      SetData(product.data || []);
    } catch (error) {
      console.error("Không thể call API:", error);
      SetData([]);
    }
  };

  return (
    <div className="bg-bgheader">
      <Container>
        <div className="flex items-center justify-between md:justify-between py-2">
          {/* menu Moblie */}
          <div className="md:hidden block text-white text-2xl ml-3 cursor-pointer">
            <FaBars onClick={handleModal} />

            {/* nav Moblie */}
            <div
              className={`${
                menu ? "block" : "hidden"
              } px-10 py-1  bg-modal w-screen h-screen overflow-hidden fixed top-0 left-0 z-10000 delay-75 animate-menu `}
            >
              <div className="flex items-center justify-between">
                <h1 className="ml-13 text-4xl text-white font-medium whitespace-nowrap">
                  Ocean Shop
                </h1>
                <FaX onClick={handleModal} />
              </div>

              <div className="mt-6">
                <ul className="text-[16px] font-medium">
                  <li className="py-2.5  cursor-pointer hover:text-shophover transition-all delay-75 duration-150 ease-in-out">
                    <Link to="/" onClick={handleModal}>
                      Trang Chủ
                    </Link>
                  </li>
                  <li className=" group/item py-2.5  hover:text-shophover  transition-all delay-75 duration-150 ease-in-out cursor-pointer">
                    <div className="flex items-center  ">
                      <Link
                        to="/sneaker"
                        className="mr-2"
                        onClick={handleModal}
                      >
                        Giày Sneaker
                      </Link>
                      <FaAngleDown />
                    </div>
                  </li>
                  <li className="py-2.5  cursor-pointer hover:text-shophover transition-all delay-75 duration-150 ease-in-out">
                    <Link to="/contact" className="mr-2" onClick={handleModal}>
                      Liên hệ
                    </Link>
                  </li>
                  <li className="py-2.5  flex items-center cursor-pointer hover:text-shophover transition-all delay-75 duration-150 ease-in-out">
                    <Link to="/features" className="mr-2" onClick={handleModal}>
                      Tính năng
                    </Link>
                    <FaAngleDown />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* logo */}
          <h1 className="text-4xl text-white font-medium whitespace-nowrap">
            Ocean Shop
          </h1>

          {/* Thanh tìm kiếm mọi thứ */}
          <div className="relative w-full  ml-4">
            <form
              action=""
              className="hidden  md:flex items-center bg-white rounded-[5px] "
            >
              <input
                type="text"
                placeholder={shoes}
                className=" w-full px-2.5 py-2.5 outline-hidden bg-transparent"
                onChange={(e) => setSearchData(e.target.value)}
              />

              <div className="flex items-center bg-bg_button rounded-[5px] px-6 py-1.5 cursor-pointer mr-2">
                <FaSistrix className="text-white w-6 h-6" />
              </div>
            </form>
            {searchData && (
              <SearchBox
                productList={data}
                searchData={searchData}
                className="left-0 top-11"
                onProductClick={() => setSearchData("")}
              />
            )}
          </div>

          {/* địa chỉ cửa hàng, đăng nhập và hiển thị số lượng giỏ hàng */}
          <div className=" relative flex items-center justify-between text-white whitespace-nowrap cursor-pointer mr-4">
            {/* tìm kiếm mobile */}
            <div className="block md:hidden" onClick={handleSearch}>
              <FaSistrix className="text-white w-6 h-6 font-extrabold" />
            </div>

            {showSearch && (
              <div className="w-[433px] py-2.5 px-5 shadow-2xl bg-white text-black absolute top-10 left-[-284px] md:top-14 md:left-0 z-100 transform scale-100 transition duration-700 ease-in ">
                <div className="text-center pb-6 ">
                  <h1 className="text-center text-xl font-semibold uppercase border-b-2 border-b-[#ddd] pb-3 ">
                    Tìm kiếm
                  </h1>

                  <input
                    type="text"
                    placeholder={shoes}
                    className="mt-3 w-full px-4 py-2.5 outline-hidden bg-content"
                    onChange={(e) => setSearchMoblieData(e.target.value)}
                  />
                  {/* Kết quả tìm kiếm mobile */}
                  {searchMoblieData && (
                    <SearchBox
                      productList={data}
                      searchData={searchMoblieData}
                      className="left-0 top-33 px-0"
                      onProductClick={() => {
                        setSearchMoblieData("");
                        setShowSearch(false);
                      }}
                    />
                  )}
                </div>
              </div>
            )}
            {/* địa chỉ cửa hàng */}
            <div className="flex items-center ml-4 " onClick={handleLocation}>
              <FaLocationDot className="w-6 h-6" />

              <div className="hidden md:block ml-4">
                <span>Hệ Thống</span>
                <div className="flex items-center">
                  <span className="mr-0.5">Cửa hàng</span>
                  <FaAngleDown />
                </div>
              </div>
            </div>

            {showLocation && (
              <div className="w-[433px] py-2.5 px-5 shadow-2xl bg-content text-black absolute top-10 left-[-284px] md:top-14 md:left-0 z-100 transform scale-100 transition duration-700 ease-in ">
                <h1 className="text-[17px]  uppercase text-center font-semibold mb-2">
                  TÌM CỬA HÀNG GẦN BẠN
                </h1>
                <div className="flex justify-between mb-3 ">
                  <select
                    onChange={handleFilterLocation}
                    id="currency"
                    name="currency"
                    className="w-full h-full p-3 mr-1 rounded-md border-[1px] border-[#D7D7D7]  bg-white outline-none pl-2 pr-7 text-gray-500  sm:text-sm"
                  >
                    <option value={"all"}>Chọn Tỉnh/ Thành Phố</option>
                    <option value={"Hồ Chí Minh"}>Hồ Chí Minh</option>
                    <option value={"Hà Nội"}>Hà Nội</option>
                  </select>
                  <select
                    onChange={handleFilterLocation}
                    id="currency"
                    name="currency"
                    className="w-full h-full p-3 ml-1 rounded-md border-[1px] border-[#D7D7D7] bg-white outline-none pl-2 pr-7 text-gray-500  sm:text-sm"
                  >
                    <option value={"all"}>Chọn Quận/ Huyện</option>

                    {citiList.map((citiItem, index) => (
                      <option key={index} value={citiItem.district}>
                        {citiItem.district}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="h-80 overflow-y-scroll">
                  {filterMap(cityMap).map((city) => {
                    return (
                      <div
                        className="bg-white p-4 mb-2 flex flex-col gap-1 "
                        key={city.id}
                      >
                        <h1 className="text-black text-[15px] font-bold">
                          {city.city} - {city.nameShop} {city.district}
                        </h1>
                        <div>
                          <span className="w-full text-black text-[15px] font-normal break-words block whitespace-normal">
                            {city.road}
                          </span>
                          <span className="flex items-center text-black text-[15px] font-medium">
                            <FaPhone className="mr-2" />
                            {city.phoneNumber}
                          </span>
                          <span className="text-black text-[15px] font-normal">
                            Thời gian hoạt động : 9h - 21h
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* đăng nhập */}
            <div className="flex items-center ml-4" onClick={handleLogin}>
              <FaUser className="w-6 h-6" />

              <div className="hidden md:block ml-4">
                <span>Đăng Nhập</span>
                <div className="flex items-center">
                  <span className="mr-0.5">Đăng Ký</span>
                  <FaAngleDown />
                </div>
              </div>
            </div>

            {showUser && (
              <div className="w-[433px] py-2.5 px-5 shadow-2xl bg-white text-black absolute top-10 left-[-284px] md:top-14 md:left-0 z-100 transform scale-100 transition duration-700 ease-in ">
                <h1 className="text-center font-semibold  uppercase ">
                  Đăng Nhập tài khoản
                </h1>
                <p className="text-center ">Nhập email và mật khẩu của bạn:</p>

                <form action="" className="mt-4">
                  <div className="flex flex-col">
                    <input
                      type="text"
                      placeholder="Nhập Email"
                      className="px-5 py-2.5 w-full border border-content mb-2 outline-0"
                    />
                    <input
                      type="password"
                      placeholder="Nhập Mật Khẩu"
                      className="px-5 py-2.5 w-full border border-content mb-2 outline-0"
                    />
                  </div>

                  <button
                    type="submit"
                    className="px-5 py-2.5 w-full bg-black text-white mb-2 outline-0 cursor-pointer"
                    onClick={handleSubmit}
                  >
                    Đăng Nhập
                  </button>
                </form>

                <div>
                  <p className="mb-3">
                    <span>Khách hàng tạo mới? </span>
                    <Link to={"/signup"} onClick={handleLogin}>
                      Tạo tài khoản
                    </Link>
                  </p>
                  <p>
                    <span>Quên mật khẩu? </span>
                    <a href="">Khôi phục mật khẩu</a>
                  </p>
                </div>
              </div>
            )}

            {/* hiển thị số lượng giỏ hàng */}
            <div className="flex items-center ml-4" onClick={handleCart}>
              <div className="relative">
                <FaCartShopping className="w-6 h-6 " />
                <div className="bg-white text-black text-[10px] font-bold absolute -top-2 left-4 w-5 h-5 rounded-[50px] flex items-center justify-center whitespace-nowrap overflow-hidden">
                  {Number(localStorage.getItem("product")) || 0}
                </div>
              </div>
              <div className="hidden md:block ml-4">Giỏ Hàng</div>
            </div>
            {showCart && (
              <div className="w-[433px] py-2.5 px-5 shadow-2xl bg-white text-black absolute top-10 left-[-284px] md:top-14 md:left-0 z-100 transform scale-100 transition duration-700 ease-in ">
                <div className="text-center pb-6 border-b-2 border-b-[#ddd]">
                  <h1 className="text-center font-semibold uppercase ">
                    Giỏ hàng
                  </h1>

                  <div
                    id="data-cart"
                    className="flex flex-col items-center justify-center"
                  >
                    <img
                      src="https://res.cloudinary.com/ds6vqu3dy/image/upload/v1754296259/cart_zyxa8k.png"
                      alt="cart"
                    />
                    <p>Hiện chưa có sản phẩm</p>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="flex justify-between mb-6">
                    <h1 className="text-2xl font-semibold uppercase">
                      Tổng tiền
                    </h1>
                    <p className="text-2xl text-red-600">0Đ</p>
                  </div>
                  <div className="flex justify-between gap-3">
                    <button className="p-3 border-[1px] w-full outline-0 uppercase font-bold cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                      xem giỏ hàng
                    </button>
                    <button
                      className="p-3 border-[1px] w-full outline-0 uppercase font-bold cursor-pointer hover:bg-black hover:text-white"
                      onClick={handleCart}
                    >
                      <Link to={"pay"}> thanh toán</Link>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

const Header: React.FC = () => {
  return (
    <div className="fixed top-0 right-0 w-full z-999999999999">
      <HeaderTop />
      <Nav />
    </div>
  );
};

export default Header;
