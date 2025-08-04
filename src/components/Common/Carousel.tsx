import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import React, { useEffect } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

type Props = {
  children: React.ReactNode;
  perViewMobile?: number;
  perViewDesktop?: number;
  autoSlide?: boolean;
  interval?: number;
  className?: string;
};

export default function CouponCarousel({
  children,
  perViewMobile = 1,
  perViewDesktop = 1,
  autoSlide = true,
  interval = 3000,
  className = "",
}: Props) {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: perViewMobile,
      spacing: 0,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: perViewDesktop, spacing: 0 },
      },
    },
  });

  useEffect(() => {
    if (!autoSlide || !instanceRef.current) return;

    const slider = instanceRef.current;
    const timer = setInterval(() => {
      slider.next();
    }, interval);

    return () => clearInterval(timer);
  }, [autoSlide, interval, instanceRef]);

  return (
    <div className="relative">
      {/* Slider container */}
      <div
        ref={sliderRef}
        className={`keen-slider overflow-hidden ${className ?? ""}`}
      >
        {React.Children.map(children, (child, i) => (
          <div key={i} className="keen-slider__slide">
            {child}
          </div>
        ))}
      </div>

      {/* Optional arrows */}
      <button
        onClick={() => instanceRef.current?.prev()}
        className="absolute top-1/2 left-2 -translate-y-1/2 z-10 text-black hover:text text-4xl hover:text-white rounded-full  cursor-pointer"
      >
        <FaAngleLeft />
      </button>
      <button
        onClick={() => instanceRef.current?.next()}
        className="absolute top-1/2 right-2 -translate-y-1/2 z-10 text-black hover:text text-4xl hover:text-white rounded-full  cursor-pointer"
      >
        <FaAngleRight />
      </button>
    </div>
  );
}
