interface ErrorType {
  error?: string;
  handleClick?: () => void;
}
const Error = ({ error, handleClick }: ErrorType) => {
  return (
    <>
      <div className="flex items-center justify-center py-20">
        <div className="text-center">
          <p className="text-red-500 mb-4">{error}</p>
          <button
            onClick={handleClick}
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 cursor-pointer"
          >
            Thử lại
          </button>
        </div>
      </div>
    </>
  );
};

export default Error;
