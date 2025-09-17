import type React from "react";
import { useEffect, useState } from "react";
import { FaCartPlus } from "react-icons/fa6";

export const AddToCart: React.FC = () => {
  const [addedProduct, setAddedProduct] = useState(0);

  // Thêm useEffect để sync localStorage khi state thay đổi
  useEffect(() => {
    localStorage.setItem("product", String(addedProduct));
  }, [addedProduct]);

  // Function chỉ cần update state
  const handleAddedProduct = (): void => {
    setAddedProduct((product) => product + 1);
  };

  return (
    <div className="absolute bottom-2 right-2 z-50">
      <button className="group flex relative justify-between items-center text-white bg-shophover rounded-[50px] p-3 shadow-[0_10px_20px_-8px_rgba(0,0,0,0.7)] transition-all duration-500 overflow-hidden cursor-pointer">
        <span className="absolute top-[8px] right-[-87px] whitespace-nowrap transition-all duration-500 group-hover:opacity-100 group-hover:right-[31px] ">
          Thêm vào giỏ
        </span>
        <span
          className="flex items-center justify-center transition-all duration-500 group-hover:pl-24"
          onClick={handleAddedProduct}
        >
          <FaCartPlus className="text-white text-xl font-bold " />
        </span>
      </button>
    </div>
  );
};

interface Card {
  product: any;
  isDiscount: boolean;
  className?: string;
}

export const Card: React.FC<Card> = ({
  product,
  isDiscount = false,
  className,
}) => {
  return (
    <div
      key={product.id}
      className={`${className} bg-white h-full p-2 rounded-5px cursor-pointer overflow-hidden`}
    >
      <div className=" h-[240px] relative overflow-hidden group/img ">
        {isDiscount && (
          <img
            src="https://res.cloudinary.com/ds6vqu3dy/image/upload/v1753876861/frameMain.png_scqpda.webp"
            alt="frameMain"
            className="relative z-10 h-64 w-64"
          />
        )}

        <img
          src={product.imgA}
          alt={product.title.slice(1, product.title.length - 44)}
          className="group-hover/img:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0  transition-all ease-in-out duration-700 delay-700"
        />

        <img
          src={product.imgB}
          alt={product.title.slice(1, product.title.length - 44)}
          className="hidden group-hover/img:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 transition-all ease-in-out duration-700 delay-700"
        />
        <AddToCart />
      </div>

      <h3 className="text-[14px] font-medium line-clamp-2 mt-2">
        {product.title}
      </h3>

      <div className="flex items-center gap-3 mt-2 overflow-hidden">
        <span className="text-[13px] font-medium  text-red-600 truncate  max-w-[50%]">
          {product.priceProduct}
        </span>
        <span className="text-[13px] font-medium ml-3 line-through text-gray-500 truncate max-w-[50%] ">
          {product.discountProduct}
        </span>
      </div>
    </div>
  );
};
