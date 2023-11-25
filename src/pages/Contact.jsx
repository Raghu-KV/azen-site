import { FaArrowRight } from "react-icons/fa";

function Contact() {
  return (
    <div className="">
      <div className="container mx-auto px-5 lg:px-10 flex flex-col  gap-1 justify-center items-center min-h-screen pt-32 lg:pt-0 lg:flex-row">
        <div className="relative  border p-10 w-full">
          <div className="absolute drop-shadow-xl top-[10%] right-[45%] bg-blue-500 rounded-full w-10 h-10"></div>
          <div className="bg-gradient-to-tr from-white to-gray-200 white p-10 rounded-2xl text-center font-poppins">
            <h3 className="text-xl font-bold mb-3">Phone</h3>
            <p className="text-base text-gray-500">99656 60900</p>
            <p className="text-base text-gray-500">63794 78058</p>
          </div>
          <div className="bg-pirmary py-2 rounded-b-2xl text-center font-bold text-white cursor-pointer">
            Call Us <FaArrowRight className="inline-block" />
          </div>
        </div>

        <div className="relative  border p-10 w-full">
          <div className="absolute drop-shadow-xl top-[10%] right-[45%] bg-blue-500 rounded-full w-10 h-10"></div>
          <div className="bg-gradient-to-tr from-white to-gray-200 white p-10 rounded-2xl text-center font-poppins">
            <h3 className="text-xl font-bold mb-3">Phone</h3>
            <p className="text-base text-gray-500">99656 60900</p>
            <p className="text-base text-gray-500">63794 78058</p>
          </div>
        </div>

        <div className="relative  border p-10 w-full">
          <div className="absolute drop-shadow-xl top-[10%] right-[45%] bg-blue-500 rounded-full w-10 h-10"></div>
          <div className="bg-gradient-to-tr from-white to-gray-200 white p-10 rounded-2xl text-center font-poppins">
            <h3 className="text-xl font-bold mb-3">Phone</h3>
            <p className="text-base text-gray-500">99656 60900</p>
            <p className="text-base text-gray-500">63794 78058</p>
          </div>
        </div>
      </div>
      ;
    </div>
  );
}

export default Contact;
