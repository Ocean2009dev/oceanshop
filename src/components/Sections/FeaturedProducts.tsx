import React, { useEffect, useState } from "react";
import CouponCarousel from "../Common/Carousel";
import { FaAnglesRight, FaCartPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AddToCart } from "../Common/Card";
import { productAPI } from "../../api/product";

interface ProductDiscountList {
  id?: number;
  title: string;
  brand?: string;
  priceProduct: string;
  discountProduct: string;
  imgA: string;
  imgB: string;
}
// coupon
export const CouponCard: React.FC = () => {
  const [isCopy, setIsCopy] = useState<string | null>(null);
  interface CouponList {
    id?: number;
    ship?: string;
    priceOrder?: string;
    price?: string;
    code?: string;
    date?: string;
  }
  const couponList: CouponList[] = [
    {
      id: 1,
      ship: "Miễn phí vận chuyển",
      priceOrder: "Đơn hàng từ 300k",
      price: "300k",
      code: "OCEAN300K",
      date: "HSD: 10/12/2028",
    },
    {
      id: 2,
      ship: "Giảm thêm 100k",
      priceOrder: "Đơn hàng từ 2 triệu",
      price: "100k",
      code: "OCEAN100K",
      date: "HSD: 10/12/2028",
    },
    {
      id: 3,
      ship: "Giảm thêm 15%",
      priceOrder: "Đơn hàng từ 5 triệu",
      price: "15%",
      code: "OCEAN15",
      date: "HSD: 10/12/2028",
    },
    {
      id: 4,
      ship: "Giảm thêm 30%",
      priceOrder: "Đơn hàng từ 15 triệu",
      price: "30%",
      code: "OCEAN30",
      date: "HSD: 10/12/2028",
    },
  ];

  const handleCopyCode = (code: string | undefined): void => {
    if (code) {
      navigator.clipboard.writeText(code);
      setIsCopy(code);
    }
  };
  return (
    <div className="md:grid md:grid-cols-4 gap-14 md:gap-1 pt-6 flex overflow-x-auto pb-2">
      {couponList.map((coupon) => (
        <div
          key={coupon.id}
          data-code={coupon.code}
          className="min-w-[280px] md:min-w-0 w-full shadow-lg flex items-stretch bg-white border-l-10 border-l-red-600 rounded-5px flex-shrink-0"
        >
          <div className="w-1/3  border-r-[1px] border-dashed border-[#ccc] flex justify-center items-center">
            <span className="text-2xl text-red-600 font-bold">
              {coupon.price}
            </span>
          </div>
          <div className="w-2/3 p-2 flex flex-col justify-between">
            <div>
              <span className="text-[15px] font-semibold leading-tight block">
                {coupon.ship}
              </span>
              <small className="block text-gray-600 text-[12px]">
                {coupon.priceOrder}
              </small>
            </div>
            <div className="w-full flex items-center justify-between mt-2 ">
              <div className="flex-1 whitespace-nowrap">
                <span className="text-[11px] block">
                  mã:
                  <strong className="text-[11px] font-bold">
                    {coupon.code}
                  </strong>
                </span>
                <span className="block text-[11px] text-gray-500">
                  {coupon.date}
                </span>
              </div>
              <div className="ml-1" onClick={() => handleCopyCode(coupon.code)}>
                <button
                  className={`${
                    isCopy === coupon.code ? "bg-red-600" : "bg-black"
                  } px-3 py-1 bg-black hover:bg-red-600 text-white rounded-[50px] text-[10px] cursor-pointer flex-shrink-0 whitespace-nowrap`}
                >
                  {isCopy === coupon.code ? "Đã sao chép" : "sao chép"}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const CouponTable: React.FC = () => {
  const [productDiscountList, setProductDiscountList] = useState<
    ProductDiscountList[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  // Timer
  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  // Tách fetchProducts ra ngoài để có thể gọi lại
  const fetchProducts = async (brand: string) => {
    try {
      setLoading(true);
      setError(null);
      console.log("Fetching products..."); // Debug log

      const data = await productAPI(brand);
      console.log("Products received:", data); // Debug log

      setProductDiscountList(data.data);
    } catch (err) {
      console.error("Failed to fetch products:", err);

      // Fallback data khi API fail (CORS hoặc server down)
      const fallbackData = [
        {
          id: 1,
          title:
            "Giày Nike Jordan 1 Retro High OG SP 'Utility Stash' DN4336-001",
          priceProduct: "7,929,900₫",
          discountProduct: "8,900,000₫",
          imgA: "https://res.cloudinary.com/ds6vqu3dy/image/upload/v1753876731/shoe1a_pj9stt.png",
          imgB: "https://res.cloudinary.com/ds6vqu3dy/image/upload/v1753876732/shoe1b_rtpmwz.webp",
        },
        {
          id: 2,
          title: "Giày Nike Air Jordan 1 Mid GS 'White Shadow' 554725-073",
          priceProduct: "7,573,500₫",
          discountProduct: "8,500,000₫",
          imgA: "https://res.cloudinary.com/ds6vqu3dy/image/upload/v1753876731/shoe2a_t85m61.webp",
          imgB: "https://res.cloudinary.com/ds6vqu3dy/image/upload/v1753876734/shoe2b_bzamfq.png",
        },
      ];

      setProductDiscountList(fallbackData);
      setError("⚠️ CORS Error: Lỗi Hiển thị dữ liệu mẫu.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts("nike");
    let totalSeconds = 10800; // 3 tiếng
    // call api
    const timer = setInterval(() => {
      const days = Math.floor(totalSeconds / (3600 * 24));
      const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      setDay(days);
      setHour(hours);
      setMinute(minutes);
      setSecond(seconds);

      if (totalSeconds <= 0) {
        clearInterval(timer);
      }

      totalSeconds--;
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Loading state
  if (loading) {
    return (
      <div className="mt-6 mb-6">
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto mb-4"></div>
            <p>Đang tải ...</p>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="mt-6 mb-6">
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <p className="text-red-500 mb-4">{error}</p>
            <button
              onClick={() => fetchProducts("")}
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 cursor-pointer"
            >
              Thử lại
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-6 p-4 rounded-xl bg-red-600">
      <div className="flex items-center">
        <img
          width={20}
          height={20}
          src="https://res.cloudinary.com/ds6vqu3dy/image/upload/v1753873888/flash-sale_fvktlm.png"
          alt="flash-sale"
        />
        <h1 className="text-white ml-1">SẢN PHẨM KHUYẾN MÃI</h1>

        <div className="flex ml-10">
          <div className="min-w-11 h-11 bg-white rounded-5px px-2 py-1.5 ml-3">
            <span className="whitespace-nowrap text-[11px] font-semibold block">
              {day.toString().padStart(2, "0")}
            </span>
            <span className="whitespace-nowrap text-[11px] font-semibold block">
              Ngày
            </span>
          </div>
          <div className="min-w-11 h-11 bg-white rounded-5px px-2 py-1.5 ml-3">
            <span className="whitespace-nowrap text-[11px] font-semibold block">
              {hour.toString().padStart(2, "0")}
            </span>
            <span className="whitespace-nowrap text-[11px] font-semibold block">
              Giờ
            </span>
          </div>
          <div className="min-w-11 h-11 bg-white rounded-5px px-2 py-1.5 ml-3">
            <span className="whitespace-nowrap text-[11px] font-semibold block">
              {minute.toString().padStart(2, "0")}
            </span>
            <span className="whitespace-nowrap text-[11px] font-semibold block">
              Phút
            </span>
          </div>
          <div className="min-w-11 h-11 bg-white rounded-5px px-2 py-1.5 ml-3">
            <span className="whitespace-nowrap text-[11px] font-semibold block">
              {second.toString().padStart(2, "0")}
            </span>
            <span className="whitespace-nowrap text-[11px] font-semibold block">
              Giây
            </span>
          </div>
        </div>
      </div>

      {/* các hàng giày khuyến mãi */}
      <div className="mt-3">
        <CouponCarousel perViewDesktop={5} perViewMobile={2} autoSlide={false}>
          {productDiscountList.map((productDiscount) => {
            return (
              <div
                key={productDiscount.id}
                className="bg-white h-full mx-3 p-2 rounded-5px cursor-pointer"
              >
                <div className="relative overflow-hidden group/img ">
                  <img
                    width={260}
                    height={260}
                    src="https://res.cloudinary.com/ds6vqu3dy/image/upload/v1753876861/frameMain.png_scqpda.webp"
                    alt="frameMain"
                    className="relative z-10 "
                  />

                  <img
                    src={productDiscount.imgA}
                    alt={productDiscount.title.slice(
                      1,
                      productDiscount.title.length - 44
                    )}
                    className="group--hover/img:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0  transition-all ease-in-out duration-700 delay-700"
                  />

                  <img
                    src={productDiscount.imgB}
                    alt={productDiscount.title.slice(
                      1,
                      productDiscount.title.length - 44
                    )}
                    className="hidden group-hover/img:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 transition-all ease-in-out duration-700 delay-700"
                  />
                  <AddToCart />
                </div>

                <h3 className="text-[14px] font-medium line-clamp-2 mt-2">
                  {productDiscount.title}
                </h3>

                <div className="mt-2">
                  <span className="text-[13px] font-medium  text-red-600">
                    {productDiscount.priceProduct}
                  </span>
                  <span className="text-[13px] font-medium ml-3 line-through text-gray-500">
                    {productDiscount.discountProduct}
                  </span>
                </div>
              </div>
            );
          })}
        </CouponCarousel>
      </div>

      <div className="md:mt-9 mt-3 flex items-center justify-center">
        <button className="outline-none flex items-center bg-white hover:bg-black hover:text-white text-black transition duration-300 ease-in-out px-5 py-2.5 cursor-pointer rounded-5px">
          <Link to={"/sneaker"}>Xem tất cả</Link>
          <FaAnglesRight className=" ml-3" />
        </button>
      </div>
    </div>
  );
};
export const Coupon: React.FC = () => {
  return (
    <>
      <div className="mt-6">
        <h1 className="text-2xl font-semibold pl-2 border-l-3 border-black uppercase">
          Khuyến mãi dành cho bạn
        </h1>

        <CouponCard />

        <CouponTable />
      </div>
    </>
  );
};

export const Product: React.FC = () => {
  const [productDiscountList, setProductDiscountList] = useState<
    ProductDiscountList[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [brand, setBrand] = useState<string>("");
  const [cache, setCache] = useState<Record<string, ProductDiscountList[]>>({});

  // Tách fetchProducts ra ngoài để có thể gọi lại
  const fetchProducts = async (brand: string) => {
    try {
      setLoading(true);
      setError(null);
      console.log("Fetching products..."); // Debug log

      const data = await productAPI(brand);
      console.log("Products received:", data); // Debug log

      // Backend trả về {data: [...]} nên cần extract
      const products = data.data || data;

      if (products && Array.isArray(products)) {
        setProductDiscountList(products);
        // Lưu vào cache
        setCache((prev) => ({
          ...prev,
          [brand]: products,
        }));
      } else {
        console.warn("API returned invalid data:", data);
        setError("Dữ liệu không hợp lệ");
      }
    } catch (err) {
      console.error("Failed to fetch products:", err);

      // Fallback data khi API fail (CORS hoặc server down)
      const fallbackData = [
        {
          id: 1,
          title:
            "Giày Nike Jordan 1 Retro High OG SP 'Utility Stash' DN4336-001",
          priceProduct: "7,929,900₫",
          discountProduct: "8,900,000₫",
          imgA: "https://res.cloudinary.com/ds6vqu3dy/image/upload/v1753876731/shoe1a_pj9stt.png",
          imgB: "https://res.cloudinary.com/ds6vqu3dy/image/upload/v1753876732/shoe1b_rtpmwz.webp",
        },
        {
          id: 2,
          title: "Giày Nike Air Jordan 1 Mid GS 'White Shadow' 554725-073",
          priceProduct: "7,573,500₫",
          discountProduct: "8,500,000₫",
          imgA: "https://res.cloudinary.com/ds6vqu3dy/image/upload/v1753876731/shoe2a_t85m61.webp",
          imgB: "https://res.cloudinary.com/ds6vqu3dy/image/upload/v1753876734/shoe2b_bzamfq.png",
        },
      ];

      setProductDiscountList(fallbackData);
      setError("⚠️ CORS Error: Lỗi Hiển thị dữ liệu mẫu.");
    } finally {
      setLoading(false);
    }
  };

  // call api
  useEffect(() => {
    fetchProducts("");
  }, []);

  // Loading state
  if (loading) {
    return (
      <div className="mt-6 mb-6">
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto mb-4"></div>
            <p>Đang tải ...</p>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="mt-6 mb-6">
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <p className="text-red-500 mb-4">{error}</p>
            <button
              onClick={() => fetchProducts("")}
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 cursor-pointer"
            >
              Thử lại
            </button>
          </div>
        </div>
      </div>
    );
  }

  const handleClick = async (selectedBrand: string) => {
    console.log("Click button có brand:", selectedBrand);

    // Nếu click vào button đang active thì không làm gì
    if (selectedBrand === brand) {
      console.log("Button đã active, không gọi API");
      return;
    }

    setBrand(selectedBrand);

    // Kiểm tra cache trước khi gọi API
    if (cache[selectedBrand]) {
      console.log("Sử dụng data từ cache cho brand:", selectedBrand);
      setProductDiscountList(cache[selectedBrand]);
      return;
    }

    // Gọi API nếu chưa có trong cache
    await fetchProducts(selectedBrand);
  };

  return (
    <div className="mt-6 mb-6">
      <div className="flex md:items-center md:justify-between flex-col md:flex-row mb-6">
        <h1 className="text-2xl font-semibold uppercase mb-3">giày sneaker</h1>

        {/* Filter KM giày */}
        <div className="flex gap-2.5">
          <button
            onClick={() => handleClick("")}
            className={`${
              brand === ""
                ? "bg-shophover text-white border-shophover"
                : "text-black bg-transparent border-border hover:border-shophover hover:text-shophover"
            } border-[1px] rounded-5px p-2.5 outline-none cursor-pointer transition-all duration-300`}
          >
            <span className="uppercase">Tất cả</span>
          </button>
          <button
            onClick={() => handleClick("adidas")}
            className={`${
              brand === "adidas"
                ? "bg-shophover text-white border-shophover"
                : "text-black bg-transparent border-border hover:border-shophover hover:text-shophover"
            } border-[1px] rounded-5px p-2.5 outline-none cursor-pointer transition-all duration-300`}
          >
            <span className="uppercase">Giày Adidas</span>
          </button>
          <button
            onClick={() => handleClick("nike")}
            className={`${
              brand === "nike"
                ? "bg-shophover text-white border-shophover"
                : "text-black bg-transparent border-border hover:border-shophover hover:text-shophover"
            } border-[1px] rounded-5px p-2.5 outline-none cursor-pointer transition-all duration-300`}
          >
            <span className="uppercase">Giày Nike</span>
          </button>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3.5">
          {productDiscountList.map((product) => {
            console.log(product);
            return (
              <div
                key={product.id}
                className=" w-full h-full bg-white p-2.5 cursor-pointer"
              >
                <div className="mb-4 h-[220px] relative overflow-hidden group ">
                  <img
                    width={260}
                    height={260}
                    src={product.imgA}
                    alt={product.title.slice(-40)}
                    className="group-hover:hidden object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  "
                  />
                  <img
                    width={260}
                    height={260}
                    src={product.imgB}
                    alt={product.title.slice(-40)}
                    className="hidden group-hover:block object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  "
                  />
                  <div className="absolute bottom-2 right-2 z-50">
                    <button className="group/show flex relative justify-between items-center text-white bg-shophover rounded-[50px] p-3 shadow-[0_10px_20px_-8px_rgba(0,0,0,0.7)] transition-all duration-500 overflow-hidden cursor-pointer">
                      <span className="absolute top-[8px] right-[-87px] whitespace-nowrap transition-all duration-500 group-hover/show:opacity-100 group-hover/show:right-[31px] ">
                        Thêm vào giỏ
                      </span>
                      <span className="flex items-center justify-center transition-all duration-500 group-hover/show:pl-24">
                        <FaCartPlus className="text-white text-xl font-bold " />
                      </span>
                    </button>
                  </div>
                </div>

                <div className="">
                  <p className="mb-4 line-clamp-2">{product.title}</p>
                  <span className="text-red-600 text-[13px] font-medium">
                    {product.priceProduct}
                  </span>
                  <span className="text-[13px] font-medium ml-3 line-through text-gray-500">
                    {product.discountProduct}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="md:mt-9 mt-3 flex items-center justify-center">
        <button className="outline-none flex items-center bg-white hover:bg-black hover:text-white text-black transition duration-300 ease-in-out px-5 py-2.5 cursor-pointer rounded-5px">
          <Link to={"/sneaker"}>Xem tất cả</Link>
          <FaAnglesRight className=" ml-3" />
        </button>
      </div>
    </div>
  );
};

//

export const Banner: React.FC = () => {
  return (
    <div className="pb-6">
      <img
        src="https://res.cloudinary.com/ds6vqu3dy/image/upload/v1754276362/bannerproduct_wmbjp3.webp"
        alt="banner"
        className="animate-flicker shadow-[0_0_20px_rgba(255,255,255,0.6)]"
      />
    </div>
  );
};

export const FeaturedProducts: React.FC = () => {
  return (
    <div className="mx-2 md:mx-0">
      <Coupon />
      <Product />
      <Banner />
    </div>
  );
};
