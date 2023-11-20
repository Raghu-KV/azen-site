import { ImQuotesLeft } from "react-icons/im";

function SingleFeedBack({ feedBack }) {
  return (
    <div className="border-white border px-5 py-5 text-white  rounded-2xl basis-1/3">
      <div>
        <ImQuotesLeft size={45} className="text-secondery" />
      </div>
      <div className="flex">
        <div className="flex flex-col">
          <p className="text-sm text-justify text-gray-200 mt-5">
            {feedBack.content}
          </p>
          <div className="flex items-center mt-3 gap-3">
            <div className="w-12 h-12 bg-slate-400 rounded-full"></div>
            <div>
              <h3 className=" font-semibold">{feedBack.person}</h3>
              <h4 className="text-sm">{feedBack.postion}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleFeedBack;
