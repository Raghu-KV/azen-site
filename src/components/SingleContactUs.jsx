import { FaArrowRight } from "react-icons/fa";
function SingleContactUs({ item }) {
  return (
    <div className="relative p-10 w-full">
      <div className="absolute drop-shadow-xl top-[3%]  bg-pirmary right-[40%] rounded-full p-5 lg:right-[43%]">
        {item.icon}
      </div>
      <div className="bg-gradient-to-tr from-white to-gray-200 white p-10 rounded-2xl text-center font-poppins">
        <h3 className="text-xl font-bold m-3">{item.type}</h3>
        <p className="text-base text-gray-500">{item.content}</p>
      </div>
      <a
        className="bg-pirmary py-2 rounded-b-2xl text-center font-bold text-white cursor-pointer block"
        href={item.link}
      >
        {item.msg} <FaArrowRight className="inline-block" />
      </a>
    </div>
  );
}

export default SingleContactUs;
