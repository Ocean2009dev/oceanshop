import type React from "react";
import { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa6";

export const ScrollToTop: React.FC = () => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
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
      className={`bg-white border-2 border-black p-3 fixed  top-192 
      ${isScroll ? "opacity-100" : "opacity-0"}
       ${
         isScroll ? "right-10" : "right-0"
       } cursor-pointer transition-all delay-300 duration-300 ease-in-out z-10000000000000`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <FaAngleUp className="text-xl md:text-2xl" />
    </div>
  );
};
