import { Link } from "react-router-dom";
import Container from "../components/Layout/Container";

export default function Features() {
  return (
    <Container>
      <div className="h-full px-4 md:p-0">
        <div className="py-3">
          <h1>Trang chủ / Tính Năng</h1>
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
            <h1 className="text-2xl font-medium  uppercase mb-4">Giới thiệu</h1>

            <div>
              <p className="mb-4">
                Trang giới thiệu giúp khách hàng hiểu rõ hơn về cửa hàng của
                bạn. Hãy cung cấp thông tin cụ thể về việc kinh doanh, về cửa
                hàng, thông tin liên hệ. Điều này sẽ giúp khách hàng cảm thấy
                tin tưởng khi mua hàng trên website của bạn.
              </p>

              <ul className="list-disc ml-6 mb-6">
                <li>Bạn là ai</li>
                <li>Giá trị kinh doanh của bạn là gì</li>
                <li>Địa chỉ cửa hàng</li>
                <li>Bạn đã kinh doanh trong ngành hàng này bao lâu rồi</li>
                <li>Đội ngũ của bạn gồm những ai</li>
                <li>Thông tin liên hệ</li>
                <li>Liên kết đến các trang mạng xã hội (Twitter, Facebook)</li>
              </ul>

              <p>
                Bạn có thể chỉnh sửa hoặc xoá bài viết này tại{" "}
                <a href="">đây</a>
                hoặc thêm những bài viết mới trong phần quản lý{" "}
                <a href="">Trang nội dung</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
