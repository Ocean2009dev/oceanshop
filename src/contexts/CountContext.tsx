import { createContext, useState, type PropsWithChildren } from "react";

interface AddToCartProps {
  id: string;
  title: string;
  priceProduct: string;
  discountProduct?: string;
  imgA: string;
  quantity?: number;
}

interface CountContextType {
  count: number;
  up: (product: AddToCartProps) => void;
  down: () => void;
  getCount: () => string | null;
  getData: () => AddToCartProps[];
  clearCart: () => void;
  removeItem: (id: string) => void;
}

export const CountContext = createContext<CountContextType | undefined>(
  undefined
);

export const CountProvider = ({ children }: PropsWithChildren) => {
  const [count, setCount] = useState(0);
  const [dataProduct, setdataProduct] = useState<AddToCartProps[]>([]);

  const up = (product: AddToCartProps) => {
    setdataProduct((prevData) => {
      const existingProductIndex = prevData.findIndex(
        (item) => item.id === product.id
      );

      if (existingProductIndex !== -1) {
        // Sản phẩm đã tồn tại, tăng quantity
        const updatedData = [...prevData];
        updatedData[existingProductIndex] = {
          ...updatedData[existingProductIndex],
          quantity: (updatedData[existingProductIndex].quantity || 1) + 1,
        };
        return updatedData;
      } else {
        // Sản phẩm mới, thêm vào với quantity = 1
        return [...prevData, { ...product, quantity: 1 }];
      }
    });

    setCount((prev) => prev + 1);
  };

  const down = () => setCount((prev) => Math.max(0, prev - 1));

  const getCount = () => {
    // Tính tổng số lượng sản phẩm thực tế trong giỏ hàng
    const totalQuantity = dataProduct.reduce(
      (total, item) => total + (item.quantity || 1),
      0
    );
    return String(totalQuantity);
  };

  const getData = () => dataProduct;

  const clearCart = () => {
    setdataProduct([]);
    setCount(0);
  };

  const removeItem = (id: string) => {
    const removedItem = dataProduct.find((item) => item.id === id);

    setdataProduct((prevData) => {
      return prevData.filter((item) => item.id !== id);
    });

    setCount((prev) => {
      const newCount = prev - (removedItem?.quantity || 1);
      return Math.max(0, newCount);
    });
  };

  const value: CountContextType = {
    getCount,
    getData,
    count,
    up,
    down,
    clearCart,
    removeItem,
  };

  return (
    <CountContext.Provider value={value}>{children}</CountContext.Provider>
  );
};
