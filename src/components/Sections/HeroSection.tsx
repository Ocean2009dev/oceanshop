import React from "react";
import CouponCarousel from "../Common/Carousel";

const HeroSection: React.FC = () => {
  // Danh sách ảnh hero
  return (
    <div className="w-full md:pt-6">
      <CouponCarousel autoSlide={true}>
        <img
          className="w-full "
          src="https://res.cloudinary.com/ds6vqu3dy/image/upload/v1759235582/Gemini_Generated_Image_7vwxit7vwxit7vwx_vlglo8.png"
          alt=""
        />
        <img
          className="w-full"
          src="https://res.cloudinary.com/ds6vqu3dy/image/upload/v1753844122/slider-1_9eff1f1dc2134a61a5cc3b4f619e4075_master_spzaaa.jpg"
          alt=""
        />
      </CouponCarousel>
    </div>
  );
};

export default HeroSection;
