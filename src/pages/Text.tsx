import { useContext } from "react";
import Container from "../components/Layout/Container";
import { CountContext } from "../contexts/CountContext";

const Text = () => {
  const context = useContext(CountContext);

  if (!context) {
    throw new Error("Text must be used within CountProvider");
  }

  const { up, down, count } = context;

  const increment = () => {
    // up function now requires a product parameter, so we'll create a dummy product
    const dummyProduct = {
      id: `dummy-${Date.now()}`,
      title: "Test Product",
      priceProduct: "100,000₫",
      imgA: "https://via.placeholder.com/150",
    };
    up(dummyProduct);
  };

  const decrement = () => {
    down();
  };

  return (
    <>
      <Container>
        <h1>Nơi này để text html : </h1>

        {/* Counter Section */}
        <div className="flex flex-col items-center gap-6 my-8 p-6 bg-gray-50 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-700">Bộ đếm</h2>

          {/* Display Counter */}
          <div className="text-4xl font-bold text-blue-600 bg-white px-6 py-3 rounded-full shadow-md min-w-[100px] text-center">
            {count}
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            {/* Decrease Button */}
            <button
              onClick={decrement}
              className="group relative px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow-lg transform transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-red-300"
            >
              <span className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 12H4"
                  />
                </svg>
                Giảm
              </span>
            </button>

            {/* Increase Button */}
            <button
              onClick={increment}
              className="group relative px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-lg transform transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-green-300"
            >
              <span className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                Tăng
              </span>
            </button>
          </div>
        </div>

        <button className="p-3 border border-black cursor-pointer">Gửi</button>
      </Container>
    </>
  );
};

export default Text;
