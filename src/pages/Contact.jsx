import { FaPhoneAlt } from "react-icons/fa";
import SingleContactUs from "../components/SingleContactUs";
import { FaEnvelope } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
function Contact() {
  const contactDetails = [
    {
      type: "Phone",
      content: "99656 60900",
      link: "tel:+919965660900",
      icon: <FaPhoneAlt size={25} color="white" />,
      msg: "Call Us",
    },
    {
      type: "E-Mail",
      content: "azen.india@gmail.com",
      link: "mailto:azen.india@gmail.com",
      icon: <FaEnvelope size={25} color="white" />,
      msg: "Mail Us",
    },
    {
      type: "Address",
      content: "Akilmadu street Near erode bus stand",
      link: "https://www.google.com/maps/dir//azen/@11.3456099,77.7062292,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3ba96fe5c63304b7:0x13cfc798609e206e!2m2!1d77.7211511!2d11.3441351?entry=ttu",
      icon: <FaMapMarkerAlt size={25} color="white" />,
      msg: "View on Map",
    },
  ];

  return (
    <div className="">
      <div className="container mx-auto px-5 lg:px-10 flex flex-col  gap-1 justify-center items-center min-h-screen pt-32 lg:pt-0 lg:flex-row">
        {contactDetails.map((item) => (
          <SingleContactUs item={item} key={item.type} />
        ))}
      </div>
    </div>
  );
}

export default Contact;
