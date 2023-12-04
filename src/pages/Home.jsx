import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import FeedBack from "../components/FeedBack";
import Coustomers from "../components/Coustomers";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <>
      <Helmet>
        <title>Azen | Web development company</title>
        <meta
          name="description"
          content="Web development company located at erode"
        />
        <meta
          name="keywords"
          content="web development, website, web development company in erode"
        />
      </Helmet>
      <div>
        <HeroSection />
        <Services />
        <FeedBack />
        <Coustomers />
      </div>
    </>
  );
}

export default Home;
