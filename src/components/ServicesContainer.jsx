import image from "../asset/How-to-Build-Your-Own-Laptop-From-Scratch-removebg-preview.png";
import e_commerce from "../asset/e-commerce.png";
import soft from "../asset/software.png";
import ui from "../asset/ui.png";
import marketingStr from "../asset/marketingStr.png";
import research from "../asset/research.png";
import analyses from "../asset/analasis.png";
import ads from "../asset/ads.png";
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

const mrk = [
  {
    heading: "Marketing Strategy",
    content:
      "No two businesses are alike, and neither are our solutions. We tailor our marketing strategies to align with your specific goals, ensuring a customized approach that delivers results.",
    image: marketingStr,
  },
  {
    heading: "Market Research",
    content:
      "Understand who your customers are, what they want, and how to reach them. Market research unveils the habits, preferences, and pain points of your target audience, ensuring your products or services resonate Keep a keen eye on industry trends and emerging opportunities. With market research, you're not just following; you're leading. Anticipate shifts, adapt strategies, and be the first to seize new possibilities.",
    image: research,
  },
  {
    heading: "Competition analyses",
    content:
      "Identify what makes your competitors tick. Through in-depth analysis, we unveil their strengths, weaknesses, and unique selling propositions, empowering you to position your brand strategically. By understanding your competitors, you can anticipate industry shifts, market disruptions, and potential challenges, allowing you to proactively mitigate risks.",
    image: analyses,
  },
  {
    heading: "ad campaigns",
    content:
      "We don't just throw ads; we strategically place them where your audience is. Our campaigns are precision-engineered to target the right demographics at the right time, ensuring maximum impact.",
    image: ads,
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
        {mrk.map((content, index) => (
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
