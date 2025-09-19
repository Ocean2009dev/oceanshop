import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface ProductItem {
  id: string;
  title: string;
  imgA: string;
  priceProduct?: string;
  discountProduct?: string;
  price?: number;
  originalPrice?: number;
}

interface SearchBoxProps {
  productList: ProductItem[];
  searchData?: string;
  className?: string;
  onProductClick?: () => void;
}

const SearchBox = ({
  productList,
  searchData,
  className,
  onProductClick,
}: SearchBoxProps) => {
  const [newProduct, setNewProduct] = useState<ProductItem[]>([]);

  useEffect(() => {
    console.log(searchData);
    if (searchData && searchData.trim() !== "") {
      const newArr = productList.filter((product) =>
        product.title.toLowerCase().includes(searchData.toLowerCase())
      );
      setNewProduct(newArr);
    } else {
      setNewProduct([]); // nếu chưa nhập thì không hiện gì
    }
  }, [searchData, productList]);
  return (
    <div
      className={`absolute ${className} w-full max-h-[600px] bg-white z-50 overflow-hidden`}
    >
      <h1 className="text-center text-2xl font-medium uppercase mb-2 p-4 ">
        kết quả tìm kiếm
      </h1>
      <div className="flex justify-between items-center p-1 bg-gray-100 mb-2 px-4">
        <p className="uppercase">Sản phẩm</p>
        <p>Xem tất cả {newProduct.length} sản phẩm</p>
      </div>
      <div className="overflow-y-auto max-h-[400px]">
        {newProduct.length > 0 ? (
          newProduct.map((product) => (
            <Link
              className="flex p-4 mb-2 cursor-pointer hover:bg-gray-50"
              key={product.id}
              to={`/product/${encodeURIComponent(product.title)}`}
              state={{ productData: product }}
              onClick={() => {
                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                onProductClick && onProductClick();
              }}
            >
              <img
                height={100}
                width={100}
                src={product.imgA}
                alt={product.title}
              />
              <div className="ml-7">
                <p className="font-medium">{product.title}</p>
                <div>
                  <span className="text-red-500 font-semibold">
                    {product.priceProduct || "4.000.000 đ"}
                  </span>
                  {product.discountProduct && (
                    <span className="text-gray-500 line-through ml-3">
                      {product.discountProduct}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="p-4 text-center text-gray-500">
            {searchData
              ? "Không tìm thấy sản phẩm nào"
              : "Nhập từ khóa để tìm kiếm"}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBox;
