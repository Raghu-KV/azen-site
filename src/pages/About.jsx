import laptop from "../asset/How-to-Build-Your-Own-Laptop-From-Scratch-removebg-preview.png";
import { FaRegHandshake } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";
import { FaRegHandSpock } from "react-icons/fa";
import { FaRegGrinAlt } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import SingleWhoWeAre from "../components/SingleWhoWeAre";

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
      icon: <FaRegGrinAlt size={40} className="text-gray-500" />,
      content:
        "We're not just skilled professionals; we're a team with genuine smiles, ready to make your journey enjoyable.",
    },
  ];

  return (
    <div className="container pt-24 mx-auto px-5 md:px-10 font-poppins">
      <div className="flex gap-4 items-center">
        <div className="flex flex-col items-center basis-1/3">
          <img src={laptop} alt="laptopImage" srcset="" className="block" />
          <h2 className=" font-bold text-3xl">Who We Are</h2>
        </div>
        <div className="flex flex-row flex-wrap gap-5 justify-center basis-2/3">
          {whoWeAre.map((item, index) => (
            <SingleWhoWeAre data={item} key={item.heading} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
