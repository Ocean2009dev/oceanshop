import { FaFilter, FaX } from "react-icons/fa6";
import { FilterGroup } from "../components/Common/FilterGroup";
import { useEffect, useState } from "react";
import Container from "../components/Layout/Container";
import { productAPI } from "../api/product";
import Loading from "../components/Common/Loading";
import { Card } from "../components/Common/Card";

export default function Sneaker() {
  interface ProductDiscountList {
    id?: number;
    title: string;
    priceProduct: string;
    discountProduct: string;
    imgA: string;
    imgB: string;
    brand?: string;
  }

  const [isCloseFilter, setIsCloseFilter] = useState(false);
  const [productDiscountList, setProductDiscountList] = useState<
    ProductDiscountList[]
  >([]);
  const [filteredProducts, setFilteredProducts] = useState<
    ProductDiscountList[]
  >([]);
  const [loading, setLoading] = useState(false);
  const [sortBy, setSortBy] = useState("manual");

  // Filter states
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>("");

  const handleCloseFilter = (): void => {
    setIsCloseFilter(!isCloseFilter);
  };

  const getProduct = async () => {
    try {
      setLoading(true);
      const product = await productAPI("");
      setProductDiscountList(product.data);
      setFilteredProducts(product.data);
    } catch (error) {
      console.error("Lỗi không gọi được API", error);
    } finally {
      setLoading(false);
    }
  };

  // Convert price string to number for comparison
  const convertPriceToNumber = (priceStr: string): number => {
    return Number(priceStr.replace(/[₫,]/g, ""));
  };

  // Filter products based on selected filters
  const applyFilters = () => {
    let filtered = [...productDiscountList];

    // Filter by brand
    if (selectedBrands.length > 0) {
      filtered = filtered.filter((product) =>
        selectedBrands.some(
          (brand) =>
            product.title.toLowerCase().includes(brand.toLowerCase()) ||
            product.brand?.toLowerCase().includes(brand.toLowerCase())
        )
      );
    }

    // Filter by price range
    if (selectedPriceRange) {
      filtered = filtered.filter((product) => {
        const price = convertPriceToNumber(product.priceProduct);
        switch (selectedPriceRange) {
          case "under-50k":
            return price < 50000;
          case "50k-200k":
            return price >= 50000 && price <= 200000;
          case "200k-400k":
            return price >= 200000 && price <= 400000;
          case "400k-1m":
            return price >= 400000 && price <= 1000000;
          case "over-1m":
            return price > 1000000;
          default:
            return true;
        }
      });
    }

    // Apply sorting
    switch (sortBy) {
      case "price-ascending":
        filtered.sort(
          (a, b) =>
            convertPriceToNumber(a.priceProduct) -
            convertPriceToNumber(b.priceProduct)
        );
        break;
      case "price-descending":
        filtered.sort(
          (a, b) =>
            convertPriceToNumber(b.priceProduct) -
            convertPriceToNumber(a.priceProduct)
        );
        break;
      case "title-ascending":
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "title-descending":
        filtered.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        break;
    }

    setFilteredProducts(filtered);
  };

  // Handle filter changes
  const handleBrandFilter = (brands: string[]) => {
    setSelectedBrands(brands);
  };

  const handlePriceFilter = (priceRange: string) => {
    setSelectedPriceRange(priceRange);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };

  useEffect(() => {
    getProduct();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [
    productDiscountList,
    selectedBrands,
    selectedPriceRange,
    sortBy,
  ]);
  if (loading) {
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
                    <span className="hidden md:inline-block mr-4">
                      Sắp xếp:
                    </span>
                    <select
                      className="p-2 border-1 border-black outline-0"
                      value={sortBy}
                      onChange={handleSortChange}
                    >
                      <option value="manual">Sản phẩm nổi bật</option>
                      <option value="price-ascending">Giá: Tăng dần</option>
                      <option value="price-descending">Giá: Giảm dần</option>
                      <option value="title-ascending">Tên: A-Z</option>
                      <option value="title-descending">Tên: Z-A</option>
                      <option value="created-ascending">Cũ nhất</option>
                      <option value="created-descending">Mới nhất</option>
                      <option value="best-selling">Bán chạy nhất</option>
                      <option value="quantity-descending">
                        Tồn kho: Giảm dần
                      </option>
                    </select>
                  </div>
                </div>
                <div className="">
                  <div className="">
                    <Loading />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
  return (
    <Container>
      <div className="h-full px-4 md:p-0">
        <div className="py-3">
          <h1>Trang chủ / Sneaker</h1>
        </div>

        <div className="flex flex-col md:flex-row gap-4 h-full pb-4">
          {/* Bộ lọc desktop */}
          <div className="hidden md:block w-full md:w-1/4 flex-shrink-0">
            {/* Lọc thương hiệu */}
            <FilterGroup
              className="mb-4 border border-gray-200 shadow"
              title="Thương Hiệu"
              options={["Nike", "Adidas", "Alaia Paris", "Gucci", "Khác"]}
              borderTop={true}
              multiSelect={true}
              selectedValues={selectedBrands}
              onSelect={handleBrandFilter}
            />
            {/* Lọc giá */}
            <FilterGroup
              className="mb-4 border border-gray-200 shadow"
              title="Lọc giá"
              options={[
                "Dưới 50,000₫",
                "50,000₫ - 200,000₫",
                "200,000₫ - 400,000₫",
                "400,000₫ - 1,000,000₫",
                "Trên 1,000,000₫",
              ]}
              borderTop={true}
              multiSelect={false}
              selectedValues={selectedPriceRange ? [selectedPriceRange] : []}
              onSingleSelect={(value) => {
                const priceMap: { [key: string]: string } = {
                  "Dưới 50,000₫": "under-50k",
                  "50,000₫ - 200,000₫": "50k-200k",
                  "200,000₫ - 400,000₫": "200k-400k",
                  "400,000₫ - 1,000,000₫": "400k-1m",
                  "Trên 1,000,000₫": "over-1m",
                };
                handlePriceFilter(priceMap[value] || "");
              }}
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
                          multiSelect={true}
                          selectedValues={selectedBrands}
                          onSelect={handleBrandFilter}
                        />
                        {/* Lọc giá */}
                        <FilterGroup
                          title="Lọc giá"
                          options={[
                            "Dưới 50,000₫",
                            "50,000₫ - 200,000₫",
                            "200,000₫ - 400,000₫",
                            "400,000₫ - 1,000,000₫",
                            "Trên 1,000,000₫",
                          ]}
                          borderTop={true}
                          multiSelect={false}
                          selectedValues={
                            selectedPriceRange ? [selectedPriceRange] : []
                          }
                          onSingleSelect={(value) => {
                            const priceMap: { [key: string]: string } = {
                              "Dưới 50,000₫": "under-50k",
                              "50,000₫ - 200,000₫": "50k-200k",
                              "200,000₫ - 400,000₫": "200k-400k",
                              "400,000₫ - 1,000,000₫": "400k-1m",
                              "Trên 1,000,000₫": "over-1m",
                            };
                            handlePriceFilter(priceMap[value] || "");
                          }}
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
                  <select
                    className="p-2 border-1 border-black outline-0"
                    value={sortBy}
                    onChange={handleSortChange}
                  >
                    <option value="manual">Sản phẩm nổi bật</option>
                    <option value="price-ascending">Giá: Tăng dần</option>
                    <option value="price-descending">Giá: Giảm dần</option>
                    <option value="title-ascending">Tên: A-Z</option>
                    <option value="title-descending">Tên: Z-A</option>
                    <option value="created-ascending">Cũ nhất</option>
                    <option value="created-descending">Mới nhất</option>
                    <option value="best-selling">Bán chạy nhất</option>
                    <option value="quantity-descending">
                      Tồn kho: Giảm dần
                    </option>
                  </select>
                </div>
              </div>
              <div className="mb-4">
                <p className="text-gray-600">
                  Hiển thị {filteredProducts.length} /{" "}
                  {productDiscountList.length} sản phẩm
                </p>
              </div>

              <div className={`grid grid-cols-2 md:grid-cols-4 gap-3.5`}>
                {filteredProducts.map((product) => {
                  return (
                    <Card
                      key={product.id || Math.random()}
                      product={{
                        ...product,
                        id: String(product.id || Math.random()),
                        imgB: product.imgA, // Use imgA as fallback for imgB
                      }}
                      isDiscount={false}
                    />
                  );
                })}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">
                    Không tìm thấy sản phẩm nào phù hợp với bộ lọc
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
