import AzenLogo from "../asset/svg/logo.svg";
import { BiSolidPhone } from "react-icons/bi";
import { BiMenu } from "react-icons/bi";
import { GoX } from "react-icons/go";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <div className=" bg-white fixed w-full z-10">
      <div className="container mx-auto">
        <div className="flex min-h-[50px] items-center w-full px-5 lg:px-20 font-poppins font-semibold justify-between">
          <div className="lg:hidden z-20" onClick={() => setOpen(!open)}>
            {open ? <GoX size={30} /> : <BiMenu size={30} />}
          </div>
          {open && (
            <div
              className="bg-black absolute w-screen h-screen top-0 left-0 opacity-20"
              onClick={() => setOpen(false)}
            ></div>
          )}

          <ul
            className={`lg:hidden flex flex-col gap-5 absolute z-10 top-0 left-0 w-2/3 h-screen justify-center items-center ${
              open ? "translate-x-0" : "translate-x-[-100%]"
            } duration-150 ease-in-out drop-shadow-[50px] bg-white`}
          >
            <li className="block" onClick={() => setOpen(false)}>
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="block" onClick={() => setOpen(false)}>
              <NavLink to="/about">About</NavLink>
            </li>

            <li className="block" onClick={() => setOpen(false)}>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>

          {/* logo DIV */}
          <div className="py-5 cursor-pointer">
            <Link to="/">
              <img src={AzenLogo} alt="" className="w-32 lg:w-40" />
              {/* <AzenLogo className="w-32 lg:w-48" /> */}
            </Link>
          </div>
          <ul className="hidden lg:flex gap-5">
            <li className="block cursor-pointer">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="block cursor-pointer">
              <NavLink to="/about">About</NavLink>
            </li>

            <li className="block cursor-pointer">
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
          <div className="flex items-center gap-1 px-3 py-2 rounded-lg lg:hidden">
            <Link to={"/contact"}>
              {" "}
              <BiSolidPhone size={30} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
