import React, { useEffect, useState } from "react";
import { FaAnglesRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { productAPI } from "../../api/product";
import { Card } from "../Common/Card";
import CouponCarousel from "../Common/Carousel";
import Error from "../Common/Error";
import Loading from "../Common/Loading";

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

      const data = await productAPI(brand);

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
        <Loading />
        <div className="md:mt-9 mt-3 flex items-center justify-center">
          <button className="outline-none flex items-center bg-white hover:bg-black hover:text-white text-black transition duration-300 ease-in-out px-5 py-2.5 cursor-pointer rounded-5px">
            <Link to={"/sneaker"}>Xem tất cả</Link>
            <FaAnglesRight className=" ml-3" />
          </button>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
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
        <Error error={error} handleClick={() => fetchProducts("")} />
        <div className="md:mt-9 mt-3 flex items-center justify-center">
          <button className="outline-none flex items-center bg-white hover:bg-black hover:text-white text-black transition duration-300 ease-in-out px-5 py-2.5 cursor-pointer rounded-5px">
            <Link to={"/sneaker"}>Xem tất cả</Link>
            <FaAnglesRight className=" ml-3" />
          </button>
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
              <Card
                product={productDiscount}
                isDiscount={true}
                className="mx-1
                "
              />
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

      const data = await productAPI(brand);

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
        <div className="flex md:items-center md:justify-between flex-col md:flex-row mb-6">
          <h1 className="text-2xl font-semibold uppercase mb-3">
            giày sneaker
          </h1>

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
        <Loading />
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="mt-6 mb-6">
        <div className="flex md:items-center md:justify-between flex-col md:flex-row mb-6">
          <h1 className="text-2xl font-semibold uppercase mb-3">
            giày sneaker
          </h1>

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
        <Error error={error} handleClick={() => fetchProducts("")} />
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
        <div className={`grid grid-cols-2 md:grid-cols-5 gap-3.5`}>
          {productDiscountList.map((product) => {
            return <Card product={product} isDiscount={false} />;
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
