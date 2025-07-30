import React from "react";
import CouponCarousel from "../Common/Carousel";

const HeroSection: React.FC = () => {
  // Danh sách ảnh hero
  return (
    <div className="w-full pt-6">
      <CouponCarousel autoSlide={true}>
        <img
          className="w-full"
          src="https://res.cloudinary.com/ds6vqu3dy/image/upload/v1753844123/slider-2_0521f8e897684645afb606cebb3d0716_master_f8hhps.jpg"
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
