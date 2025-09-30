import React, { createContext, useState, type PropsWithChildren } from "react";

interface CountContextType {
  count: number;
  up: () => void;
  down: () => void;
  getCount: () => void;
  getData: () => void;
}

interface AddToCartProps {
  id: string;
  title: string;
  priceProduct: string;
  discountProduct?: string;
  imgA: string;
}

export const CountContext = createContext<CountContextType | undefined>(
  undefined
);

export const CountProvider = ({ children }: PropsWithChildren) => {
  const [count, setCount] = useState(0);
  const [dataProduct, setdataProduct] = useState([]);
  const up = (product: AddToCartProps) =>
    setCount((prev) => {
      setdataProduct([...dataProduct, product]);
      const newCount = prev + 1;
      localStorage.setItem("count", String(newCount));
      return newCount;
    });
  const down = () =>
    setCount((prev) => {
      const newCount = prev - 1;
      localStorage.setItem("count", String(newCount));
      return newCount;
    });

  const getCount = () => localStorage.getItem("count");

  const getData = () => dataProduct;

  const value: CountContextType = {
    getCount,
    getData,
    count,
    up,
    down,
  };

  return (
    <CountContext.Provider value={value}>{children}</CountContext.Provider>
  );
};
