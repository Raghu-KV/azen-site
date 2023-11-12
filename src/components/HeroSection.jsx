import { BiSolidPhone } from "react-icons/bi";

import { ReactComponent as Circle } from "../asset/svg/circle.svg";
import { ReactComponent as TubeLg } from "../asset/svg/tube-lg.svg";

function HeroSection() {
  return (
    <div className="pt-20">
      <div className="min-h-screen grid grid-cols-3 gap-2  font-poppins container mx-auto">
        <div className=" flex flex-col justify-center col-span-2 ">
          <h1 className="text-[40px] md:text-[70px] font-extrabold">
            INNOVATIVE SOLUTION,
          </h1>
          <h2 className="text-[30px] font-extrabold ">
            crafting your digital success story
          </h2>
          <div className="flex py-3  gap-2 mt-4 font-semibold items-center text-pirmary cursor-pointer">
            <div className=" bg-pirmary p-3 text-white rounded-full  hover:scale-110 duration-200">
              <BiSolidPhone size={35} />
            </div>
            <p> Drop us a line</p>
          </div>
        </div>
        <div className="relative hidden md:block">
          <div className="absolute top-40 w-full">
            <Circle />
          </div>
          <div className="absolute top-40 w-1/3">
            <TubeLg />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
