import avvaLogo from "../asset/avvaMarketing.png";
import billLogo from "../asset/billabong.png";
import ganapathy from "../asset/ganapathy.png";
import kangaroo from "../asset/kangaroo.png";
import littleArbiaLogo from "../asset/littleArabia.png";
import makeNBakec from "../asset/makeNbake.png";
import mrAyul from "../asset/mrAyul.png";

function Coustomers() {
  return (
    <div className="container mx-auto px-10">
      <div className="mt-8">
        <h2 className="font-poppins font-bold text-center text-2xl md:text-3xl">
          Preferred by Leading Enterprises
        </h2>
        <div className="grid grid-cols-4 gap-20   ">
          <div>
            <img src={avvaLogo} alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Coustomers;
