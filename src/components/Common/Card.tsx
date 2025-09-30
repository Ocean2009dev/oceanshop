import type React from "react";
import { useContext } from "react";
import toast from "react-hot-toast";
import { FaCartPlus } from "react-icons/fa6";
import { CountContext } from "../../contexts/CountContext";

interface AddToCartProps {
  product: {
    id: string;
    title: string;
    priceProduct: string;
    discountProduct?: string;
    imgA: string;
  };
}

export const AddToCart: React.FC<AddToCartProps> = ({ product }) => {
  const context = useContext(CountContext);

  if (!context) {
    throw new Error("AddToCart must be used within CountProvider");
  }

  const { up } = context;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    up(product);
    toast.success("Đã thêm vào giỏ hàng!", {
      icon: "🛒",
      duration: 2000,
    });
  };

  return (
    <div className="absolute bottom-2 right-2 z-50">
      <button
        onClick={handleAddToCart}
        className="group flex relative justify-between items-center text-white rounded-[50px] p-3 shadow-[0_10px_20px_-8px_rgba(0,0,0,0.7)] transition-all duration-500 overflow-hidden cursor-pointer bg-shophover"
      >
        <span className="absolute top-[8px] right-[-87px] whitespace-nowrap transition-all duration-500 group-hover:opacity-100 group-hover:right-[31px] text-sm">
          Thêm vào giỏ
        </span>
        <span className="flex items-center justify-center transition-all duration-500 group-hover:pl-24">
          <FaCartPlus className="text-white text-xl font-bold" />
        </span>
      </button>
    </div>
  );
};

interface ProductType {
  id: string;
  title: string;
  priceProduct: string;
  discountProduct?: string;
  imgA: string;
  imgB: string;
}

interface CardProps {
  product: ProductType;
  isDiscount: boolean;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
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
        <AddToCart product={product} />
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
