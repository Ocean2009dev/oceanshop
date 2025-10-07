import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { FaCalendarDays, FaArrowLeft, FaShare, FaEye } from "react-icons/fa6";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import Container from "../components/Layout/Container";

interface NewsItem {
  id: number;
  bgPost: string;
  title: string;
  describe: string;
  content: string;
  date: string;
  category: string;
  author: string;
  views: number;
  tags: string[];
}

// Mock data - trong thực tế sẽ fetch từ API
const newsData: NewsItem[] = [
  {
    id: 1,
    bgPost:
      "https://res.cloudinary.com/ds6vqu3dy/image/upload/v1754279957/newfd1_qvd3xw.jpg",
    title:
      "Legit check : Hướng dẫn cách phân biệt Air Jordan 1 'Volt Gold' Real và Fake",
    describe:
      "Bạn đang cố gắng tìm hiểu cách phân biệt đôi Air Jordan 1 phối màu Volt Gold của Nike là thật hay giả?",
    content: `
      <h2>Giới thiệu về Air Jordan 1 'Volt Gold'</h2>
      <p>Air Jordan 1 'Volt Gold' là một trong những phiên bản đặc biệt và được yêu thích nhất của dòng Air Jordan 1. Với thiết kế độc đáo và màu sắc bắt mắt, đôi giày này đã trở thành mục tiêu của nhiều collector và sneakerhead trên toàn thế giới.</p>

      <h3>Nội dung bài viết (Mục lục):</h3>
      <ol>
        <li>So sánh tag lưỡi gà bên ngoài Air Jordan 1 'Volt Gold' real và fake</li>
        <li>Kiểm tra đúng thiết kế của Air Jordan 1 'Volt Gold'</li>
        <li>Nhìn vào sự khác nhau của mũi giày</li>
        <li>Kiểm tra tag size bên trong giày</li>
        <li>Kiểm tra logo wings</li>
        <li>Kiểm tra logo swoosh</li>
        <li>Kiểm tra lỗ dây ở mũi giày</li>
        <li>Kiểm tra đường khâu trên đế</li>
        <li>So sánh Real vs Fake qua đế giày</li>
        <li>So sánh hộp giày</li>
      </ol>

      <h3>Kết luận</h3>
      <p>Hãy luôn mua từ những nguồn uy tín để đảm bảo bạn sở hữu sản phẩm chính hãng, tránh hàng giả kém chất lượng.</p>
    `,
    date: "02/07/2028",
    category: "legit-check",
    author: "Admin OceanShop",
    views: 1250,
    tags: ["Air Jordan 1", "Legit Check", "Nike", "Sneaker Authentication"],
  },
  {
    id: 2,
    bgPost:
      "https://res.cloudinary.com/ds6vqu3dy/image/upload/v1754279957/newfd2_nn40lb.jpg",
    title: "Top 10 đôi giày thể thao cho nữ vào hè này",
    describe:
      "Một vẻ ngoài năng động, cùng phong cách trẻ trung luôn là sự lựa chọn hàng đầu của các bạn nữ.",
    content: `
      <h2>Xu hướng giày thể thao nữ hè 2028</h2>
      <p>Mùa hè 2028 mang đến nhiều xu hướng thú vị trong thế giới giày thể thao nữ. Từ những thiết kế tối giản đến những màu sắc rực rỡ, hãy cùng khám phá top 10 đôi giày hot nhất.</p>

      <h3>1. Nike Air Force 1 Shadow</h3>
      <p>Với thiết kế độc đáo và phá cách, Air Force 1 Shadow mang đến vẻ ngoài năng động và cá tính cho phái đẹp.</p>

      <h3>2. Adidas Stan Smith</h3>
      <p>Một biểu tượng vượt thời gian, Stan Smith vẫn giữ vững vị thế trong lòng các tín đồ thời trang.</p>

      <h3>Kết luận</h3>
      <p>Với những đôi sneaker này, bạn có thể dễ dàng phối cùng váy, quần jean hay quần short cho mọi dịp.</p>
    `,
    date: "02/07/2028",
    category: "fashion",
    author: "Fashion Team",
    views: 890,
    tags: ["Giày nữ", "Thời trang", "Hè 2028", "Sneaker"],
  },
  {
    id: 3,
    bgPost:
      "https://res.cloudinary.com/ds6vqu3dy/image/upload/v1754279957/newfd3_bwdxfi.jpg",
    title: "Top 10 đôi sneaker flop nhất lịch sử",
    describe:
      "Không phải mọi đôi collab đều thành công. Dưới đây là danh sách những đôi sneaker từng bị xem là 'flop' nhất trong giới giày.",
    content: `
      <h2>Những đôi sneaker thất bại đình đám</h2>
      <p>Dù được hậu thuẫn bởi những thương hiệu lớn hay nghệ sĩ nổi tiếng, không phải mọi dự án collab đều mang lại thành công. Dưới đây là 10 đôi giày từng khiến giới sneakerhead thất vọng.</p>

      <h3>1. Adidas x Rick Owens Runner (2014)</h3>
      <p>Thiết kế quá dị khiến nhiều người ngại mang ra đường, dù giá retail khá cao.</p>

      <h3>2. Nike Air Foamposite One “All-Star Galaxy Restock”</h3>
      <p>Đợt restock thất bại nặng nề vì hype đã qua đi. Thị trường thứ cấp giảm mạnh.</p>

      <h3>Kết luận</h3>
      <p>Thành công trong thế giới sneaker không chỉ đến từ tên tuổi, mà còn phụ thuộc vào cảm xúc và nhu cầu thực của cộng đồng.</p>
    `,
    date: "01/07/2028",
    category: "review",
    author: "Sneaker Review Team",
    views: 760,
    tags: ["Sneaker History", "Flop", "Review", "Adidas", "Nike"],
  },
  {
    id: 4,
    bgPost:
      "https://res.cloudinary.com/ds6vqu3dy/image/upload/v1754279968/newfd4_v7luue.jpg",
    title:
      "NIKE, Inc. Reports Fiscal 2028 Fourth Quarter And Full Year Results",
    describe:
      "BEAVERTON, Ore., June 27, 2028 — NIKE, Inc. today reported financial results for its fiscal 2028 fourth quarter and full year.",
    content: `
      <h2>Báo cáo tài chính NIKE năm tài chính 2028</h2>
      <p>Theo báo cáo mới nhất, doanh thu quý 4 của NIKE đạt 12,2 tỷ USD, tăng nhẹ so với cùng kỳ năm trước. Mảng Digital và Jordan Brand tiếp tục là động lực chính thúc đẩy tăng trưởng.</p>

      <h3>Các điểm nổi bật:</h3>
      <ul>
        <li>Doanh thu cả năm đạt 49,9 tỷ USD.</li>
        <li>Lợi nhuận ròng tăng 7% so với năm 2027.</li>
        <li>Chiến lược phát triển bền vững được ưu tiên với hơn 70% vật liệu tái chế trong sản phẩm.</li>
      </ul>

      <h3>Kết luận</h3>
      <p>NIKE tiếp tục khẳng định vị thế dẫn đầu trong ngành thời trang thể thao toàn cầu, nhờ đổi mới công nghệ và định hướng phát triển bền vững.</p>
    `,
    date: "01/07/2028",
    category: "business",
    author: "Ocean Business News",
    views: 1430,
    tags: ["Nike", "Finance", "Business Report", "Sustainability"],
  },
  {
    id: 5,
    bgPost:
      "https://res.cloudinary.com/ds6vqu3dy/image/upload/v1754279957/newfd1_qvd3xw.jpg",
    title: "Xu hướng sneaker 2028: Những gì bạn cần biết",
    describe:
      "Năm 2028 hứa hẹn mang đến nhiều xu hướng mới: từ thiết kế retro đến công nghệ đột phá.",
    content: `
      <h2>Xu hướng nổi bật năm 2028</h2>
      <p>Năm 2028, thế giới sneaker chứng kiến sự quay lại của phong cách retro cùng sự bùng nổ của vật liệu thân thiện môi trường. Dưới đây là một số xu hướng đáng chú ý:</p>

      <h3>1. Sự trở lại của phong cách cổ điển</h3>
      <p>Các mẫu giày như Nike Dunk, New Balance 550 hay Adidas Samba đang tiếp tục thống trị thị trường.</p>

      <h3>2. Công nghệ thân thiện môi trường</h3>
      <p>Nhiều thương hiệu như Nike, Adidas, On Running tập trung vào vật liệu tái chế và năng lượng xanh.</p>

      <h3>Kết luận</h3>
      <p>Sneaker không chỉ là phụ kiện thời trang, mà còn là biểu tượng của lối sống hiện đại, năng động và ý thức hơn về môi trường.</p>
    `,
    date: "30/06/2028",
    category: "fashion",
    author: "Sneaker Trends Vietnam",
    views: 970,
    tags: ["Xu hướng", "Sneaker 2028", "Retro", "Eco Material"],
  },
  {
    id: 6,
    bgPost:
      "https://res.cloudinary.com/ds6vqu3dy/image/upload/v1754279957/newfd2_nn40lb.jpg",
    title: "Cách bảo quản giày sneaker đúng cách",
    describe:
      "Hướng dẫn chi tiết giúp bạn giữ đôi giày luôn như mới dù sử dụng thường xuyên.",
    content: `
      <h2>Tại sao nên bảo quản sneaker đúng cách?</h2>
      <p>Giày sneaker là món đồ không thể thiếu của mọi tín đồ thời trang. Tuy nhiên, việc bảo quản sai cách có thể khiến giày xuống cấp nhanh chóng. Dưới đây là các mẹo giúp giày luôn bền đẹp.</p>

      <h3>1. Làm sạch thường xuyên</h3>
      <p>Sử dụng bàn chải mềm và dung dịch chuyên dụng để loại bỏ bụi bẩn sau mỗi lần sử dụng.</p>

      <h3>2. Tránh ánh nắng trực tiếp</h3>
      <p>Không phơi giày dưới nắng gắt, vì nhiệt độ cao có thể làm bong keo và phai màu da.</p>

      <h3>3. Dùng túi hút ẩm và hộp bảo quản</h3>
      <p>Giúp ngăn nấm mốc và giữ form giày tốt hơn.</p>

      <h3>Kết luận</h3>
      <p>Một chút cẩn thận mỗi ngày sẽ giúp bạn giữ đôi sneaker yêu thích luôn mới, kéo dài tuổi thọ và giá trị của chúng.</p>
    `,
    date: "29/06/2028",
    category: "tips",
    author: "Care Team OceanShop",
    views: 780,
    tags: ["Sneaker Care", "Mẹo giày", "Bảo quản", "Tips"],
  },
];

export default function NewsDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [newsItem, setNewsItem] = useState<NewsItem | null>(null);
  const [relatedNews, setRelatedNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    if (id) {
      const news = newsData.find((item) => item.id === parseInt(id));
      setNewsItem(news || null);

      // Get related news (same category, different id)
      if (news) {
        const related = newsData
          .filter(
            (item) => item.category === news.category && item.id !== news.id
          )
          .slice(0, 3);
        setRelatedNews(related);
      }
    }
  }, [id]);

  if (!newsItem) {
    return (
      <Container>
        <div className="h-full px-4 md:p-0 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Không tìm thấy bài viết</h1>
            <Link to="/news" className="text-blue-600 hover:underline">
              Quay lại trang tin tức
            </Link>
          </div>
        </div>
      </Container>
    );
  }

  const categories = {
    "legit-check": "Legit Check",
    fashion: "Thời trang",
    review: "Đánh giá",
    business: "Kinh doanh",
    tips: "Mẹo hay",
  };

  return (
    <Container>
      <div className="h-full px-4 md:p-0">
        {/* Breadcrumb */}
        <div className="py-3">
          <nav className="text-sm">
            <Link to="/" className="hover:text-shophover">
              Trang chủ
            </Link>
            <span className="mx-2">/</span>
            <Link to="/news" className="hover:text-shophover">
              Tin tức
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-500">
              {categories[newsItem.category as keyof typeof categories]}
            </span>
          </nav>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 pb-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Back Button */}
            <button
              onClick={() => navigate(-1)}
              className="flex items-center text-gray-600 hover:text-shophover mb-4 transition-colors"
            >
              <FaArrowLeft className="mr-2" />
              Quay lại
            </button>

            {/* Article Header */}
            <article className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={newsItem.bgPost}
                alt={newsItem.title}
                className="w-full h-64 md:h-80 object-cover"
              />

              <div className="p-6">
                {/* Category & Meta */}
                <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600">
                  <span className="bg-black text-white px-3 py-1 rounded">
                    {categories[newsItem.category as keyof typeof categories]}
                  </span>
                  <div className="flex items-center">
                    <FaCalendarDays className="mr-1" />
                    {newsItem.date}
                  </div>
                  <div className="flex items-center">
                    <FaEye className="mr-1" />
                    {newsItem.views.toLocaleString()} lượt xem
                  </div>
                  <span>Tác giả: {newsItem.author}</span>
                </div>

                {/* Title */}
                <h1 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                  {newsItem.title}
                </h1>

                {/* Description */}
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {newsItem.describe}
                </p>

                {/* Share Buttons */}
                <div className="flex items-center gap-4 mb-6 pb-6 border-b">
                  <span className="text-gray-600">Chia sẻ:</span>
                  <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                    <FaFacebook />
                    Facebook
                  </button>
                  <button className="flex items-center gap-2 bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500 transition-colors">
                    <FaTwitter />
                    Twitter
                  </button>
                  <button className="flex items-center gap-2 bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors">
                    <FaShare />
                    Sao chép link
                  </button>
                </div>

                {/* Content */}
                <div
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: newsItem.content }}
                />

                {/* Tags */}
                <div className="mt-8 pt-6 border-t">
                  <h3 className="text-lg font-semibold mb-3">Tags:</h3>
                  <div className="flex flex-wrap gap-2">
                    {newsItem.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 cursor-pointer"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            {/* Related Articles */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <h3 className="text-xl font-bold mb-4">Bài viết liên quan</h3>
              <div className="space-y-4">
                {relatedNews.map((item) => (
                  <Link
                    key={item.id}
                    to={`/news/${item.id}`}
                    className="flex gap-3 hover:bg-gray-50 p-2 rounded transition-colors"
                  >
                    <img
                      src={item.bgPost}
                      alt={item.title}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm line-clamp-2 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-500">{item.date}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Liên kết nhanh</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/sneaker"
                    className="text-gray-600 hover:text-shophover transition-colors"
                  >
                    Sản phẩm
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-600 hover:text-shophover transition-colors"
                  >
                    Liên hệ
                  </Link>
                </li>
                <li>
                  <Link
                    to="/news"
                    className="text-gray-600 hover:text-shophover transition-colors"
                  >
                    Tất cả tin tức
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
