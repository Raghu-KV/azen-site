import AzenLogoWhite from "../asset/svg/logoWhite.svg";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
function Footer() {
  return (
    <div className="bg-gradient-to-r from-purple-800 to-pirmary font-poppins  ">
      <div className="container mx-auto text-center py-10 mt-10px-10 lg:px-5">
        <div className="flex flex-col lg:flex-row  justify-between items-center gap-10">
          <div>
            <img src={AzenLogoWhite} alt="" className=" w-52" />
            {/* <AzenLogo className=" w-52" /> */}
          </div>

          <div className=" text-white">
            <div className="font-bold text-base lg:text-xl mb-3">
              Follow Us On
            </div>
            <FaInstagram
              className="inline-block mx-1"
              color="white"
              size={35}
            />
            <FaFacebook className="inline-block mx-1" color="white" size={35} />
          </div>

          <div className="text-white flex items-center gap-10">
            <div>
              <h3 className="font-bold text-base lg:text-xl">Contact</h3>
              <div className="text-base">
                <a href="tel:+919965660900" className=" underline">
                  <p> 99656 60900</p>
                </a>
                <a href="tel:+916379478058" className=" underline">
                  <p>63794 78058</p>
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-base lg:text-xl mt-5">Address</h3>
              <div className="text-sm">
                <p>Akilmadu main street,</p>
                <p>near bus stand,</p>
                <p>638001</p>
              </div>

              <a
                href="https://www.google.com/maps/dir//azen/@11.3456099,77.7062292,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3ba96fe5c63304b7:0x13cfc798609e206e!2m2!1d77.7211511!2d11.3441351?entry=ttu"
                className="underline"
              >
                VIEW ON MAP
              </a>
            </div>
          </div>
        </div>

        {/* Azen <BiCopyright className="inline-block mx-1" />
        Copyright 2023, All Rights Reserved */}
      </div>
    </div>
  );
}

export default Footer;
