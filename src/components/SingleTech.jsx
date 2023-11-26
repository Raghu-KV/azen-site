import { motion } from "framer-motion";
function SingleTech({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        delay: 0.1 * index,
      }}
      className="p-5 flex items-center justify-center text-gray-500 hover:text-black duration-200 rounded-xl 
    gap-2 lg:gap-3 lg:p-10"
    >
      {item.icon}
      <p className="text-center font-semibold">{item.name}</p>
    </motion.div>
  );
}

export default SingleTech;
