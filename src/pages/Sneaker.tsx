import { FilterGroup } from "../components/Common/FilterGroup";

export default function Sneaker() {
  return (
    <>
      <div className="py-3">
        <h1>Trang chủ / Sneaker</h1>
      </div>

      <div className="flex items-center justify-between">
        <div className="w-1/4">
          {/* Lọc sản phẩm */}
          <FilterGroup
            title="Danh mục sản phẩm"
            options={["Sneaker", "Sandals", "Boots"]}
            onSelect={(value) => console.log("Danh mục:", value)}
            valueOptions={["256", "456", "789"]}
          />
          {/* Lọc thương hiệu */}
          <FilterGroup
            title="Thương Hiệu"
            options={["Sneaker", "Sandals", "Boots"]}
            onSelect={(value) => console.log("Danh mục:", value)}
            valueOptions={[""]}
          />
          {/* Lọc giá */}
          <div></div>
          {/* màu sắc */}
          <div></div>
          {/* kích thước */}
          <div></div>
        </div>
        <div></div>
      </div>
    </>
  );
}
