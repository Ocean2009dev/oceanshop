import type React from "react";
import { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa6";

export const ScrollToTop: React.FC = () => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 250) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`bg-white border-2 border-black p-3 absolute bottom-20 
        ${isScroll ? "right-14" : "right-0"}  
      ${
        isScroll ? "opacity-100" : "opacity-0"
      } cursor-pointer transition-all delay-300 duration-500 ease-in-out`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <FaAngleUp className="text-xl md:text-2xl" />
    </div>
  );
};
