import { BiSolidPhone } from "react-icons/bi";

import { ReactComponent as Circle } from "../asset/svg/circle.svg";
import { ReactComponent as TubeLg } from "../asset/svg/tube-lg.svg";
import { useEffect } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const circle = useRef();
  const tube1 = useRef();
  const tube2 = useRef();
  const tube3 = useRef();

  useEffect(() => {
    const parallax = (event) => {
      //console.log(circle.current);
      const x = event.clientX;
      const y = event.clientY;
      circle.current.style.transform = `translateX(${x / 50}px) translateY(${
        y / 50
      }px)`;
      tube1.current.style.transform = `translateX(${x / 30}px) translateY(${
        y / 40
      }px)`;
      tube2.current.style.transform = `translateX(${-x / 30}px) translateY(${
        -y / 60
      }px) rotate(280deg)`;
      tube3.current.style.transform = `translateX(${x / 30}px) translateY(${
        y / 100
      }px) rotate(180deg)`;
    };

    document.addEventListener("mousemove", parallax);
    return () => document.removeEventListener("mousemove", parallax);
  }, []);

  const navigate = useNavigate();

  return (
    <div className="">
      <div className="h-screen grid grid-cols-1 lg:grid-cols-3 font-poppins container mx-auto pt-20 lg:px-20">
        <div className=" flex flex-col justify-center col-span-2">
          <h1 className="text-[45px] leading-[3rem] text-center lg:leading-[5rem] lg:text-[70px] lg:text-left font-extrabold">
            INNOVATIVE SOLUTION,
          </h1>
          <h2 className="lg:text-[20px]  lg:text-left mt-5 text-center text-gray-500">
            crafting your digital success story
          </h2>
          <div
            className="flex py-3 justify-center  gap-2 mt-4 font-semibold items-center text-pirmary lg:justify-start"
            onClick={() => navigate("/contact")}
          >
            <div className=" bg-pirmary p-3 text-white rounded-full cursor-pointer hover:scale-110 duration-200">
              <BiSolidPhone size={35} />
            </div>
            <p className="cursor-pointer"> Drop us a line</p>
          </div>
        </div>
        <div className="relative hidden lg:block place-self-center w-full mb-[100%]">
          <div
            className={`absolute top-0 w-full duration-300 ease-linear`}
            ref={circle}
          >
            <Circle />
          </div>
          <div
            className={`absolute top-0 w-1/3 duration-100 ease-linear`}
            ref={tube1}
          >
            <TubeLg />
          </div>
          <div
            className="absolute top-[16rem] right-36 rotate-[280deg] w-1/5 duration-300 ease-linear"
            ref={tube2}
          >
            <TubeLg />
          </div>
          <div
            className="absolute top-0 right-12 w-1/5 duration-300 ease-linear"
            ref={tube3}
          >
            <TubeLg />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
