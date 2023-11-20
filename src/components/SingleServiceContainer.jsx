function SingleServiceContainer({ content, index }) {
  const evlNum = index % 2 !== 0;
  console.log(evlNum);

  return (
    <div
      className={`${
        evlNum
          ? " bg-gradient-to-r from-white to-gray-100"
          : " bg-gradient-to-l from-white to-gray-100"
      } w-[80%] mx-auto rounded-lg my-5 px-10 py-10`}
    >
      <div
        className={`flex justify-center items-center  gap-4 ${
          evlNum && "flex-row-reverse"
        }`}
      >
        <div className=" flex-grow-0">
          <img src={content.image} alt="" srcset="" className="basis-1/4" />
        </div>
        <div className=" font-poppins basis-3/4">
          <h2 className=" text-2xl font-bold">{content.heading}</h2>
          <p className="text-sm mt-3 text-justify text-gray-500">
            {content.content}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SingleServiceContainer;
