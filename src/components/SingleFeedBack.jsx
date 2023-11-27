import { ImQuotesLeft } from "react-icons/im";

function SingleFeedBack({ feedBack }) {
  return (
    <div className="border-black border px-5 py-5 text-white  rounded-2xl basis-1/3">
      <div>
        <ImQuotesLeft size={45} className="text-pirmary" />
      </div>
      <div className="flex">
        <div className="flex flex-col">
          <p className="text-sm text-justify text-gray-500 mt-5">
            {feedBack.content}
          </p>
          <div className="flex items-center mt-3 gap-3">
            <div className="px-4 py-2 bg-gray-500 rounded-full font-poppins font-bold text-center text-xl">
              {feedBack.person[0]}
            </div>
            <div>
              <h3 className="text-pirmary font-semibold">{feedBack.person}</h3>
              <h4 className="text-sm text-gray-500">{feedBack.postion}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleFeedBack;
