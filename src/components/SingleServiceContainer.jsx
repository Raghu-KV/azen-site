import { motion } from "framer-motion";
function SingleServiceContainer({ content, index }) {
  const evlNum = index % 2 !== 0;
  console.log(evlNum);

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: `${evlNum ? 10 : -10}`,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      className={`${
        evlNum
          ? " bg-gradient-to-tr from-white to-gray-200"
          : " bg-gradient-to-tl from-white to-gray-200"
      }  mx-auto rounded-lg my-5 px-10 py-10 lg:w-[80%]`}
    >
      <div
        className={`flex flex-col justify-center items-center  gap-4 lg:flex-row ${
          evlNum && "lg:flex-row-reverse"
        } `}
      >
        <div className="w-[80%] basis-1/3">
          <img src={content.image} alt="" srcset="" className=" block" />
        </div>
        <div className=" font-poppins basis-2/3">
          <h2 className="text-center text-2xl font-bold lg:text-left">
            {content.heading}
          </h2>
          <p className="text-sm mt-3 text-justify text-gray-500">
            {content.content}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default SingleServiceContainer;
