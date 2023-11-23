function SingleWhoWeAre({ data, index }) {
  const even = index % 2 === 0;
  return (
    <div
      className={` p-7 rounded-3xl w-full
     lg:w-[40%]  bg-gradient-to-tl from-white to-gray-100 }`}
    >
      {data.icon}
      <h3 className="text-xl font-bold mt-3">{data.heading}</h3>
      <p className="text-sm text-gray-500">{data.content}</p>
    </div>
  );
}

export default SingleWhoWeAre;
