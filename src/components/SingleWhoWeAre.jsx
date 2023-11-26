import { motion } from "framer-motion";

function SingleWhoWeAre({ data, index }) {
  const even = index % 2 === 0;
  return (
    <motion.div
      className={` p-7 rounded-3xl w-full cursor-default
     lg:w-[40%]  bg-gradient-to-tl from-white to-gray-100 }`}
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      whileHover={{ scale: 1.05 }}
    >
      {data.icon}
      <h3 className="text-xl font-bold mt-3">{data.heading}</h3>
      <p className="text-sm text-gray-500">{data.content}</p>
    </motion.div>
  );
}

export default SingleWhoWeAre;
