import { useState } from "react";
import { FaAnglesRight, FaCalendarDays } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import Container from "../components/Layout/Container";

interface NewsItem {
  id: number;
  bgPost: string;
  title: string;
  describe: string;
  date: string;
  category: string;
}

export default function News() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const newsList: NewsItem[] = [
    {
      id: 1,
      bgPost:
        "https://res.cloudinary.com/ds6vqu3dy/image/upload/v1754279957/newfd1_qvd3xw.jpg",
      title:
        "Legit check : Hướng dẫn cách phân biệt Air Jordan 1 'Volt Gold' Real và Fake",
      describe:
        "Bạn đang cố gắng tìm hiểu cách phân biệt đôi Air Jordan 1 phối màu Volt Gold của Nike là thật hay giả? Hãy cùng chúng tôi tìm hiểu những chi tiết quan trọng để có thể nhận biết được sản phẩm chính hãng.",
      date: "02/07/2028",
      category: "legit-check",
    },
    {
      id: 2,
      bgPost:
        "https://res.cloudinary.com/ds6vqu3dy/image/upload/v1754279957/newfd2_nn40lb.jpg",
      title: "Top 10 đôi giày thể thao cho nữ vào hè này",
      describe:
        "Một vẻ ngoài năng động, cùng phong cách trẻ trung luôn là sự lựa chọn hàng đầu của các bạn nữ trong các dịp lễ đặc biệt. Hãy cùng khám phá những đôi giày thể thao hot nhất cho mùa hè này.",
      date: "02/07/2028",
      category: "fashion",
    },
    {
      id: 3,
      bgPost:
        "https://res.cloudinary.com/ds6vqu3dy/image/upload/v1754279957/newfd3_bwdxfi.jpg",
      title: "Top 10 đôi sneaker flop nhất lịch sử",
      describe:
        "Các bản collab thực sự là một cái gì đó đặc biệt. Ngay sau khi một đôi giày, thậm chí có thể là loại tầm thường nhất, được gắn với tên của một nghệ sĩ hoặc thương hiệu nổi tiếng, nó sẽ trở nên đắt giá hơn rất nhiều.",
      date: "01/07/2028",
      category: "review",
    },
    {
      id: 4,
      bgPost:
        "https://res.cloudinary.com/ds6vqu3dy/image/upload/v1754279968/newfd4_v7luue.jpg",
      title:
        "NIKE, Inc. Reports Fiscal 2028 Fourth Quarter And Full Year Results",
      describe:
        "BEAVERTON, Ore., June 27, 2028 — NIKE, Inc. (NYSE:NKE) today reported financial results for its fiscal 2028 fourth quarter and full year ended May 31, 2028. Revenues for the fourth quarter were $12.2 billion.",
      date: "01/07/2028",
      category: "business",
    },
    {
      id: 5,
      bgPost:
        "https://res.cloudinary.com/ds6vqu3dy/image/upload/v1754279957/newfd1_qvd3xw.jpg",
      title: "Xu hướng sneaker 2028: Những gì bạn cần biết",
      describe:
        "Năm 2028 hứa hẹn sẽ mang đến nhiều xu hướng mới trong thế giới sneaker. Từ những thiết kế retro comeback đến công nghệ mới nhất, hãy cùng khám phá những điều thú vị đang chờ đợi.",
      date: "30/06/2028",
      category: "fashion",
    },
    {
      id: 6,
      bgPost:
        "https://res.cloudinary.com/ds6vqu3dy/image/upload/v1754279957/newfd2_nn40lb.jpg",
      title: "Cách bảo quản giày sneaker đúng cách",
      describe:
        "Việc bảo quản giày sneaker đúng cách không chỉ giúp giày bền đẹp mà còn duy trì được giá trị của chúng. Hãy cùng tìm hiểu những tips hữu ích để giữ đôi giày yêu thích của bạn luôn như mới.",
      date: "29/06/2028",
      category: "tips",
    },
  ];

  const categories = [
    { value: "all", label: "Tất cả" },
    { value: "legit-check", label: "Legit Check" },
    { value: "fashion", label: "Thời trang" },
    { value: "review", label: "Đánh giá" },
    { value: "business", label: "Kinh doanh" },
    { value: "tips", label: "Mẹo hay" },
  ];

  const filteredNews = newsList.filter((news) => {
    const matchesSearch = news.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || news.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Container>
      <div className="h-full px-4 md:p-0">
        {/* Breadcrumb */}
        <div className="py-3">
          <h1>
            <Link to="/" className="hover:text-shophover">
              Trang chủ
            </Link>{" "}
            / Tin tức
          </h1>
        </div>

        <div className="flex flex-col md:flex-row gap-4 h-full pb-4">
          {/* Sidebar */}
          <div className="w-full md:w-1/4 shrink-0">
            {/* Search */}
            <div className="bg-white rounded-b-md overflow-hidden mb-4">
              <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors">
                <h3 className="font-bold text-2xl text-gray-800">Tìm kiếm</h3>
              </div>
              <div className="px-4 pb-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Tìm kiếm tin tức..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md pr-10 outline-none focus:border-shophover"
                  />
                  <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-b-md overflow-hidden mb-4">
              <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors">
                <h3 className="font-bold text-2xl text-gray-800">Danh mục</h3>
              </div>
              <div className="px-4 overflow-hidden">
                <ul className="flex flex-col space-y-3 border-t border-gray-200 py-4">
                  {categories.map((category) => (
                    <li key={category.value} className="font-semibold">
                      <button
                        onClick={() => setSelectedCategory(category.value)}
                        className={`text-left hover:text-shophover transition-colors ${
                          selectedCategory === category.value
                            ? "text-shophover"
                            : ""
                        }`}
                      >
                        {category.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-b-md overflow-hidden">
              <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors">
                <h3 className="font-bold text-2xl text-gray-800">
                  Liên kết nhanh
                </h3>
              </div>
              <div className="px-4 overflow-hidden">
                <ul className="flex flex-col space-y-3 border-t border-gray-200 py-4">
                  <li className="font-semibold">
                    <Link to="/sneaker" className="hover:text-shophover">
                      Sản phẩm
                    </Link>
                  </li>
                  <li className="font-semibold">
                    <Link to="/contact" className="hover:text-shophover">
                      Liên hệ
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full md:w-3/4 flex-1 bg-white p-4">
            <h1 className="text-3xl font-bold text-center uppercase mb-6">
              Tin tức
            </h1>

            {/* News Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredNews.map((newsItem) => {
                const { id, title, bgPost, date, describe, category } =
                  newsItem;
                return (
                  <Link
                    key={id}
                    to={`/news/${id}`}
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer block"
                  >
                    <div className="relative">
                      <img
                        src={bgPost}
                        alt={title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-2 left-2">
                        <span className="bg-black text-white px-2 py-1 text-xs rounded">
                          {categories.find((cat) => cat.value === category)
                            ?.label || category}
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h2 className="text-lg font-semibold mb-2 line-clamp-2 min-h-[56px]">
                        {title}
                      </h2>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {describe}
                      </p>
                      <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                        <div className="text-gray-500 text-xs flex items-center">
                          <FaCalendarDays className="mr-1" />
                          <span>{date}</span>
                        </div>
                        <div className="text-sm text-gray-600 hover:text-shophover transition-colors">
                          <span className="mr-1">Xem thêm</span>
                          <FaAnglesRight className="inline-block" />
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* No results */}
            {filteredNews.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  Không tìm thấy tin tức nào phù hợp.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}
