const Loading = () => {
  return (
    <>
      <div className="flex items-center justify-center py-20">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto mb-4"></div>
          <p>Đang tải ...</p>
        </div>
      </div>
    </>
  );
};

export default Loading;
