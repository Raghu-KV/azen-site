import image from "../asset/How-to-Build-Your-Own-Laptop-From-Scratch-removebg-preview.png";
import e_commerce from "../asset/e-commerce.png";
import soft from "../asset/software.png";
import ui from "../asset/ui.png";
import SingleServiceContainer from "./SingleServiceContainer";

const dev = [
  {
    heading: "Web Development",
    content:
      "Whether you're starting from scratch or looking to revamp your existing website, our skilled team of developers crafts responsive, visually stunning, and user-friendly websites tailored to your unique brand identity. We leverage the latest technologies to ensure your online presence stands out in today's competitive market.",
    image: image,
  },
  {
    heading: "E-Commerce Solutions",
    content:
      "Ready to launch your online store? We design and develop secure, scalable, and feature-rich e-commerce websites that drive sales and provide a smooth shopping experience for your customers. From payment gateways to inventory management, we've got you covered",
    image: e_commerce,
  },
  {
    heading: "Custom Software Development",
    content:
      "Your business is unique, and so are its needs. Our custom software solutions are tailored to address your specific requirements, optimizing processes and enhancing overall efficiency. We work closely with you to understand your goals and deliver a solution that exceeds expectations.",
    image: soft,
  },
  {
    heading: "UX & UI Design",
    content:
      " We understand that the success of any digital product hinges on how well it engages and delights its users. With a passionate team of UX/UI designers, we are dedicated to creating seamless, visually stunning, and user-centric interfaces that leave a lasting impression.",
    image: ui,
  },
];

function ServicesContainer({ service }) {
  if (service === "dev") {
    return (
      <div>
        {dev.map((content, index) => (
          <SingleServiceContainer
            content={content}
            key={content.heading}
            index={index}
          />
        ))}
      </div>
    );
  } else if (service === "mrk") {
    return (
      <div>
        {dev.map((content, index) => (
          <SingleServiceContainer
            content={content}
            key={content.heading}
            index={index}
          />
        ))}
      </div>
    );
  }
}

export default ServicesContainer;
