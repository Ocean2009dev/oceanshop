import { FaCartPlus, FaFilter, FaX } from "react-icons/fa6";
import { FilterGroup } from "../components/Common/FilterGroup";
import { useEffect, useState } from "react";
import Container from "../components/Layout/Container";
import { productAPI } from "../api/product";

export default function Sneaker() {
  interface ProductDiscountList {
    id?: number;
    title: string;
    priceProduct: string;
    discountProduct: string;
    imgA: string;
    imgB: string;
  }

  const [isCloseFilter, setIsCloseFilter] = useState(false);
  const [productDiscountList, setProductDiscountList] = useState<
    ProductDiscountList[]
  >([]);
  const [loading, setLoading] = useState(false);

  const handleCloseFilter = (): void => {
    setIsCloseFilter(!isCloseFilter);
  };

  const getProduct = async () => {
    const product = await productAPI("");
    setProductDiscountList(product.data);
  };

  useEffect(() => {
    setLoading(true);
    try {
      getProduct();
    } catch (error) {
      console.error("Lỗi không gọi được API", error)
    } finally {
      setLoading(false);
    }
  }, []);
  return (
    <Container>
      <div className="h-full px-4 md:p-0">
        <div className="py-3">
          <h1>Trang chủ / Sneaker</h1>
        </div>

        <div className="flex flex-col md:flex-row gap-4 h-full pb-4">
          {/* Bộ lọc desktop */}
          <div className="hidden md:block w-full md:w-1/4 flex-shrink-0">
            {/* Lọc sản phẩm */}
            <FilterGroup
              className="mb-4 border border-gray-200 shadow"
              title="Danh mục sản phẩm"
              options={["Sneaker", "Nike", "Adidas"]}
              valueOptions={["{450}", "{223}", "{1423}"]}
            />
            {/* Lọc thương hiệu */}
            <FilterGroup
              className="mb-4 border border-gray-200 shadow"
              title="Thương Hiệu"
              options={["Nike", "Adidas", "Alaia Paris", "Gucci", "Khác"]}
              borderTop={true}
            />
            {/* Lọc giá */}
            <FilterGroup
              className="mb-4 border border-gray-200 shadow"
              title="Lọc giá"
              options={[
                " Dưới 50,000₫",
                " 50,000₫ - 200,000₫",
                " 200,000₫ - 400,000₫",
                " 400,000₫ - 1,000,000₫",
                " Trên 1,000,000₫",
              ]}
              borderTop={true}
            />
            {/* màu sắc */}
            <FilterGroup
              className="mb-4 border border-gray-200 shadow"
              title="Lọc Màu"
              options={["Đỏ", " Xanh", " Trắng", " Vàng", " Nâu"]}
              borderTop={true}
            />
            {/* kích thước */}
            <FilterGroup
              className="mb-4 border border-gray-200 shadow"
              title="Kích Thước"
              options={[
                "36",
                "36 2/3",
                "37 1/3",
                "38",
                "39 1/3",
                "40",
                "40 2/3",
                "41 1/3",
                "42",
                "42 2/3",
                "43 1/3",
                "44",
              ]}
              borderTop={true}
            />
          </div>
          <div className="w-full md:w-3/4 flex-1">
            <img
              className="w-full"
              src="https://res.cloudinary.com/ds6vqu3dy/image/upload/v1753844122/slider-1_9eff1f1dc2134a61a5cc3b4f619e4075_master_spzaaa.jpg"
              alt=""
            />

            <div className="pt-5">
              <div className="w-full flex items-center justify-between pb-9">
                <h1 className="hidden  md:inline-block text-2xl font-semibold">
                  Sneaker
                </h1>

                {/* Bộ lọc mobile */}
                <div className="block md:hidden  ">
                  <button
                    className="max-w-full w-48 p-2 border-1 border-black outline-0 flex items-center justify-between cursor-pointer"
                    onClick={handleCloseFilter}
                  >
                    <span>Bộ Lọc</span>
                    <FaFilter />
                  </button>

                  <div>
                    <div
                      className={`bg-white fixed  top-0 bottom-0 right-0 w-full h-full z-1000000000000 p-4 transition-all delay-300 duration-300 ease-in-out  
                      ${
                        isCloseFilter
                          ? "translate-x-0 opacity-100"
                          : "-translate-x-full opacity-0"
                      }`}
                    >
                      <div
                        className="mb-9  cursor-pointer ml-[360px] "
                        onClick={handleCloseFilter}
                      >
                        <FaX className="text-2xl" />
                      </div>
                      <div>
                        {/* Lọc sản phẩm */}
                        <FilterGroup
                          title="Danh mục sản phẩm"
                          options={["Sneaker", "Sandals", "Boots"]}
                          valueOptions={["{123}", "{123}", "{123}"]}
                        />
                        {/* Lọc thương hiệu */}
                        <FilterGroup
                          title="Thương Hiệu"
                          options={[
                            "Nike",
                            "Adidas",
                            "Alaia Paris",
                            "Gucci",
                            "Khác",
                          ]}
                          borderTop={true}
                        />
                        {/* Lọc giá */}
                        <FilterGroup
                          title="Lọc giá"
                          options={[
                            " Dưới 50,000₫",
                            " 50,000₫ - 200,000₫",
                            " 200,000₫ - 400,000₫",
                            " 400,000₫ - 1,000,000₫",
                            " Trên 1,000,000₫",
                          ]}
                          borderTop={true}
                        />
                        {/* màu sắc */}
                        <FilterGroup
                          title="Lọc Màu"
                          options={["Đỏ", " Xanh", " Trắng", " Vàng", " Nâu"]}
                          borderTop={true}
                        />
                        {/* kích thước */}
                        <FilterGroup
                          title="Kích Thước"
                          options={[
                            "36",
                            "36 2/3",
                            "37 1/3",
                            "38",
                            "39 1/3",
                            "40",
                            "40 2/3",
                            "41 1/3",
                            "42",
                            "42 2/3",
                            "43 1/3",
                            "44",
                          ]}
                          borderTop={true}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* sắp xếp sản phâm */}
                <div className="">
                  <span className="hidden md:inline-block mr-4">Sắp xếp:</span>
                  <select className="p-2 border-1 border-black outline-0">
                    <option value="manual" data-filter="&amp;sortby=manual">
                      Sản phẩm nổi bật
                    </option>
                    <option
                      value="price-ascending"
                      data-filter="&amp;sortby=(price:product=asc)"
                    >
                      Giá: Tăng dần
                    </option>
                    <option
                      value="price-descending"
                      data-filter="&amp;sortby=(price:product=desc)"
                    >
                      Giá: Giảm dần
                    </option>
                    <option
                      value="title-ascending"
                      data-filter="&amp;sortby=(title:product=asc)"
                    >
                      Tên: A-Z
                    </option>
                    <option
                      value="title-descending"
                      data-filter="&amp;sortby=(title:product=desc)"
                    >
                      Tên: Z-A
                    </option>
                    <option
                      value="created-ascending"
                      data-filter="&amp;sortby=(updated_at:product=desc)"
                    >
                      Cũ nhất
                    </option>
                    <option
                      value="created-descending"
                      data-filter="&amp;sortby=(updated_at:product=asc)"
                    >
                      Mới nhất
                    </option>
                    <option
                      value="best-selling"
                      data-filter="&amp;sortby=(sold_quantity:product=desc)"
                    >
                      Bán chạy nhất
                    </option>
                    <option
                      value="quantity-descending"
                      data-filter="&amp;sortby=(quantity:product=desc)"
                    >
                      Tồn kho: Giảm dần
                    </option>
                  </select>
                </div>
              </div>
              <div className={`grid grid-cols-2 md:grid-cols-5 gap-3.5 ${loading ? "animate-pulse" : "animate-none"}`}>
                {productDiscountList.map((product) => {
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
          </div>
        </div>
      </div>
    </Container>
  );
}
