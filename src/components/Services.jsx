import { useState } from "react";
import ServicesContainer from "./ServicesContainer";
function Services() {
  //"dev" --> development
  //"mkr" --> marketing
  const [service, setService] = useState("dev");
  return (
    <div className="container mx-auto px-10">
      <div>
        <h2 className=" font-poppins font-bold text-center text-2xl md:text-3xl">
          Services that we offer
        </h2>
        <p className="mt-3 font-poppins text-center text-gray-500 text-base">
          we take pride in delivering a diverse range of professional services
          tailored to meet your unique needs
        </p>
      </div>
      <div className="flex justify-center gap-3 font-poppins font-semibold mt-6">
        <div
          className={`px-3 py-2 rounded-lg border-2 border-pirmary cursor-pointer hover:scale-105 duration-100 text-sm ${
            service === "dev" && "bg-pirmary text-white"
          } md:text-base`}
          onClick={() => setService("dev")}
        >
          Development
        </div>
        <div
          className={`px-3 py-2 rounded-lg border-2 border-pirmary cursor-pointer hover:scale-105 duration-100 text-sm  ${
            service === "mrk" && "bg-pirmary text-white"
          } md:text-base`}
          onClick={() => setService("mrk")}
        >
          Commercialization
        </div>
      </div>
      <ServicesContainer service={service} />
    </div>
  );
}

export default Services;
