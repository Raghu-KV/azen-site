import { ReactComponent as AzenLogo } from "../asset/svg/logo.svg";

function NavBar() {
  return (
    <div className=" bg-white border fixed w-full">
      <div className="container mx-auto">
        <div className="flex min-h-[70px] items-center">
          {/* logo DIV */}
          <div className="p-5">
            <AzenLogo className="w-36" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
