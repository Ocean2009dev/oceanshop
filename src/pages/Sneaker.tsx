import { FilterGroup } from "../components/Common/FilterGroup";

export default function Sneaker() {
  return (
    <div className="px-4 md:p-0">
      <div className="py-3">
        <h1>Trang chủ / Sneaker</h1>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between h-full scroll-auto">
        <div className="w-full flex-col md:w-1/4 h-screen flex md:block">
          {/* Lọc sản phẩm */}
          <FilterGroup
            title="Danh mục sản phẩm"
            options={["Sneaker", "Sandals", "Boots"]}
            onSelect={(value) => console.log("Danh mục:", value)}
            valueOptions={["{123}", "{123}", "{123}"]}
          />
          {/* Lọc thương hiệu */}
          <FilterGroup
            title="Thương Hiệu"
            options={["Nike", "Adidas", "Alaia Paris", "Gucci", "Khác"]}
            onSelect={(value) => console.log("Danh mục:", value)}
            borderTop={true}
          />
          {/* Lọc giá */}
          <FilterGroup
            title="Lọc giá"
            options={[
              " Dưới 50,000₫",
              " 50,000₫ - 200,000₫",
              " 200,000₫ - 400,000₫",
              " 400,000₫ - 1,000,000₫",
              " Trên 1,000,000₫",
            ]}
            onSelect={(value) => console.log("Danh mục:", value)}
            borderTop={true}
          />
          {/* màu sắc */}
          <div></div>
          {/* kích thước */}
          <div></div>
        </div>
        <div className="w-3/4 h-screen px-4">
          <img
            className="w-full hidden md:block"
            src="https://res.cloudinary.com/ds6vqu3dy/image/upload/v1753844122/slider-1_9eff1f1dc2134a61a5cc3b4f619e4075_master_spzaaa.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
