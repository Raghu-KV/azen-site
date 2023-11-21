import laptop from "../asset/How-to-Build-Your-Own-Laptop-From-Scratch-removebg-preview.png";

function About() {
  return (
    <div className="container pt-20 mx-auto px-5 md:px-10 font-poppins">
      <div className="flex gap-4">
        <div className="flex flex-col items-center">
          <img
            src={laptop}
            alt="laptopImage"
            srcset=""
            className="block w-[70%]"
          />
          <h2 className=" font-bold text-3xl">Who We Are</h2>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div>
            <p>
              We're a bunch of go-getters who decided to turn our passion into a
              gig
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
