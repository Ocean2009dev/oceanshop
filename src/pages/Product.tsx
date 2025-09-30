import type React from "react";
import Container from "../components/Layout/Container";
import { Link, useParams, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CountContext } from "../contexts/CountContext";
import toast from "react-hot-toast";

interface ProductData {
  id: string;
  title: string;
  imgA: string;
  priceProduct?: string;
  discountProduct?: string;
  price?: number;
  originalPrice?: number;
}

const Product = (): React.ReactElement => {
  const { title } = useParams<{ title: string }>();
  const location = useLocation();
  const context = useContext(CountContext);

  if (!context) {
    throw new Error("Product must be used within CountProvider");
  }

  const { up } = context;
  const [decodedTitle, setDecodedTitle] = useState<string>("");
  const [productData, setProductData] = useState<ProductData | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>("36");
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedColor, setSelectedColor] = useState<string>("Cream pink");

  // Countdown timer states
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    if (title) {
      const decoded = decodeURIComponent(title);
      setDecodedTitle(decoded);
    }

    if (location.state && location.state.productData) {
      setProductData(location.state.productData);
    }
  }, [title, location.state]);

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: Math.floor(Math.random() * 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const sizes = [
    "36",
    "36 2/3",
    "37 1/3",
    "38",
    "38 2/3",
    "39 1/3",
    "40",
    "40 2/3",
    "41 1/3",
    "42",
    "42 2/3",
    "43 1/3",
    "44",
  ];

  const handleQuantityChange = (change: number) => {
    setQuantity((prev) => Math.max(1, prev + change));
  };

  const handleAddToCart = () => {
    if (!productData) return;

    // Add multiple items based on quantity
    for (let i = 0; i < quantity; i++) {
      up({
        id: productData.id,
        title: productData.title,
        priceProduct: productData.priceProduct || "0₫",
        discountProduct: productData.discountProduct,
        imgA: productData.imgA,
      });
    }

    toast.success(`Đã thêm ${quantity} sản phẩm vào giỏ hàng!`, {
      icon: "🛒",
      duration: 2000,
    });
  };

  return (
    <>
      <Container>
        <div className="py-3">
          <h1 className="text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600">
              Trang chủ
            </Link>
            {" / "}
            <Link to="/sneaker" className="hover:text-blue-600">
              Sneaker
            </Link>
            {" / "}
            <span>{decodedTitle || "Sản phẩm"}</span>
          </h1>
        </div>

        <div className="py-4">
          {productData ? (
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Product Images */}
              <div className="space-y-4">
                <div className="relative">
                  <img
                    src={productData.imgA}
                    alt={productData.title}
                    className="w-full h-auto rounded-lg"
                  />
                  {/* Navigation arrows */}
                  <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>

                {/* Thumbnail */}
                <div className="flex space-x-2">
                  <img
                    src={productData.imgA}
                    alt="thumbnail"
                    className="w-16 h-16 border-2 border-gray-300 rounded cursor-pointer hover:border-blue-500"
                  />
                </div>
              </div>

              {/* Product Details */}
              <div className="space-y-6">
                {/* Title and Badge */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h1 className="text-2xl font-bold">{productData.title}</h1>
                    <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">
                      Còn Hàng
                    </span>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <span>
                      Thương hiệu:{" "}
                      <Link to="#" className="text-blue-600 hover:underline">
                        Adidas
                      </Link>
                    </span>
                    <span>|</span>
                    <span>
                      Loại:{" "}
                      <Link to="#" className="text-blue-600 hover:underline">
                        Giày Sneaker
                      </Link>
                    </span>
                    <span>|</span>
                    <span>
                      MSP: <strong>H01922</strong>
                    </span>
                    <span>|</span>
                    <span>(4.9)</span>
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-bold text-red-600">
                    {productData.priceProduct || "Liên hệ"}
                  </span>
                  {productData.discountProduct && (
                    <span className="text-lg text-gray-500 line-through">
                      {productData.discountProduct}
                    </span>
                  )}
                </div>

                {/* Countdown Timer */}
                <div className="bg-red-600 text-white p-3 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-semibold">KẾT THÚC TRONG</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="bg-white text-black px-3 py-1 rounded text-center min-w-[50px]">
                      <div className="font-bold">
                        {timeLeft.days.toString().padStart(2, "0")}
                      </div>
                      <div className="text-xs">Ngày</div>
                    </div>
                    <div className="bg-white text-black px-3 py-1 rounded text-center min-w-[50px]">
                      <div className="font-bold">
                        {timeLeft.hours.toString().padStart(2, "0")}
                      </div>
                      <div className="text-xs">Giờ</div>
                    </div>
                    <div className="bg-white text-black px-3 py-1 rounded text-center min-w-[50px]">
                      <div className="font-bold">
                        {timeLeft.minutes.toString().padStart(2, "0")}
                      </div>
                      <div className="text-xs">Phút</div>
                    </div>
                    <div className="bg-white text-black px-3 py-1 rounded text-center min-w-[50px]">
                      <div className="font-bold">
                        {timeLeft.seconds.toString().padStart(2, "0")}
                      </div>
                      <div className="text-xs">Giây</div>
                    </div>
                  </div>
                </div>

                {/* Color Selection */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-medium">Màu sắc:</span>
                    <span className="text-gray-600">{selectedColor}</span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      className={`w-10 h-10 rounded-full border-2 ${
                        selectedColor === "Cream pink"
                          ? "border-blue-500"
                          : "border-gray-300"
                      }`}
                      style={{ backgroundColor: "#F5E6D3" }}
                      onClick={() => setSelectedColor("Cream pink")}
                    />
                  </div>
                </div>

                {/* Size Selection */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-medium">Kích thước:</span>
                    <span className="text-blue-600 text-sm cursor-pointer hover:underline">
                      📏 Hướng dẫn chọn size
                    </span>
                  </div>
                  <div className="grid grid-cols-6 gap-2">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-3 py-2 border rounded text-sm ${
                          selectedSize === size
                            ? "border-blue-500 bg-blue-50 text-blue-600"
                            : "border-gray-300 hover:border-gray-400"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity and Actions */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border rounded">
                      <button
                        onClick={() => handleQuantityChange(-1)}
                        className="px-3 py-2 hover:bg-gray-100"
                      >
                        −
                      </button>
                      <span className="px-4 py-2 border-x">{quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(1)}
                        className="px-3 py-2 hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={handleAddToCart}
                      className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                    >
                      Thêm vào giỏ
                    </button>
                    <Link
                      to="/pay"
                      state={{ productData: productData }}
                      className="flex-1 bg-white border border-blue-600 text-blue-600 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors text-center block"
                    >
                      Mua ngay
                    </Link>
                  </div>
                </div>

                {/* Stock Info */}
                <div className="flex items-center gap-2 text-sm">
                  <span>📦</span>
                  <span>Còn 1 cửa hàng còn sản phẩm này</span>
                  <button className="text-blue-600 hover:underline">+</button>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold mb-4">{decodedTitle}</h2>
              <p className="text-gray-600">Đang tải thông tin sản phẩm...</p>
            </div>
          )}
        </div>
      </Container>
    </>
  );
};

export default Product;
