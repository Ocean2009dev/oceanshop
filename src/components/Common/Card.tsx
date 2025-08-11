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
