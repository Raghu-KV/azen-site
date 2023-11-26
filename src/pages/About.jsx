import laptop from "../asset/How-to-Build-Your-Own-Laptop-From-Scratch-removebg-preview.png";
import { FaRegHandshake } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";
import { FaRegHandSpock } from "react-icons/fa";
import { FaRegGrinAlt } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";

import question from "../asset/question.png";
import cog from "../asset/cog.png";

import SingleWhoWeAre from "../components/SingleWhoWeAre";
import SingleTech from "../components/SingleTech";

function About() {
  const whoWeAre = [
    {
      heading: "We're Your Digital Pals",
      icon: <FaRegHandshake size={40} className="text-gray-500" />,
      content:
        "Think of us as your friendly digital companions, ready to make your online journey awesome.",
    },
    {
      heading: "Turning Dreams into Digital Reality",
      icon: <FaRegLightbulb size={40} className="text-gray-500" />,
      content:
        "Our mission? Transforming your ideas into vibrant and functional digital experiences.",
    },
    {
      heading: "Not Your Average Company",
      icon: <FaRegHandSpock size={40} className="text-gray-500" />,
      content:
        "We're not just about codes and pixels; we're about creating wow-worthy experiences that stand out.",
    },
    {
      heading: "Building Relationships, Not Just Websites",
      icon: <FaRegHeart size={40} className="text-gray-500" />,
      content:
        "We believe in building lasting relationships. Your success is our success, and we're here to celebrate every win with you.",
    },
    {
      heading: "Skills and Smiles",
      icon: <FaRegGrinAlt size={40} className="text-gray-500" />,
      content:
        "We're not just skilled professionals; we're a team with genuine smiles, ready to make your journey enjoyable.",
    },
    {
      heading: "Tech Talk in Human Language",
      icon: <FaCheck size={40} className="text-gray-500" />,
      content:
        "We're not just skilled professionals; we're a team with genuine smiles, ready to make your journey enjoyable.",
    },
  ];

  const tech = [
    {
      icon: <FaJs size={40} />,
      name: "JavaScript",
    },
    {
      icon: <FaReact size={40} />,
      name: "React",
    },
    {
      icon: <SiExpress size={40} />,
      name: "Express",
    },
    {
      icon: <FaNodeJs size={40} />,
      name: "NodeJs",
    },
    {
      icon: <SiTailwindcss size={40} />,
      name: "Tailwind",
    },
    {
      icon: <FaHtml5 size={40} />,
      name: "HTML",
    },
    {
      icon: <FaCss3Alt size={40} />,
      name: "CSS",
    },
    {
      icon: <GrMysql size={40} />,
      name: "my SQL",
    },
    {
      icon: <SiMongodb size={40} />,
      name: "MongoDb",
    },
  ];

  return (
    <div className="mb-20">
      <div className="container pt-24 mx-auto px-5 lg:px-10 font-poppins ">
        <div className="flex flex-col gap-4 items-center lg:flex-row">
          <div className="flex flex-col items-center lg:basis-1/3">
            <img
              src={question}
              alt="laptopImage"
              srcset=""
              className="block w-[45%]"
            />
            <h2 className=" font-bold text-3xl">Who We Are</h2>
          </div>
          <div className="flex flex-row flex-wrap gap-5 justify-center lg:basis-2/3">
            {whoWeAre.map((item, index) => (
              <SingleWhoWeAre data={item} key={item.heading} index={index} />
            ))}
          </div>
        </div>
      </div>
      <div className="mt-20 p-10 bg-gradient-to-r from-purple-800 to-pirmary text-white">
        <h2 className="text-center font-bold text-3xl"> About the Company</h2>
        <p className="text-base text-justify py-5 lg:px-10">
          In the year 2021, Azen was born with a singular mission: to empower
          businesses by crafting exceptional digital experiences. From the very
          beginning, our team of passionate tech enthusiasts set out to redefine
          the standards of web development, app development, and digital
          marketing. At Azen, we understand that your website is the virtual
          storefront of your business. Our seasoned web developers blend
          creativity with functionality to ensure that your online presence not
          only captivates but also converts visitors into loyal customers. From
          responsive design to e-commerce solutions, we weave digital magic
          tailored to your unique needs. In the palm of your users' hands lies
          the potential for unparalleled engagement. Azen specializes in
          crafting mobile applications that are not just functional but provide
          an immersive user experience. Whether you're launching a startup or
          enhancing an existing app, our development wizards ensure that your
          vision comes to life in the most user-friendly and innovative way
          possible.
        </p>
      </div>

      <div className="mt-10">
        <div className="flex flex-col lg:flex-row-reverse gap-10 justify-center items-center">
          <div className="flex flex-col items-center lg:basis-1/3">
            <img
              src={cog}
              alt="laptopImage"
              srcset=""
              className="block w-[45%]"
            />
            <h3 className="font-bold text-3xl text-center px-10">
              Technologies we Work with
            </h3>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {tech.map((item, index) => (
              <SingleTech item={item} key={item.name} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
