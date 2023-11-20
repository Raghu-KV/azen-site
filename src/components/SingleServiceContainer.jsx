function SingleServiceContainer({ content, index }) {
  const evlNum = index % 2 !== 0;
  console.log(evlNum);

  return (
    <div
      className={`${
        evlNum
          ? " bg-gradient-to-tr from-white to-gray-200"
          : " bg-gradient-to-tl from-white to-gray-200"
      }  mx-auto rounded-lg my-5 px-10 py-10 md:w-[80%]`}
    >
      <div
        className={`flex flex-col justify-center items-center  gap-4 md:flex-row ${
          evlNum && "md:flex-row-reverse"
        } `}
      >
        <div className=" flex-grow-0">
          <img
            src={content.image}
            alt=""
            srcset=""
            className="basis-1/4 block"
          />
        </div>
        <div className=" font-poppins basis-3/4">
          <h2 className="text-center text-2xl font-bold md:text-left">
            {content.heading}
          </h2>
          <p className="text-sm mt-3 text-justify text-gray-500">
            {content.content}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SingleServiceContainer;
