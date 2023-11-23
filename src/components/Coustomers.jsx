import avvaLogo from "../asset/avvaMarketing.png";
import billLogo from "../asset/billabong.png";
import ganapathy from "../asset/ganapathy.png";
import kangaroo from "../asset/kangaroo.png";
import littleArbiaLogo from "../asset/littleArabia.png";
import makeNBakec from "../asset/makeNbake.png";
import mrAyul from "../asset/mrAyul.png";
import sportsVillage from "../asset/sports village - logo.png";

const companies = [
  {
    name: "avva",
    logo: avvaLogo,
  },
  {
    name: "billabong",
    logo: billLogo,
  },
  {
    name: "ganapathy",
    logo: ganapathy,
  },
  {
    name: "kangaroo",
    logo: kangaroo,
  },
  {
    name: "littleArbiaLogo",
    logo: littleArbiaLogo,
  },
  {
    name: "makeNBakec",
    logo: makeNBakec,
  },
  {
    name: "mrAyul",
    logo: mrAyul,
  },
  // {
  //   name: "sportsVillage",
  //   logo: sportsVillage,
  // },
];

function Coustomers() {
  return (
    <div className=" mx-auto my-24 px-5 lg:px-10">
      <div className="mt-8">
        <h2 className="font-poppins font-bold text-center text-2xl lg:text-3xl mt-10">
          Preferred by Leading Enterprises
        </h2>

        <div className="grid gap-4 grid-cols-2 lg:flex lg:flex-wrap lg:justify-center mt-10">
          {/* grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-x-20 mt-10 */}
          {companies.map((company) => (
            <div key={company.name} className="lg:w-[15%]">
              <img src={company.logo} alt={company.name} srcset="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Coustomers;
