import { BiCopyright } from "react-icons/bi";
function Footer() {
  return (
    <div className="bg-gray-200">
      <div className="container mx-auto text-black text-center py-10 mt-10">
        Azen <BiCopyright className="inline-block mx-1" />
        Copyright 2023, All Rights Reserved
      </div>
    </div>
  );
}

export default Footer;
