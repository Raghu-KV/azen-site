import SingleFeedBack from "./SingleFeedBack";
function FeedBack() {
  const feedBack = [
    {
      content:
        "The service was amazing, i approached them for designing logo and visiting card having a model with me and the product they provided was exactly what i gave and the after sales services was also too good coz i had a little bit changes to the design and they are customer friendly too so i recommend them to you all for any designing and marketing services",
      person: "Prasanna M",
      postion: "Erode",
    },
    {
      content:
        "I am extremely pleased with the web development services provided by Azen. The team demonstrated a high level of expertise, professionalism, and dedication throughout the project I appreciate the attention to detail, responsiveness to our feedback, and the commitment to delivering a high-quality product within the specified timeline. ",
      person: "Nagaraj Muthusamy",
      postion: "Erode Loan Lonsultancy",
    },
    {
      content: "Thank you so much for best support",
      person: "Dharani G",
      postion: "Erode",
    },
  ];

  return (
    <div className="px-10 mx-auto bg-gradient-to-tl from-white to-gray-200">
      <div className="container  font-poppins mx-auto rounded-2xl pb-10 lg:p-10">
        <h3 className="font-poppins font-bold text-center text-2xl text-black lg:text-3xl px-2 py-5 mb-4">
          Yes, We Deliver on the Promise !
        </h3>
        <div className="flex flex-col gap-6 mb-10 lg:flex-row lg:px-10">
          {feedBack.map((feedBack) => (
            <SingleFeedBack feedBack={feedBack} key={feedBack.person} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeedBack;
